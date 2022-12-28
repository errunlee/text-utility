import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Textform from './components/Textform';
import React,{useState} from 'react';
function App() {
  let [mode,setMode]=useState('light')
  const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#121212'
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
  }
}
  return (
    <>
<Nav mode={mode} toggleMode={toggleMode}/>
  <Intro description='Hello, Welcome to Text Utils App. Enjoy.' mode={mode}/>
  <div className="container">
  <Textform mode={mode}/>
  </div>
    </>
  );
}

export default App;
