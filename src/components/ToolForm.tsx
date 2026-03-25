'use client'

type Props = {
  input: string
  onChange: (value: string) => void
  onRun: () => void
  isProcessing: boolean
}

export default function ToolForm({ input, onChange, onRun, isProcessing }: Props) {
  return (
    <div className="space-y-3">
      <textarea
        className="w-full h-40 px-3 py-2 rounded-md border border-gray-300 bg-white text-sm font-mono resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="テキストを入力してください..."
        value={input}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        className="px-5 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        onClick={onRun}
        disabled={isProcessing || input.trim() === ''}
      >
        {isProcessing ? '処理中...' : '実行'}
      </button>
    </div>
  )
}
