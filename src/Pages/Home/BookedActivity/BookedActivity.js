import React from 'react'

const BookedActivity = ({ bookedActivity, deleteActivity }) => {
    const { activity, date, picture, _id } = bookedActivity
    return (
        <div className="flex gap-5 shadow-lg rounded-md bg-white p-4 relative">
            <div className="flex gap-8">
                <img style={{ width: '194px', height: '174px' }} src={picture} alt="" />
                <div>
                    <p className="text-lg font-[500]">{activity}</p>
                    <p className="text-lg font-[500]">{date}</p>
                </div>
            </div>
            <button
                onClick={() => deleteActivity(_id)}
                className="bg-[#E3E3E3] text-[#787878] px-5 py-2 rounded-md absolute right-5 bottom-4"
            >
                Cancel
            </button>
        </div>
    )
}

export default BookedActivity
