import React from 'react'
import Activities from './Activities/Activities'

const Home = () => {
    return (
        <div>
            <div className="w-1/2 mx-auto mt-10">
                <p className="uppercase text-center text-4xl font-[500]">I grow by helping people in need.</p>
                <div className="w-2/3 mx-auto mt-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="py-2 pl-3 outline-none"
                        style={{ border: '1px solid #D6D6D6', borderRight: '0px', borderRadius: '6px 0 0 6px' }}
                    />
                    <button className=" bg-[#3F90FC] text-white mb-2 px-6 py-2" style={{ borderRadius: '0 6px 6px 0' }}>
                        Search
                    </button>
                </div>
            </div>
            <Activities />
        </div>
    )
}

export default Home
