import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../Firebase/firebase.init'
import BookedActivity from '../BookedActivity/BookedActivity'

const BookedActivities = () => {
    const [user] = useAuthState(auth)
    const [bookedActivities, setBookedActivities] = useState([])

    useEffect(() => {
        const getBookedActivity = async () => {
            if (user) {
                const url = `http://localhost:5000/book?email=${user.email}`
                const { data } = await axios.get(url)
                setBookedActivities(data)
            }
        }
        getBookedActivity()
    }, [user])

    return (
        <div className="bg-[#E5E5E5] h-screen">
            <div className="grid lg:grid-cols-2 gap-x-10 gap-y-5 px-20 py-10 ">
                {bookedActivities.map(bookedActivity => (
                    <BookedActivity key={bookedActivity._id} bookedActivity={bookedActivity} />
                ))}
            </div>
        </div>
    )
}

export default BookedActivities
