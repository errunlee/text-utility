import React from 'react'

export default function Tqmessage() {
  return (
    <div>
      <div className="toast" role="alert" aria-live="assertive" aria-atomic="false">
  <div className="toast-header">
    <img src="https://source.unsplash.com/randomm" className="rounded me-2" alt="..img"/>
    <strong className="me-auto">Bootstrap</strong>
    <small className="text-muted">11 mins ago</small>
    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div className="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
    </div>
  )
}
