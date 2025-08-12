# Grammer

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
typeof "meow meow"
```

これを実行すると、`string`と返ってくるはずです。

### 文字列 (string)

そのままです。Pythonと同じように、quote`'`やdouble quote`"`で囲みます。back quote`` ` ``でも大丈夫ですが、普通は避けます。

JavaScriptでは、double qouteが標準です。別にシングルでもダメなわけではないですが、ダブル派が圧倒的に多いです。私もダブル派なので、~~シングルが標準のPythonは嫌いです。~~

```js
"Hello, world!"
'Hello, world'
`Hello, world!`
```

back qouteはエスケープの時に使います。どういうことかというと、

```js
`Hello, ${"world!"}`
```

back qouteで囲んで、`${"world!"}`と記述しています。この`${}`で囲むと、そこに好きな変数をかけるわけです。そのうち出てきます。

[String - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String)

### 数字 (number)

PythonにはIntとfloatがありましたが、JSにはnumberのみです。そのかわりどちらも扱えますが、小数の計算には難があります。次のコードをブラウザで実行してみてください。

```js
0.3 - 0.2
```

JSでこんな計算をすることは基本ないですししても桁を丸めることが多いので、気にしなくてもいい...は嘘かもしれません。気にするときはこれを回避するためのライブラリがあるのでそれを使いましょう。

[Number - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number)

### null

まず。**nullという型はありません。**

は？

```js
typeof null // <- object
```

？

これ、JavaScript最大のバグともいわれています<small>(要出典)</small>が、いろいろあって修正されずに残っています。バグです。

リソースが**明示的に**存在しないことを示す値です。

[null - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/null)

### undefined

こっちはあります。

```js
typeof undefined // <- undefined
```

これは、リソースがそもそも定義されていないことを示しています。

nullとundefined、0の違いは、トイレットペーパーで説明できます。

undefined：トイレットペーパーホルダー自体がまだ設置されていない(存在が定義されていない)
null：ホルダーはあるけど、トイレットペーパーはわざと外して空っぽ
0：ホルダーに芯だけが残っていて、紙は0枚

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

## 型にはない型

`typeof`演算子で出てくる型はこれで終わりです。これからは、`typeof`演算子では出てこないけど明らかに区別されるべき型の紹介です。

### Array

先ほどのこれ

```js
["value1", "value2"]
```

[Array - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)

ねます(2025/08/13 05:29)
