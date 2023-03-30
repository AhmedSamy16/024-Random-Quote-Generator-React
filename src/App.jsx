import { useState, useEffect } from 'react'

const URL = 'https://api.adviceslip.com/advice'

function App() {
  const [advice, setAdvice] = useState('')
  const fetchAdvice = () => {
    fetch(URL).then(res => res.json()).then(res => setAdvice(res.slip.advice))
  }
  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className='app'>
      <div className='card'>
        <h1>{advice}</h1>
        <button onClick={() => fetchAdvice()} className="button">
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  )
}

export default App
