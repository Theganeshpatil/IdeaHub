import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [loginState, setLoginState] = useState(false);

    let logingButton = (e) => {
        const btn = document.getElementById('lbtn');
        if (loginState === false) {
            setLoginState(true)
            btn.innerText = "Logout";
        } else {
            setLoginState(false)
            btn.innerText = "Login";
        }
    }

    return (
        <div className='nav'>
            <h2>IdeaHub</h2>
            <div className='Navbar-links'>
                <Link to='/'>Home</Link>
                <Link to='/create'>Crete a blog</Link>
                <Link to='/contact'>Contact us</Link>
            </div>
            <button id='lbtn' onClick={(e) => logingButton("Ganesh", e)}>Login
            </button> {/* e here gives represents event details */}

        </div>

    )
}


