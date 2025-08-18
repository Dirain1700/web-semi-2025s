"use strict";

const inputFormLabel = "inputNumber";
const execButtonLabel = "executeButton";
const resultContainerLabel = "resultContainer";
const errorContainerLabel = "errorContainer";
const resultLabel = "result";
const errorLabel = "error";

const executeButton = document.getElementById(execButtonLabel);
if (!executeButton) {
    throw new Error("実行ボタンが見つかりません。");
}
executeButton.addEventListener("click", () => {
    const num = getInputNumber();
    showAnswer(calc(num), num);
});

/**
 * @typedef {{[key: string]: number}} Divisors
 */

/**
 * @returns {number} 入力された数値
 */
function getInputNumber() {
    const inputElement = document.getElementById(inputFormLabel);
    if (!inputElement) {
        throw new Error("入力フォームが見つかりません。");
    }

    const num = parseInt(inputElement.value, 10);
    if (Number.isNaN(num) || num <= 1) {
        /**
         * @type {HTMLDivElement | null} errorContainer
         */
        const errorContainer = document.getElementById(errorContainerLabel);
        /**
         * @type {HTMLParagraphElement | null} errorMessage
         */
        const errorMessage = document.getElementById(errorLabel);
        if (errorContainer && errorMessage) {
            errorContainer.hidden = false;
            errorMessage.textContent = "無効な入力です。";
            /**
             * @type {HTMLDivElement | null} resultContainer
             */
            const resultContainer = document.getElementById(resultContainerLabel);
            if (resultContainer) {
                resultContainer.hidden = true;
            }
        }
        throw new Error("無効な入力です。");
    }
    return num;
}

/**
 * @param {number} oriNum
 * @returns {Divisors}
 */
function calc(oriNum) {}

/**
 * @param {Divisors} divisors
 * @param {number} ori
 */
function showAnswer(divisors, ori) {
    /**
     * @type {HTMLDivElement | null} resultContainer
     */
    const resultContainer = document.getElementById(resultContainerLabel);
    /**
     * @type {HTMLParagraphElement | null} resultElement
     */
    const resultElement = document.getElementById(resultLabel);
    if (!resultContainer || !resultElement) {
        throw new Error("結果表示エリアが見つかりません。");
    }

    let result = ori.toString() + " = ";

    /**
     * @type {string[]} terms
     */
    const terms = [];
    for (const [key, value] of Object.entries(divisors)) {
        terms.push(key + (value > 1 ? `<sup>${value}</sup>` : ""));
    }
    result += terms.join(" × ");
    resultElement.innerHTML = result;
    resultContainer.hidden = false;
    /**
     * @type {HTMLDivElement | null} errorContainer
     */
    const errorContainer = document.getElementById(errorContainerLabel);
    if (!errorContainer?.hidden) {
        errorContainer.hidden = true;
    }
}
