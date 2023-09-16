import logo from './logo.svg';
import './App.css';
import Progress from './Components/Progress';
import { useEffect, useState } from 'react';

function App() {

  const [count,setCount]=useState(0)

  useEffect(()=>{
   let idd=setInterval(()=>{
      setCount((e)=>{
        if(e>=100){
          clearInterval(idd)
          return 100;
        }
        return e+10;
      })
    },1000)
  },[])

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <Progress percent={count}/>
    </div>
  );
}

export default App;
