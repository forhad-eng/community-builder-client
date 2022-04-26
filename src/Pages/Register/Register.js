import React from 'react'
import { useForm } from 'react-hook-form'
import logo from '../../assets/logos/Group 1329.png'

const Register = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="w-1/3 mx-auto">
            <img style={{ height: '60px', display: 'block', margin: '0 auto' }} src={logo} alt="" />
            <form className="mt-5 p-2 px-10 border-[1px] border-[#ABABAB]" onSubmit={handleSubmit(onSubmit)}>
                <p className="text-xl font-semibold my-8">Register as volunteer</p>
                <input
                    className="w-full block my-4 border-b-[1px] outline-none"
                    placeholder="Your name"
                    {...register('firstName')}
                />
                <input
                    className="w-full block my-4 border-b-[1px] outline-none"
                    placeholder="Your email"
                    {...register('email')}
                />
                <input className="w-full block my-4 border-b-[1px] outline-none" type="date" {...register('date')} />
                <input
                    placeholder="Description"
                    className="w-full block my-4 border-b-[1px] outline-none"
                    {...register('description')}
                />
                <input
                    placeholder="Activities"
                    className="w-full block my-4 border-b-[1px] outline-none"
                    {...register('activities')}
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
