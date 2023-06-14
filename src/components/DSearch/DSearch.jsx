import React from 'react'
import './DSearch.css'

const DSearch = () => {
  return (
    <>
        <div className="d-search">
            <input type="text" placeholder='Where to?' />
            <input type="text" placeholder='Month?' />
            <input type="text" placeholder='Trip type?' />
            <button className='s-btn'>Search</button>
        </div>
    </>
  )
}

export default DSearch