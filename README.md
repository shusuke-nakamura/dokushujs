# dokushujs

## 配列のループ

for、for...of を使って処理を行う。

## オブジェクト(Object)のループ

Object.values や Object.entries を積極的に使う。

## Babel https://bablejs.io/

ES6 以降の新しい記法で書かれたコードを古い記法のコードに変換する。これによって、古いブラウザで実装されていない最新の記法を使ったコードを古いブラウザで実行可能なコードに変換できる。

## webpack https://github.com/webpack/webpack

複数ファイルに分割された JavaScript のコードを 1 つのファイルに結合します。これによって、機能単位でファイル分割でき、コードが整理
しやすくなります。一般的に Bable と併用する。

## Node.js ES Module規格に沿ってコードを実行する方法は以下のいずれかの方法で行う
1. ファイルの拡張子を.mjsに変更する
2. package.jsonのtype フィールドを変更する
3. オプションを指定してnodeコマンドを実行する(--input-type=module)

## Expressパッケージのインストール
mkdir sample_express
cd sample_express
npm init -y
npm install express