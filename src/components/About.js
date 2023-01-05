import React from 'react'
import Profile from './Profile'
import '../App.css'
export default function About({mode}) {
  return (
    <>
    <div className={`container text-${mode==='light'?'dark':'light'}`}>
    <div className={`accordion bg-${mode==='light'?'light':mode}`}  id="accordionPanelsStayOpenExample">
  <div className={`accordion-item bg-${mode==='light'?'light':mode} text-${mode==='light'?'dark':'light'}`} >
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button   className={`accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        About our organization Lee and Company
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne"   className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className={`accordion-body `} >
        <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure optio reiciendis in excepturi, illum recusandae, dolorum officiis magni ullam accusantium ut corrupti nihil magnam error molestias modi odio! Dolores?</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, delectus natus! Magnam, delectus!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button   className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Words from our Founders
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className={`accordion-body bg-${mode==='light'?'light':mode} text-${mode==='light'?'dark':'light'}`}  >
        <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla error molestiae molestias harum ad, ut magni fugiat nobis officia nisi eos corporis provident eaque, delectus eum saepe, atque asperiores doloremque. Odit officiis dicta corrupti quo quas neque tenetur delectus eaque?</strong>
      </div>
    </div>
  </div>
</div>
<div className='mx-2 d-flex flex-column align-items-center'>
<h1 className='my-2'>Our Team Members at Lee and Company</h1>
    <Profile role="CEO" userName="Arun Khatri" src="https://source.unsplash.com/random/?male,muscular,topg"/>
    <div className='d-flex flex-wrap justify-content-center'>
    <Profile role="Director" userName="Protik Sharma " src="https://source.unsplash.com/random/?richguy,boy,scientist"/>
    <Profile role="HR manager" userName="Pronil Shrestha " src="https://source.unsplash.com/random/?bts,singer,hacker"/>
    </div>
    <div className='d-flex flex-lg-row flex-wrap justify-content-center'>
    <Profile role="Manager" userName="Hero Alom " src="https://source.unsplash.com/random/?african,person,funny"/>
    <Profile role="Cleaner" userName="Deepak Kalal " src="https://source.unsplash.com/random/?man,woman,indian"/>
    <Profile role="Cooking Man" userName="Elun Mosk " src="https://source.unsplash.com/random/?cleaner,student,funny"/>
    <Profile role="Salesman" userName="Sundar Kuchai " src="https://source.unsplash.com/random/?rich,poor,nepali"/>
    </div>
</div>
    </div>
    </>
  )
}
