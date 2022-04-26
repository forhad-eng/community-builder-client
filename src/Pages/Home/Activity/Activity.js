import React from 'react'

const Activity = ({ activity }) => {
    const { picture, activityName } = activity
    return (
        <div className="relative">
            <img src={picture} alt="" />
            <p
                className="w-full h-16 absolute bottom-0 bg-blue-600 py-2 px-2 text-white"
                style={{ borderRadius: '0 0 10px 10px' }}
            >
                {activityName}
            </p>
        </div>
    )
}

export default Activity
