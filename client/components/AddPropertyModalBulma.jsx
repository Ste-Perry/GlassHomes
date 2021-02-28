import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function AddPropertyModal(props){
    const [isActive, setActive] = useState(true)
    console.log(props)

    const redirect = (e) => {
      e.preventDefault()
      props.history.push('/register')
    }

    return (
      <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      {/* <button className="" aria-label="" onClick={() => setActive(true)}>Open</button> */}
      
      <div className={['modal', isActive ? "is-active" : ""].join(' ')}>
      <div className="modal-background"></div>
      <div className="modal-content has-text-centered">
        <div className="box">
        Oopsie, You gotta register to do that
      </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={() => setActive(false)} onClick={(e) => redirect(e)}></button>
    </div>
    </>
    )
}

export default AddPropertyModal
