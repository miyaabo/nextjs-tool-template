import type { HistoryItem } from '@/types'

const STORAGE_KEY = 'tool-history'

export function loadHistory(): HistoryItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveHistory(items: HistoryItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // localStorage が使えない環境では無視
  }
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}

export function addToHistory(
  items: HistoryItem[],
  input: string,
  output: string
): HistoryItem[] {
  const newItem: HistoryItem = {
    id: crypto.randomUUID(),
    input,
    output,
    createdAt: new Date().toISOString(),
  }
  return [newItem, ...items].slice(0, 50) // 最大50件
}
