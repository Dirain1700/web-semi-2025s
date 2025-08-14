// md-js.test.js
// Exclude 01-Intro, 02-Env, 03-Types, README.md, and code blocks with // no-ci. Test JS code blocks in other md files.

const fs = require("fs");
const path = require("path");
const assert = require("assert");

describe("Markdown JS code blocks", () => {
    // Exclude these directories and files
    const excludeDirs = ["node_modules", "01-Intro", "02-Env", "03-Types"];
    const excludeFiles = ["README.md"];

    // Recursively get all .md files except excluded ones
    function getMdFiles(dir) {
        let results = [];
        fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
            const fullPath = path.join(dir, entry.name);
            // Only traverse directories that match /^\d{2}-/
            if (entry.isDirectory() && /^\d{2}-/.test(entry.name) && !excludeDirs.includes(entry.name)) {
                results = results.concat(getMdFiles(fullPath));
            } else if (entry.isFile() && entry.name.endsWith(".md") && !excludeFiles.includes(entry.name)) {
                results.push(fullPath);
            }
        });
        return results;
    }

    // Extract JS code blocks from markdown
    function extractJsBlocks(md) {
        const blocks = [];
        const lines = md.split("\n");
        let inBlock = false;
        let block = [];
        let blockStart = 0;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (!inBlock && line.match(/^```(js|javascript)/)) {
                inBlock = true;
                block = [];
                blockStart = i;
            } else if (inBlock && line.startsWith("```")) {
                // Only skip if the first line is // no-ci
                const firstLine = block[0] || "";
                if (!firstLine.includes("// no-ci")) {
                    blocks.push({ code: block.join("\n"), start: blockStart });
                }
                inBlock = false;
            } else if (inBlock) {
                block.push(line);
            }
        }
        return blocks;
    }

    const root = path.resolve(__dirname, "..");
    const mdFiles = getMdFiles(root);

    for (let m = 0; m < mdFiles.length; m++) {
        const mdPath = mdFiles[m];
        const md = fs.readFileSync(mdPath, "utf8");
        const blocks = extractJsBlocks(md);
        describe(path.relative(root, mdPath), () => {
            for (let b = 0; b < blocks.length; b++) {
                const block = blocks[b];
                // Check if there is an // expect: comment
                const expectMatch = block.code.match(/\/\/ expect: (.*)/);
                if (block.code.includes("require(")) {
                    it.skip(`block #${block.start + 1} (require skipped)`, () => {});
                } else if (expectMatch) {
                    it(`block #${block.start + 1} (expect)`, () => {
                        const logs = [];
                        const origLog = console.log;
                        console.log = (...args) => logs.push(args.join(" "));
                        let error = null;
                        try {
                            eval(block.code);
                        } catch (e) {
                            error = e;
                        }
                        console.log = origLog;
                        if (error) throw error;
                        // Compare output (multi-line supported)
                        const expects = block.code
                            .split("\n")
                            .filter((l) => l.includes("// expect:"))
                            .map((l) => l.split("// expect:")[1].trim());
                        assert.deepEqual(logs, expects);
                    });
                } else {
                    it(`block #${block.start + 1} (no expect)`, () => {
                        let error = null;
                        try {
                            eval(block.code);
                        } catch (e) {
                            error = e;
                        }
                        if (error) throw error;
                    });
                }
            }
        });
    }
});
