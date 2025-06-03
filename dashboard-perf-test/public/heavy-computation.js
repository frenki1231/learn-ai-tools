// Web Worker script
self.onmessage = (event) => {
  if (event.data.start) {
    // Perform heavy computation
    let total = 0
    for (let i = 0; i < 1e8; i++) {
      total += i
    }

    // Send result back to main thread
    self.postMessage({ result: total })
  }
}
