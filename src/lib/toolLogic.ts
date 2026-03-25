/**
 * メインの処理ロジック
 * 別ツールに転用するときはこの関数だけ差し替える
 */
export function processText(input: string): string {
  // 前後の空白を削除
  const trimmed = input.trim()

  // 連続した空行を1つにまとめる
  const collapsed = trimmed.replace(/\n{3,}/g, '\n\n')

  // 各行の先頭に行番号を付ける
  const lines = collapsed.split('\n')
  const numbered = lines.map((line, i) => `${i + 1}: ${line}`)

  return numbered.join('\n')
}
