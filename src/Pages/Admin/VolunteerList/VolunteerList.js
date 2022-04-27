import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
        <div>
            <p>This is volunteer list {volunteers.length}</p>
        </div>
    )
}

export default VolunteerList
