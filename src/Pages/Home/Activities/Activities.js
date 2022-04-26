import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import Activity from '../Activity/Activity'

const Activities = () => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        const getActivities = async () => {
            const url = 'http://localhost:5000'
            const { data } = await axios.get(url)
            setActivities(data)
        }

        getActivities()
    }, [])

    return (
        <div className="grid lg:grid-cols-4 gap-10 my-10 px-20">
            {activities.length === 0 ? (
                <div className="absolute left-1/2">
                    <BallTriangle height="80" width="80" color="#00BFFF" ariaLabel="loading" />
                </div>
            ) : (
                <>
                    {activities.map(activity => (
                        <Activity key={activity._id} activity={activity} />
                    ))}
                </>
            )}
        </div>
    )
}

export default Activities
