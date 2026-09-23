# Minecraft Switch コマンド練習帳

Nintendo Switch の Minecraft（Bedrock Edition）で使うコマンドを、一覧・検索・組み立て・英語音声読み上げで練習するための静的 Web アプリです。

## DEMO

https://kubo-4ka.github.io/mc_switch_command_trainer/

## 使い方

1. ZIP を展開します。
2. `index.html` をブラウザで開きます。
3. 「実用プリセット」で例を探すか、「コマンド作成」で組み立てます。
4. 「英語で読む」でコマンドの読みを確認できます。

外部ライブラリは不要です。SpeechSynthesis の利用可能な音声は端末・ブラウザに依存します。オンライン音声利用および公式資料リンクを開く場合はインターネット接続が必要です。

## PWA / ホーム画面へのインストール

この版は PWA（Progressive Web App）対応です。GitHub Pages など **HTTPS で配信される URL** から一度アクセスすると、アプリ本体を端末へキャッシュし、ホーム画面から通常のアプリに近い形で起動できます。

- Android / Chrome 系: ブラウザの「インストール」「ホーム画面に追加」、またはアプリ内に表示される「アプリとしてインストール」から追加
- iPhone / iPad / Safari: 共有メニュー →「ホーム画面に追加」
- 一度オンラインで読み込んだ後は、`index.html` / CSS / JavaScript / manifest / アイコンを Service Worker のキャッシュから読み出すため、機内モードでもアプリ本体を利用可能
- Microsoft Learn などの外部リンクは、オフライン時には開けません
- 英語音声は端末・ブラウザ依存です。機内モードで読み上げたい場合は、音声設定で **「端末内蔵 / On-device」** の英語音声を選んでください。「インターネット利用 / Online」の音声はオフラインでは利用できない場合があります

## 対応基準

- Minecraft Bedrock Edition / Nintendo Switch 向け
- 確認基準: Bedrock 26.44
- Bedrock 26.44 公式リリース告知日: 2026-08-14
- コマンド構文・ID は Microsoft Learn の Bedrock stable 向け公式資料を参照

コマンド仕様はアップデートで変更される場合があります。重要なワールドで `/fill` などを使う前にはワールドのコピーを推奨します。

## 公式資料

- Introduction to Commands
  - https://learn.microsoft.com/en-us/minecraft/creator/documents/commandsintroduction?view=minecraft-bedrock-stable
- Commands Documentation
  - https://learn.microsoft.com/en-us/minecraft/creator/reference/content/commandsreference/examples/commandlist?view=minecraft-bedrock-stable
- `/fill` Command
  - https://learn.microsoft.com/en-us/minecraft/creator/reference/content/commandsreference/examples/commands/fill?view=minecraft-bedrock-stable
- `/locate` Command
  - https://learn.microsoft.com/en-us/minecraft/creator/commands/commands/locate?view=minecraft-bedrock-stable
- Block Enum
  - https://learn.microsoft.com/en-us/minecraft/creator/commands/enums/block?view=minecraft-bedrock-stable
- Item Enum
  - https://learn.microsoft.com/en-us/minecraft/creator/commands/enums/item?view=minecraft-bedrock-stable
- Target Selectors
  - https://learn.microsoft.com/en-us/minecraft/creator/documents/targetselectors?view=minecraft-bedrock-stable

## 注意

`/enchant` は対象プレイヤーがメインハンドに持つ対応アイテムへ適用します。たとえば `/give @s bow 1` の後は、弓を手に持ってから `/enchant @s power 5` を実行してください。

`/fill` は短時間で大量のブロックを変更できます。実行後に元へ戻す専用の取り消しコマンドはありません。特に `air`、`destroy`、広い座標範囲を組み合わせる場合は、ワールドのコピーで先に確認してください。
