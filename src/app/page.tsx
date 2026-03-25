'use client'

import { useState, useEffect } from 'react'
import ToolForm from '@/components/ToolForm'
import ResultPanel from '@/components/ResultPanel'
import HistoryPanel from '@/components/HistoryPanel'
import { processText } from '@/lib/toolLogic'
import { loadHistory, saveHistory, clearHistory, addToHistory } from '@/lib/storage'
import type { HistoryItem } from '@/types'

export default function Home() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    setHistory(loadHistory())
  }, [])

  const handleRun = () => {
    if (!input.trim()) return
    setIsProcessing(true)
    try {
      const output = processText(input)
      setResult(output)
      const updated = addToHistory(history, input, output)
      setHistory(updated)
      saveHistory(updated)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleClear = () => {
    clearHistory()
    setHistory([])
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">テキスト整形ツール</h1>
          <p className="mt-1 text-sm text-gray-500">
            テキストを入力して実行すると、整形して結果を表示します。
          </p>
        </div>

        <ToolForm
          input={input}
          onChange={setInput}
          onRun={handleRun}
          isProcessing={isProcessing}
        />

        <ResultPanel result={result} />

        <HistoryPanel history={history} onClear={handleClear} />
      </div>
    </main>
  )
}
