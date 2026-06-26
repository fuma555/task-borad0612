# CLAUDE.md

## プロジェクト概要

タスクボード アプリケーション

## Git 運用ルール

### 基本方針

- コードを変更するたびに、変更内容をコミットして GitHub へプッシュする
- 作業の節目ごと（機能追加・バグ修正・リファクタリング完了時）に必ずプッシュする
- プッシュ前に動作確認を行い、壊れた状態をリモートに上げない

### コミットメッセージ規則

```
<type>: <summary>

例:
feat: タスク追加機能を実装
fix: 削除ボタンが押せないバグを修正
refactor: TaskCard コンポーネントを分割
style: ボタンの色とスペーシングを調整
docs: README にセットアップ手順を追加
```

| type | 用途 |
|------|------|
| feat | 新機能 |
| fix | バグ修正 |
| refactor | 動作を変えないコード整理 |
| style | スタイル・見た目の変更 |
| docs | ドキュメントのみの変更 |
| chore | ビルド・設定ファイルの変更 |

### プッシュ手順

```bash
git add <変更ファイル>
git commit -m "<type>: <summary>"
git push origin main
```

### ブランチ戦略

- `main` ブランチを常に動作可能な状態に保つ
- 大きな機能開発はフィーチャーブランチで行い、完成後に main へマージする
  ```bash
  git checkout -b feature/<機能名>
  # ... 実装 ...
  git push origin feature/<機能名>
  # GitHub で Pull Request を作成してマージ
  ```

## GitHubリポジトリ

https://github.com/fuma555/kakeibo

## デプロイ先

- **本番 URL**: https://fuma555.github.io/task-borad0612/
- **リポジトリ**: https://github.com/fuma555/task-borad0612
- `main` ブランチへの push で GitHub Actions が自動ビルド＆デプロイする

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| UI ライブラリ | React 19 |
| ビルドツール | Vite 8 |
| 言語 | JavaScript (JSX) |
| スタイリング | Plain CSS（CSS Modules 不使用） |
| 状態管理 | React `useState`（外部ライブラリなし） |
| 永続化 | `localStorage` |
| CI/CD | GitHub Actions |
| ホスティング | GitHub Pages |

## コンポーネント命名規約

### ファイル名
- コンポーネントファイルは **PascalCase** + `.jsx` 拡張子（例: `TaskItem.jsx`）
- スタイルファイルはコンポーネント名に合わせる（例: `TaskItem.css`）

### コンポーネント名
- React コンポーネントは **PascalCase**（例: `function TaskItem()`）
- Props は **camelCase**（例: `onDelete`, `isDone`）

### CSS クラス名
- **kebab-case** を使用（例: `.task-item`, `.add-btn`, `.task-checkbox`）
- 状態は末尾に付加（例: `.task-item.done`）

### 変数・関数名
- ローカル変数・関数は **camelCase**（例: `addTask`, `toggleTask`, `doneCount`）
- イベントハンドラは `handle` または動詞で始める（例: `handleKeyDown`, `addTask`）

## 開発ルール

- コミット前にローカルでビルドエラーがないことを確認する
- 不要なファイル（`.env`、`node_modules/`、ビルド成果物）はコミットしない
- `.gitignore` を適切に設定し、機密情報をリポジトリに含めない
