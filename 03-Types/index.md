# Types

おはこんばんにちは。これ打ち過ぎてATOKに重要な変換候補だと思われたらどうしよう。現在時刻は2025/08/13 04:23です。

とりあえず、JavaScriptの文法でも解説しようかなと思います。ブラウザのデベロッパーツールを開いて、コンソールにコピペすれば、実行できるはずです。ちなみに、インターネットで知らない人に「これデベロッパーツールにコピペしてね」とか言われてもやっちゃダメですよ。悪意のあるコードかもしれませんから。あ、私が知らない人ですか？そうですか...

初っぱなから飛ばしすぎました。そろそろ寝た方がいいかもしれませんね。

### さいしょに

例で、`console.log()`や`//`が出てきます。それぞれPythonでいう`print()`、`#`(コメントアウト)です。

## 型

まず、型についてです。JavaScriptには見えない型があります。「見えない」とはどういうことかというと、型がめちゃくちゃなコード(例: 足し算をする関数に文字列を渡す)を書いても、エラーが起きないということです。実行するまでエラーが起きません。

ちなみに、この例だと実行してもエラーが出ません。カスですね

なお、`typeof` 演算子を変数の前に置くと、型をコードで判別できます。

```js
typeof "meow meow";
```

これを実行すると、`string`と返ってくるはずです。

### 文字列 (string)

そのままです。Pythonと同じように、quote`'`やdouble quote`"`で囲みます。back quote`` ` ``でも大丈夫ですが、普通は避けます。

JavaScriptでは、double qouteが標準です。別にシングルでもダメなわけではないですが、ダブル派が圧倒的に多いです。私もダブル派なので、~~シングルが標準のPythonは嫌いです。~~

```js
"Hello, world!";
"Hello, world!";
`Hello, world!`;
```

back qouteはエスケープの時に使います。どういうことかというと、

```js
`Hello, ${"world!"}`;
```

back qouteで囲んで、`${"world!"}`と記述しています。この`${}`で囲むと、そこに好きな変数をかけるわけです。そのうち出てきます。

[String - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String)

### 数字 (number)

PythonにはIntとfloatがありましたが、JSにはnumberのみです。そのかわりどちらも扱えますが、小数の計算には難があります。次のコードをブラウザで実行してみてください。

```js
0.3 - 0.2;
```

JSでこんな計算をすることは基本ないですししても桁を丸めることが多いので、気にしなくてもいい...は嘘かもしれません。気にするときはこれを回避するためのライブラリがあるのでそれを使いましょう。

あと、Number型で扱える最大の数字は2\*\*53 - 1です。それ以上はBigIntを使いましょう。たまに数字だけの文字列をNumberとして解釈しようとして桁が勝手に丸められている事故が起こります。注意しましょう~~私だけかもしれません~~

[Number - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number)

### null

まず。**nullという型はありません。**

は？

```js
typeof null; // <- object
```

？

これ、JavaScript最大のバグともいわれています<small>(要出典)</small>が、いろいろあって修正されずに残っています。バグです。

リソースが**明示的に**存在しないことを示す値です。

[null - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/null)

### undefined

こっちはあります。

```js
typeof undefined; // <- undefined
```

これは、リソースがそもそも定義されていないことを示しています。

nullとundefined、0の違いは、トイレットペーパーで説明できます。

- undefined：トイレットペーパーホルダー自体がまだ設置されていない(存在が定義されていない)
- null：ホルダーはあるけど、トイレットペーパーはわざと外して空っぽ
- 0：ホルダーに芯だけが残っていて、紙は0枚

[undefined - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined)

### function

functionです。Pythonのdefと一緒です。文法はのちほど

### object

objectです。ほぼすべての値がobjectです。

```js
{
	"key": "value"
}
["value"]
```

上は別名が連想配列、下は配列です。配列はPythonだとlistという名前です。

### boolean

完全に忘れていました。booleanです。Pythonと違って全て小文字、`true`と`false`です。
のちほど触れますが、否定演算子は`not`の代わりに`!`を使います。

```js
console.log("true:", true);
console.log("!true:", !true);
console.log("false:", false);
console.log("!false:", !false);
```

### Symbol

GitHub Copilotに触れた方がいいと言われたので一応触れておきます。使うのが面倒なstringです。`Symbol("str")`のようにするとSymbolが返ってきます。直接consoleに出しても中の文字が見えないという利点...利点なのかこれ？

[Symbol - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

Copilotさん、これでいいですか？

### BigInt

2\*\*53以上の値を扱うときはこっちで。いや、扱わんやろ

```js
BigInt("1111111111111111111111111111111111111111");
```

これ以外は通常のNumberと同様演算子による計算ができるっぽいです。やったことないけど。~~つかbignumber.js使えよ~~

[BigInt - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

## 型にはない型

`typeof`演算子で出てくる型はこれで終わりです。これからは、`typeof`演算子では出てこないけど明らかに区別されるべき型の紹介です。

### Array

先ほどのこれ

```js
["value1", "value2"];
```

[Array - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)

listと同じと言いましたが、実際に配列を宣言するときは、

```py
list("a", "b", "c") # Python
```

```js
["a", "b", "c"]; // JavaScript
```

このように、JSでは`[]`をつかって宣言します。for文などの扱いは一緒です。

```js
array = ["a", "b", "c", "d"];

for (let i in array) {
    console.log(i);
}
```

## 型しかない型

実態としては存在しないが、便宜上書き表す必要のある型を紹介します。ただ、今回は型がメインではないので、`any`だけです。それ以外はTypeScriptを扱うときにでも。

### any

「なんでもあり」な型です。これがあるとエディタによる補完が効かないので、なるべく避けます。TypeScriptでは禁止するオプションもあるくらいには避けます。

## 資料で頻出の記法について

プログラミングでは、型さえ合っていれば値はどうでもいい~~アタイはどうでもいいの！？~~ことが往々にしてあります。このような場合に日本語で型を表現するのもかったるいので、`<>`で型を表現します。

例えば、`<string>`は文字列型を、`<number>`はNumberを表現します。
Arrayなど、中になにかある値のときは、`Array<T>`のように書きます。`T`に好きな型を入れてください。`Array<string>`で文字列のみ入った配列です。

なお、配列に限って、`string[]`という書き方ができます。これは、`Array<string>`と同じ意です。`

今回はここまでにします。次回の資料は文法です。無計画に資料書いてるんですけど、初回のゼミでどこまでいくかわかりませんね。
今気づいたんですけど、文法の資料を書くつもりが型で終わっちゃいました、なにしてんねん
