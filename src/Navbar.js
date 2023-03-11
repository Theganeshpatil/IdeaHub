import { useState } from 'react'

export default function Navbar() {

    const [loginState, setLoginState] = useState(false);

    let logingButton = (e) => {
        console.log(e)
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
            <h2>Write your Own blog</h2>
            <div className='Navbar-links'>
                <a href='/'>Home</a>
                <a href='/create'>Crete a blog</a>
                <a href='/contact'>Contact us</a>
            </div>
            <button id='lbtn' onClick={(e) => logingButton("Ganesh", e)}>Login
            </button> {/* e here gives represents event details */}

        </div>

    )
}


