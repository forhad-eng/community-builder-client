import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const AddEvent = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const onSubmit = async formData => {
        const url = 'http://localhost:5000/activity'
        const { data } = await axios.post(url, formData)
        if (data.acknowledged) {
            alert('Event added')
            navigate('/')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-x-10 gap-y-4 bg-white p-4 pt-6 pb-8 rounded-lg">
                    <span>
                        <label htmlFor="title" className="font-[500]">
                            Event Title
                        </label>
                        <input
                            className="w-full border-2 rounded mt-2 p-1 pl-2 outline-none"
                            type="text"
                            placeholder="Title"
                            id="title"
                            {...register('activityName')}
                        />
                    </span>
                    <span>
                        <label htmlFor="date" className="font-[500]">
                            Event Date
                        </label>
                        <input
                            className="w-full border-2 rounded mt-2 p-1 pl-2 outline-none"
                            type="date"
                            placeholder="Title"
                            id="date"
                        />
                    </span>
                    <span className="flex flex-col">
                        <label htmlFor="des" className="font-[500]">
                            Description
                        </label>
                        <textarea rows="4" id="des" className="border-2 mt-2 outline-none"></textarea>
                    </span>
                    <span>
                        <label htmlFor="img" className="font-[500]">
                            Banner
                        </label>
                        <input
                            className="w-full border-2 rounded mt-2 p-1 pl-2 outline-none"
                            type="text"
                            placeholder="upload image"
                            id="img"
                            {...register('picture')}
                        />
                    </span>
                </div>
                <input
                    type="submit"
                    className="block ml-auto mt-3 px-6 py-2 rounded-md bg-[#3F90FC] text-white"
                    value="Submit"
                />
            </form>
        </div>
    )
}

export default AddEvent
