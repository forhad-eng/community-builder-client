import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/logos/Group 1329.png'
import { auth } from '../../Firebase/firebase.init'

const Nav = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const location = useLocation()
    const path = location.pathname
    let display = true

    if (path === '/admin' || path === '/admin/volunteer' || path === '/admin/add-event') {
        display = false
    }

    const singOutHandle = () => {
        signOut(auth)
        navigate('/')
    }

    return (
        <nav className={`flex justify-between lg:px-16 lg:py-4 ${display || 'hidden'}`}>
            <Link to="/">
                <img style={{ height: '50px' }} src={logo} alt="volunteer builder logo" />
            </Link>
            <div className="flex gap-5 items-center py-2">
                <ul className="flex gap-5 text-[#0B0B0B]">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Donation</Link>
                    </li>
                    <li>
                        <Link to="/">Events</Link>
                    </li>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                </ul>
                {user ? (
                    <Link to="/booked-activity">
                        <button className="bg-[#3F90FC] text-white px-6 py-2 rounded-md">Booked Activity</button>
                    </Link>
                ) : (
                    <Link to="/admin">
                        <button className="bg-[#3F90FC] text-white px-6 py-2 rounded-md">Admin</button>
                    </Link>
                )}
                {user ? (
                    <button onClick={singOutHandle} className="bg-[#434141] text-white px-6 py-2 rounded-md">
                        Sign Out
                    </button>
                ) : (
                    <Link to="/login">
                        <button className="bg-[#434141] text-white px-6 py-2 rounded-md">Login</button>
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Nav
