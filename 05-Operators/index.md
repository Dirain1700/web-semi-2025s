# Operators

## おはこんばんにちは。さて、みなさんお気づきかもしれませんが、最近Dirainくんがサボっています。というわけで、今回は私GitHub Copilotが代わりに演算子の話を書きます。

## はじめに

JavaScriptの演算子は種類が多く、細かい挙動もたくさんありますが、正直なところ「MDNの例を実際に触ってみる」のが一番理解が早いです。ここでは代表的な演算子とその使い方をざっくり紹介します。細かい挙動や例外は、ぜひMDNのサンプルを動かして体験してください。

---

## 算術演算子

```js
console.log(2 + 3); // expect: 5
console.log(5 - 1); // expect: 4
console.log(4 * 2); // expect: 8
console.log(8 / 2); // expect: 4
console.log(7 % 3); // expect: 1
console.log(2 ** 3); // expect: 8
```

---

`+`演算子は、数値の足し算だけでなく、文字列同士や「文字列＋数値」の連結にも使われます。

人間注(?): どっかで触れたけどback quoteによるテンプレート文字列も使えます

```js
console.log("Hello, " + "world!"); // expect: Hello, world!
console.log("1" + 2); // expect: 12
console.log(1 + "2"); // expect: 12
console.log(1 + 2 + "3"); // expect: 33
console.log("3" + 1 + 2); // expect: 312
```

**文字列と数字を`+`で連結すると、暗黙的に型変換（数値→文字列）が起こります。意図しない結果になることがあるので注意しましょう。**

---

## 代入演算子

```js
let x = 5;
x += 2;
console.log(x); // expect: 7
x -= 1;
console.log(x); // expect: 6
x *= 3;
console.log(x); // expect: 18
x /= 2;
console.log(x); // expect: 9
x %= 4;
console.log(x); // expect: 1
x **= 2;
console.log(x); // expect: 1
```

---

## インクリメント・デクリメント

```js
let y = 1;
y++;
console.log(y); // expect: 2
y--;
console.log(y); // expect: 1
// プリフィックス（++y, --y）とポストフィックス（y++, y--）の違い
y = 5;
console.log(++y); // expect: 6
console.log(y++); // expect: 6
console.log(y); // expect: 7
console.log(--y); // expect: 6
console.log(y--); // expect: 6
console.log(y); // expect: 5
// ++y, --y は「その場で値を変えてから返す」
// y++, y-- は「今の値を返してから後で変える」
```

---

## 比較演算子

人間注: `===`と`!==`の厳密な演算子を使いましょう。曖昧ダメ、ゼッタイ。

```js
console.log(2 == "2"); // expect: true
console.log(2 === "2"); // expect: false
console.log(3 != 4); // expect: true
console.log(3 !== "3"); // expect: true
console.log(5 > 2); // expect: true
console.log(5 <= 5); // expect: true
```

---

## 論理演算子

```js
console.log(true && false); // expect: false
console.log(true || false); // expect: true
console.log(!true); // expect: false
```

---

## 三項演算子（条件演算子）

人間注: if文を使った方が読みやすいことが多いです

```js
let age = 20;
let result = age >= 18 ? "成人" : "未成年";
console.log(result); // expect: 成人
```

---

## typeof演算子

```js
console.log(typeof 123); // expect: number
console.log(typeof "abc"); // expect: string
console.log(typeof true); // expect: boolean
```

---

## 参考リンク

- [演算子 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators)

---

次回は、条件分岐や制御構文の話をする予定です。Dirainくんがサボり続けていたら、また私が書くかもしれません。

初めてAIに全部書かせたんですけど、わりといけますね。なお、プロンプトで格闘しているので、私がちゃんと目を通してます。なげやりではないです。というかけっこう加筆してるし...
