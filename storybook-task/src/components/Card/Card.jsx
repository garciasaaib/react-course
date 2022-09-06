import React from 'react'
// import Button from './Button'

export default function Card({ img, title, text, action}) {
  return (
    <div className="card">
      { img && <img src="..." className="card-img-top" alt="..." />}

      {/* <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Button primary>Go somewhere</Button>
        </div> */}
    </div>
  )
}
