import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import logo from '../../assets/logos/Group 1329.png'
import { auth } from '../../Firebase/firebase.init'

const Register = () => {
    const [activity, setActivity] = useState({})
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    useEffect(() => {
        const getActivity = async () => {
            const url = `http://localhost:5000/activity/${id}`
            const { data } = await axios.get(url)
            setActivity(data)
        }
        getActivity()
    }, [])

    const onSubmit = async formData => {
        const url = 'http://localhost:5000/book'
        formData.name = user?.displayName
        formData.email = user?.email
        formData.activity = activity.activityName
        formData.picture = activity.picture
        const { data } = await axios.post(url, formData)
        if (data.acknowledged) {
            alert('Registered')
            navigate('/')
        }
    }

    return (
        <div className="w-1/3 mx-auto">
            <img style={{ height: '60px', display: 'block', margin: '0 auto' }} src={logo} alt="" />
            <form className="mt-5 p-2 px-10 border-[1px] border-[#ABABAB]" onSubmit={handleSubmit(onSubmit)}>
                <p className="text-xl font-semibold my-8">Register as volunteer</p>
                <input
                    readOnly
                    disabled
                    value={user?.displayName}
                    className="w-full block my-4 border-b-[1px] outline-none"
                    {...register('firstName')}
                />
                <input
                    value={user?.email}
                    readOnly
                    disabled
                    className="w-full block my-4 border-b-[1px] outline-none"
                    {...register('email')}
                />
                <input
                    required
                    className="w-full block my-4 border-b-[1px] outline-none"
                    type="date"
                    {...register('date')}
                />
                <input
                    placeholder="Description"
                    className="w-full block my-4 border-b-[1px] outline-none"
                    {...register('description')}
                />
                <input
                    value={activity?.activityName}
                    readOnly
                    disabled
                    className="w-full block my-4 border-b-[1px] outline-none"
                    {...register('activity')}
                />
                <input
                    className="w-full mb-10 bg-[#3F90FC] text-white px-6 py-2 rounded-md"
                    type="submit"
                    value="Register"
                />
            </form>
        </div>
    )
}

export default Register
