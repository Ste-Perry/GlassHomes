import React from 'react'
import {Link} from 'react-router-dom'

function Footer () {

    return (
        <>
            <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>GlassHomes </strong> by Team Yeet . Developed at
      <a href="https://devacademy.co.nz"> Dev Academy</a>.
    </p>
		<div>
    <p>
		<Link to="/loginadmin">Admin</Link> /   
		<a href="mailto:admin@glasshomes.co.nz"> Contact</a> / 
		<Link to="adminportal"> Admin Portal (will remove)</Link>
		</p>
		</div>
  </div>
</footer>
        </>
    )
}

export default Footer