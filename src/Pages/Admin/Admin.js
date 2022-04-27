import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../../assets/logos/Group 1329.png'
import plusLogo from '../../assets/logos/plus 1.png'
import volunteerLogo from '../../assets/logos/users-alt 1.png'
import '../../Styles/admin.css'

const Admin = () => {
    return (
        <div className=" py-4">
            <header className="flex items-center gap-12 px-14">
                <img style={{ height: '60px' }} src={logo} alt="" />
                <p className="font-[500]">Volunteer list</p>
            </header>
            <div className="admin-container">
                <div className="flex flex-col mx-auto my-10">
                    <NavLink to="volunteer" className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
                        <div className="flex items-center gap-3">
                            <img style={{ height: '20px' }} src={volunteerLogo} alt="" />
                            <p>Volunteer register list</p>
                        </div>
                    </NavLink>
                    <NavLink to="add-event" className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
                        <div className="flex items-center gap-3 mt-2">
                            <img style={{ height: '20px' }} src={plusLogo} alt="" />
                            <p>Add Event</p>
                        </div>
                    </NavLink>
                </div>
                <div className="admin-item">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Admin
