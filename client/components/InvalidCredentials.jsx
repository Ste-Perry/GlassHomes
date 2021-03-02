import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function InvalidCredentials(props) {
  const [isActive, setActive] = useState(true)
  console.log(props)

  const redirect = (e) => {
    e.preventDefault()
    props.history.push('/login')
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <button className="" aria-label="" onClick={() => setActive(true)}>Open</button> */}

      <div className={['modal', isActive ? "is-active" : ""].join(' ')}>
        <div className="modal-background"></div>
        <div class="modal-card">
        <section className="modal-card-body has-text-centered">
          <div className="box">
            <p>Oopsie, Looks like that place hasn't been listed yet.</p>
            <p>Log in or register to add it!</p>
          </div>    
      <button class="button is-medium is-info is-outlined" onClick={() => setActive(false)} onClick={(e) => redirect(e)}>OK!</button>
    </section>
    </div>
        {/* <button className="modal-close is-large" aria-label="close" onClick={() => setActive(false)} onClick={(e) => redirect(e)}></button> */}
      </div>
    </>
  )
}

export default InvalidCredentials
