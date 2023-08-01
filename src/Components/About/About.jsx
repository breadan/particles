import React from 'react'
import { Link, Outlet } from 'react-router-dom'



export default function About() {
  return <>

<div className="mt-5">
<div className="row">
    <div className="col-md-3">
      <ul>
        <li><Link to={'hookRef'}>Hook Ref</Link></li>
        <li><Link to={'formRef'}>Hook Form</Link></li>
      </ul>
    </div>
    <div className="col-md-9 mb-5">
      <Outlet></Outlet>

    </div>
  </div>

</div>
 
  
  </>
}
