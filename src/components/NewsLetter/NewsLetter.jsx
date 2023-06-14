import React from 'react'
import './newsLetter.css'

const NewsLetter = () => {
  return (
    <div>
        <div className="news">
            <h1>JOIN THE NEWSLETTER</h1>
            <p>To recieve our best monthly deals</p>
            <input type="email" placeholder='E-Mail*' />
            <button>SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default NewsLetter