import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'テキスト整形ツール',
  description: '入力テキストを整形するミニWebツール',
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
