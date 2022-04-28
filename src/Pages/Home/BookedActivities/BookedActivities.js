import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import axiosPrivate from '../../../apis/AxiosPrivate'
import { auth } from '../../../Firebase/firebase.init'
import BookedActivity from '../BookedActivity/BookedActivity'

const BookedActivities = () => {
    const [user] = useAuthState(auth)
    const [bookedActivities, setBookedActivities] = useState([])

    useEffect(() => {
        const getBookedActivity = async () => {
            if (user) {
                const url = `http://localhost:5000/book?email=${user.email}`
                const { data } = await axiosPrivate.get(url)
                setBookedActivities(data)
            }
        }
        getBookedActivity()
    }, [user])

    const deleteBookedActivityHandle = async _id => {
        const proceed = window.confirm('Are you sure you want to cancel?')
        if (proceed) {
            const filter = bookedActivities.filter(activity => activity._id !== _id)
            const url = `http://localhost:5000/book/${_id}`
            const { data } = await axios.delete(url)
            if (data.acknowledged) {
                setBookedActivities(filter)
                alert('Canceled')
            }
        }
    }

    return (
        <div className="bg-[#E5E5E5] h-screen">
            {bookedActivities.length === 0 ? (
                <p className="text-center text-3xl font-[500] py-28">No Booking Yet!</p>
            ) : (
                <div className="grid lg:grid-cols-2 gap-x-10 gap-y-5 px-20 py-10 ">
                    {bookedActivities.map(bookedActivity => (
                        <BookedActivity
                            key={bookedActivity._id}
                            bookedActivity={bookedActivity}
                            deleteActivity={deleteBookedActivityHandle}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default BookedActivities
