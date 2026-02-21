import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🚀 Final-Project</h1>
      <h3>Vite + Jenkins + Docker + KIND Kubernetes</h3>

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>

      <p style={{ marginTop: "20px", color: "green" }}>
        Auto deployed using Jenkins CI/CD pipeline
      </p>
    </div>
  )
}

export default App
