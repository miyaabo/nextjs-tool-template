'use client';

import { useState } from 'react';
import Link from 'next/link';

const SAMPLE_JSON = '{"user":{"id":1,"name":"みや","tags":["エンジニア","個人開発"]},"status":"active"}';

export default function JsonFormatterPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  function format() {
    if (!input.trim()) {
      setError('JSONを入力してください。');
      setOutput('');
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (e) {
      setError((e as Error).message);
      setOutput('');
    }
  }

  function clear() {
    setInput('');
    setOutput('');
    setError('');
  }

  function loadSample() {
    setInput(SAMPLE_JSON);
    setOutput('');
    setError('');
  }

  async function copy() {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-800 mb-6">
        ← ホームに戻る
      </Link>

      <h1 className="text-2xl font-bold mb-1">JSON整形ツール</h1>
      <p className="text-gray-500 text-sm mb-6">JSONを貼り付けて整形・バリデーション。壊れたJSONもすぐ発見。</p>

      <button
        onClick={loadSample}
        className="mb-5 text-sm px-3 py-1.5 rounded border border-gray-300 hover:bg-gray-100 transition"
      >
        サンプルJSONを入れる
      </button>

      {/* 入力エリア */}
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">入力</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"key": "value"}'
          className="w-full h-40 p-3 font-mono text-sm border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="flex gap-2 mb-5">
        <button
          onClick={format}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
        >
          整形する
        </button>
        <button
          onClick={clear}
          className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition"
        >
          クリア
        </button>
      </div>

      {/* エラー表示 */}
      {error && (
        <div className="mb-5 px-4 py-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
          <span className="font-semibold">エラー: </span>{error}
        </div>
      )}

      {/* 出力エリア */}
      {output && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-gray-700">出力</label>
            <button
              onClick={copy}
              className="text-xs px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 transition"
            >
              {copied ? 'コピー済み' : 'コピー'}
            </button>
          </div>
          <pre className="w-full p-4 bg-gray-900 text-green-400 text-sm font-mono rounded-lg overflow-x-auto whitespace-pre">
            {output}
          </pre>
        </div>
      )}

      {/* 使い方 */}
      <div className="text-sm text-gray-500 border-t border-gray-200 pt-6">
        <div className="font-medium text-gray-700 mb-2">使い方</div>
        <ol className="list-decimal list-inside space-y-1">
          <li>入力欄にJSONを貼り付ける</li>
          <li>「整形する」ボタンを押す</li>
          <li>整形されたJSONが出力欄に表示される</li>
          <li>「コピー」ボタンでクリップボードにコピー</li>
        </ol>
      </div>
    </main>
  );
}
