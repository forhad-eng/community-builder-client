import axios from 'axios'
import React, { useEffect, useState } from 'react'
import trashIcon from '../../../assets/logos/trash-2 9.png'

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([])

    useEffect(() => {
        const getVolunteers = async () => {
            const url = 'http://localhost:5000/book'
            const { data } = await axios.get(url)
            setVolunteers(data)
        }
        getVolunteers()
    }, [])

    return (
        <div className="bg-white p-4 rounded-md">
            <table className="text-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Registration Date</th>
                        <th>Activity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {volunteers.map(volunteer => {
                        const { activity, name, email, date } = volunteer
                        return (
                            <tr>
                                <td>{name}</td>
                                <td className="inline-block ml-8">{email}</td>
                                <td>{date}</td>
                                <td>{activity}</td>
                                <td>
                                    <button>
                                        <img
                                            style={{ height: '20px', background: 'red', borderRadius: '2px' }}
                                            src={trashIcon}
                                            alt=""
                                        />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default VolunteerList
