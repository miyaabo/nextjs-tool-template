import Link from 'next/link'

const tools = [
  {
    name: 'テキスト整形ツール',
    description: '貼り付けたテキストを整形します。前後の空白削除・空行の圧縮・行番号の付与など。',
    href: '/tools/formatter',
    emoji: '📝',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-10">

        {/* ヘッダー */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">🛠 みやのツール置き場</h1>
          <p className="mt-2 text-sm text-gray-500">
            よく使う作業をブラウザで手軽にできるツールをまとめています。
            入力して実行するだけ、登録不要・無料で使えます。
          </p>
        </div>

        {/* ツール一覧 */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">ツール一覧</h2>
          <ul className="space-y-3">
            {tools.map((tool) => (
              <li key={tool.href}>
                <Link
                  href={tool.href}
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 bg-white hover:border-blue-400 hover:shadow-sm transition-all"
                >
                  <span className="text-2xl">{tool.emoji}</span>
                  <div>
                    <div className="font-medium text-gray-900">{tool.name}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{tool.description}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* フッター */}
        <p className="text-xs text-gray-400 text-center">
          データはすべてブラウザ内に保存されます。サーバーには送信されません。
        </p>

      </div>
    </main>
  )
}
