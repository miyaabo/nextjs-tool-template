import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'みやのツール置き場',
  description: 'よく使う作業をブラウザで手軽にできるツール集',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
