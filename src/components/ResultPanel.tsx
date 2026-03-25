type Props = {
  result: string | null
}

export default function ResultPanel({ result }: Props) {
  if (result === null) return null

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-semibold text-gray-700">結果</h2>
      <pre className="w-full p-3 rounded-md border border-gray-200 bg-gray-50 text-sm font-mono whitespace-pre-wrap break-words">
        {result}
      </pre>
    </div>
  )
}
