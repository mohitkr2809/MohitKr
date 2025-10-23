import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")
   

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    // str = string
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass = str.char(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 '>

        <h1 className='text-white text-center my-3'>Password Generator</h1>
        
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value='password'
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          
          />

          <button>copy</button>

      </div>
      
      </div>
    </>
  )
}

export default App
