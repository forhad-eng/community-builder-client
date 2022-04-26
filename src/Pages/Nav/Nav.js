import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logos/Group 1329.png'

const Nav = () => {
    return (
        <nav className="flex justify-between lg:px-16 lg:py-4">
            <img style={{ height: '50px' }} src={logo} alt="volunteer builder logo" />
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
                <Link to="/">
                    <button className="bg-[#3F90FC] text-white px-6 py-2 rounded-md">Register</button>
                </Link>
                <Link to="/">
                    <button className="bg-[#434141] text-white px-6 py-2 rounded-md">Admin</button>
                </Link>
            </div>
        </nav>
    )
}

export default Nav
