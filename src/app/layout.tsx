import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini Tools",
  description: "シンプルで使いやすい小型Webツール集",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
