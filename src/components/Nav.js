import React from 'react'
export default function Nav(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
      <ul className="navbar-nav text-light">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`} href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`} href="/">About Us</a>
        </li>
      
      </ul>

      <form  className="form-inline my-2 my-lg-0">
      <div  className="custom-control custom-switch">
  <input type="checkbox"  className="custom-control-input" onChange={props.toggleMode} id="customSwitch1"/>
  <label  className={`custom-control-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="customSwitch1">Enable dark mode</label>
</div>
    </form>
    </div>
  </div>
</nav>
    </div>
  )
}
