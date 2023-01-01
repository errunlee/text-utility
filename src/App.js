import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Textform from './components/Textform';
import React,{useState} from 'react';
function App() {
  let [mode,setMode]=useState('light')
  let [alert,setAlert]=useState(null)
  function showAlert(msg){
       setAlert(msg)
       setTimeout(()=>setAlert(null),2000)
  }
  const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#121212'
    showAlert('dark mode enabled')    
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert('light mode enabled')
  }
}
  return (
    <>
<Nav mode={mode} toggleMode={toggleMode}/>
  <Intro description='Hello, Welcome to Text Utils App. Enjoy.' mode={mode}/>
  <div className="container">
  <Textform mode={mode} alertMsg={alert} showAlert={showAlert}/>
  </div>
    </>
  );
}

export default App;
