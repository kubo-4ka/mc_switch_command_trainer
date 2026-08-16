# Minecraft Switch コマンド練習帳 v005

Nintendo Switch の Minecraft（Bedrock Edition）で使うコマンドを、一覧・検索・組み立て・英語音声読み上げで練習するための Web アプリです。

## DEMO

https://kubo-4ka.github.io/mc_switch_command_trainer/

## 使い方

1. ZIP を展開します。
2. `index.html` をブラウザで開きます。
3. 「実用プリセット」で例を探すか、「コマンド作成」で組み立てます。
4. 「英語で読む」でコマンドの読みを確認できます。

外部ライブラリは不要です。SpeechSynthesis の利用可能な音声は端末・ブラウザに依存します。オンライン音声利用および公式資料リンクを開く場合はインターネット接続が必要です。

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
