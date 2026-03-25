'use client'

import type { HistoryItem } from '@/types'

type Props = {
  history: HistoryItem[]
  onClear: () => void
}

export default function HistoryPanel({ history, onClear }: Props) {
  if (history.length === 0) return null

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-700">履歴（{history.length}件）</h2>
        <button
          className="text-xs text-red-500 hover:text-red-700 transition-colors"
          onClick={onClear}
        >
          履歴を全削除
        </button>
      </div>
      <ul className="space-y-2">
        {history.map((item) => (
          <li
            key={item.id}
            className="p-3 rounded-md border border-gray-200 bg-white text-xs space-y-1"
          >
            <div className="text-gray-400">{new Date(item.createdAt).toLocaleString('ja-JP')}</div>
            <div className="text-gray-600 font-mono truncate">入力: {item.input}</div>
            <div className="text-gray-800 font-mono truncate">出力: {item.output}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
