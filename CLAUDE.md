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

## 開発ルール

- コミット前にローカルでビルドエラーがないことを確認する
- 不要なファイル（`.env`、`node_modules/`、ビルド成果物）はコミットしない
- `.gitignore` を適切に設定し、機密情報をリポジトリに含めない
