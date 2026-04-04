import Link from "next/link";

const tools = [
  {
    name: "JSON整形ツール",
    description: "JSONを貼り付けて整形・バリデーション。壊れたJSONもすぐ発見。",
    href: "/tools/json-formatter",
    emoji: "🔧",
  },
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Mini Tools</h1>
      <p className="text-gray-500 mb-10">シンプルで使いやすい小型Webツール集</p>

      <div className="grid gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-sm transition"
          >
            <span className="text-3xl">{tool.emoji}</span>
            <div>
              <div className="font-semibold text-lg">{tool.name}</div>
              <div className="text-gray-500 text-sm mt-0.5">{tool.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
