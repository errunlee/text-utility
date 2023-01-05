import React from 'react'

export default function Otherproducts({mode}) {
  return (
    <div className={`text-${mode==='light'?'dark':'light'}`}>
        <h2 className={`mt-3 `} style={{fontFamily:'sans-serif'}}>We are currently working on this page.</h2>
        <hr style={{height:'1px',background:'red'}}/>
        <h3 className='mt-3'>If you have any suggestions, feel free to contact us.</h3>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className={`form-control bg-${mode==='light'?'light':mode} text-${mode==='light'?'dark':'light'}`} id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
  <textarea className={`form-control bg-${mode==='light'?'light':mode} text-${mode==='light'?'dark':'light'}`} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className='btn btn-primary'>Submit</button>
    </div>
  )
}
