"use client"

import { useState, useEffect } from "react"

export default function Dashboard() {
  const [result, setResult] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Create Web Worker
    const worker = new Worker("/heavy-computation.js")

    // Send message to start computation
    worker.postMessage({ start: true })

    // Listen for result
    worker.onmessage = (event) => {
      setResult(event.data.result)
      setIsLoading(false)
      worker.terminate() // Clean up worker
    }

    // Handle errors
    worker.onerror = (error) => {
      console.error("Worker error:", error)
      setIsLoading(false)
    }

    // Cleanup on unmount
    return () => {
      worker.terminate()
    }
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {isLoading ? (
        <div className="flex items-center gap-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          <span>Computing heavy calculation...</span>
        </div>
      ) : (
        <div className="text-lg">
          Result: <span className="font-mono">{result?.toLocaleString()}</span>
        </div>
      )}
    </div>
  )
}
