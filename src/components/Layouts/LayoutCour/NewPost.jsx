import React from 'react'
import '../../../asset/css/GlobleStyle.css'
import './courItem.css'

function Newpost({item, text, circle}) {
  return (
    <div className='card-post'>
        <div className='Title-post'>{text}</div>
        <div>
          {item.map((item) => (
              <div key={item.id} className='postItem'>
                  <img className='img-post' src={item.image} alt='error'></img>
                  <p className='name-post'>{item.name}</p>
              </div>
          ))}
        </div>
    </div>
  )
}

export default Newpost