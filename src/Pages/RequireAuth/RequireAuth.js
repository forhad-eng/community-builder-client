import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BallTriangle } from 'react-loader-spinner'
import { Navigate, useLocation } from 'react-router-dom'
import { auth } from '../../Firebase/firebase.init'

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()

    if (loading) {
        return (
            <div className="absolute left-1/2">
                <BallTriangle height="80" width="80" color="#00BFFF" ariaLabel="loading" />
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children
}

export default RequireAuth
