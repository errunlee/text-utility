import React from 'react'

export default function Alert({message}) {
  return (
    <div style={{position:'absolute',top:'0',right:'0'}}>
      <div class="alert alert-primary" role="alert">
  {message}
</div>
    </div>
  )
}
