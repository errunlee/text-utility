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
  const handleBluishTheme=()=>{
    if(mode==='light'){
      setMode('primary');
      document.body.style.backgroundColor='rgb(155, 155, 226)'
      showAlert('Bluish theme enabled')    
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('light mode enabled')
    }
  }
  const handleReddishTheme=()=>{
    if(mode==='light'){
      setMode('danger');
      document.body.style.backgroundColor='#ff8c8c'
      showAlert('Reddish theme enabled')    
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('light mode enabled')
    }
  }
  return (
    <>
<Nav mode={mode} toggleMode={toggleMode} handleBluishTheme={handleBluishTheme} handleReddishTheme={handleReddishTheme}/>
  <Intro description='Hello, Welcome to Text Utils App. Enjoy.' mode={mode}/>
  <div className="container">
  <Textform mode={mode} alertMsg={alert} showAlert={showAlert}/>
  </div>
    </>
  );
}

export default App;
