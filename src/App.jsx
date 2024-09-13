import { useState } from 'react'
import './App.css'
import Inputs from './components/Inputs';
import Result from './components/Result';

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();
  const text = 'Результат:'
  return (
    <>
      <h1>Claculate</h1>
      <div>
        <Inputs num1={num1} num2={num2} setNum1={setNum1} setNum2={setNum2} setResult={setResult}/>
        <Result result={result} text={text} />
          
        {/* <h2> {result}</h2> */}
      </div>
    </>
  )
}

export default App
