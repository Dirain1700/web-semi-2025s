# Practice

素因数分解ができるWebサイトを作ってみましょう。

まず、VSCodeの拡張機能でLive Serverをインストールしてください。そうしたら、左下のLive Serverをクリックして、サーバーを建てられます。建てられたら、ブラウザでlocalhostの07-Pracice_1を開きましょう。その後、hinagata.jsをコピーして、result.jsにリネームしましょう。

さて、hinagata.jsにはJavaScriptで素数判定をするために必要なコードが書かれていますが、calc()関数だけ空白にしてあります。この関数の中身を書いて、素数判定機を実装しましょう。

ヒント1: calcの引数は`number`、返り値は`{ [key: string]: number; }`、これは連想配列です。

ヒント2: 2の倍数でさえなければ、走査は2n+1で割るだけです。
