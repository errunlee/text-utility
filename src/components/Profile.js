import React from 'react'
import '../App.css'
export default function Profile({userName,role,src}) {
  return (
    <div className='d-flex align-items-center flex-column m-2'>
      <img className='profile' src={src} alt="UserImage"/>
      <h3><strong>{role}</strong></h3>
      <h4>{userName}</h4>
    </div>
  )
}
