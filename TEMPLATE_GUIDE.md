# nextjs-tool-template 使い方ガイド

## これは何？
Next.js（App Router + TypeScript + Tailwind）で作った「入力 → 処理 → 結果表示 → 履歴保存」の1ページ完結ミニツールテンプレートです。
DBなし・認証なし・月0円運用可能で、Vercelにそのままデプロイできます。

## セットアップ

```bash
npx create-next-app@latest your-tool-name --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd your-tool-name
npm run dev
```

## ディレクトリ構成

```
src/
  app/
    layout.tsx      # メタデータ・共通レイアウト
    page.tsx        # メインページ（state管理）
    globals.css     # グローバルCSS
  components/
    ToolForm.tsx    # 入力欄・実行ボタン
    ResultPanel.tsx # 結果表示
    HistoryPanel.tsx# 履歴一覧・削除
  lib/
    toolLogic.ts    # ★処理ロジック（ここだけ差し替える）
    storage.ts      # localStorage操作
  types/
    index.ts        # 型定義
```

## 別ツールへの流用方法

**基本的には `toolLogic.ts` の `processText` 関数だけ差し替えればOKです。**

1. `src/lib/toolLogic.ts` の `processText` を書き換える
2. `src/app/page.tsx` のタイトル・説明文を変更
3. 必要なら `src/types/index.ts` に型を追加

### 流用例

| ツール | toolLogic.ts でやること |
|---|---|
| SQL整形 | SQLをフォーマット |
| ログ比較 | 2つのログの差分を抽出 |
| テキスト整形 | Markdownへの変換など |
| 日報下書き | 箇条書きを文章に変換 |
| LoL補助 | チャンピオン情報の整形・メモ |

## Vercelデプロイ手順

1. GitHubにリポジトリを作成してpush
2. [vercel.com](https://vercel.com) にログイン
3. 「Add New Project」→ リポジトリを選択
4. フレームワークが「Next.js」と自動検出されることを確認
5. 「Deploy」を押すだけ

環境変数・DBは不要なのでそのままデプロイ可能です。

## 実行コマンド

```bash
npm run dev    # 開発サーバー起動（http://localhost:3000）
npm run build  # 本番ビルド確認
npm run lint   # ESLintチェック
```
