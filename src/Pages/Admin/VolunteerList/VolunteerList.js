import axios from 'axios'
import React, { useEffect, useState } from 'react'
import axiosPrivate from '../../../apis/AxiosPrivate'
import trashIcon from '../../../assets/logos/trash-2 9.png'

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([])

    useEffect(() => {
        const getVolunteers = async () => {
            const url = `http://localhost:5000/book`
            const { data } = await axiosPrivate.get(url)
            setVolunteers(data)
        }
        getVolunteers()
    }, [])

    // useEffect(() => {
    //     const getVolunteers = async () => {
    //         const url = 'http://localhost:5000/book'
    //         const { data } = await axios.get(url, {
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //         setVolunteers(data)
    //     }
    //     getVolunteers()
    // }, [])

    const activityDeleteHandle = async _id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/book/${_id}`
            const { data } = await axios.delete(url)
            if (data.acknowledged) {
                const filter = volunteers.filter(volunteer => volunteer._id !== _id)
                setVolunteers(filter)
            }
        }
    }

    return (
        <div className="bg-white p-4 rounded-md">
            <table className="text-center">
                <thead>
                    <tr className="bg-[#e5e5e5]">
                        <td>Name</td>
                        <td>Email ID</td>
                        <td>Registration Date</td>
                        <td>Activity</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {volunteers.map(volunteer => {
                        const { activity, name, email, date, _id } = volunteer
                        return (
                            <tr key={_id}>
                                <td>{name}</td>
                                <td className="inline-block ml-8">{email}</td>
                                <td>{date}</td>
                                <td>{activity}</td>
                                <td>
                                    <button onClick={() => activityDeleteHandle(_id)}>
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
