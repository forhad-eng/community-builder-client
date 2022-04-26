import 'react-loader-spinner/dist'
import { Route, Routes } from 'react-router-dom'
import BookedActivities from './Pages/Home/BookedActivities/BookedActivities'
import Home from './Pages/Home/Home'
import Nav from './Pages/Nav/Nav'
import Register from './Pages/Register/Register'
import RequireAuth from './Pages/RequireAuth/RequireAuth'
import SocialLogin from './Pages/SocialLogin/SocialLogin'

function App() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SocialLogin />} />
                <Route
                    path="/register/:id"
                    element={
                        <RequireAuth>
                            <Register />
                        </RequireAuth>
                    }
                />
                <Route path="/booked-activity" element={<BookedActivities />} />
            </Routes>
        </div>
    )
}
export default App
