import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/logos/Group 1329.png'
import gLogo from '../../assets/logos/Group 573.png'
import { auth } from '../../Firebase/firebase.init'

const SocialLogin = () => {
    const [signInWithGoogle,user] = useSignInWithGoogle(auth)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    if(user){
        navigate(from, { replace: true })
    }

    const googleSingInHandle = () => {
        signInWithGoogle()
    }

    return (
        <div className="mt-20">
            <div className="w-1/3 mx-auto">
                <img style={{ height: '60px', display: 'block', margin: '0 auto' }} src={logo} alt="" />
                <div className="mt-5 p-20 border-[1px] border-[#ABABAB]">
                    <button
                        onClick={googleSingInHandle}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #C7C7C7',
                            width: '257px',
                            height: '40px',
                            borderRadius: '51px',
                            margin: '0 auto'
                        }}
                    >
                        <img style={{ height: '31px', marginLeft: '2px' }} src={gLogo} alt="" />
                        <p className="ml-4">Continue with Google</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SocialLogin
