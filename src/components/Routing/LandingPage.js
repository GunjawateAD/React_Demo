import React from 'react'

function LandingPage() {
  return (
    <div>LandingPage
        <ul>
            <li>
                <link to={'/home'}>Home</link>
            </li>
            <li>
                <link to={'/contactus'}>Contact</link>
            </li>
            <li>
                <link to={'/Error'}>Error</link>
            </li>
        </ul>
    </div>
  )
}

export default LandingPage