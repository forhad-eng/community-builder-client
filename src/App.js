import 'react-loader-spinner/dist'
import { Route, Routes } from 'react-router-dom'
import AddEvent from './Pages/Admin/AddEvent/AddEvent'
import Admin from './Pages/Admin/Admin'
import VolunteerList from './Pages/Admin/VolunteerList/VolunteerList'
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
                <Route path="/booked-activity" element={<BookedActivities />} />
                <Route path="/login" element={<SocialLogin />} />
                <Route
                    path="/register/:id"
                    element={
                        <RequireAuth>
                            <Register />
                        </RequireAuth>
                    }
                />
                <Route path="/admin" element={<Admin />}>
                    <Route path="volunteer" element={<VolunteerList />} />
                    <Route path="add-event" element={<AddEvent />} />
                </Route>
            </Routes>
        </div>
    )
}
export default App
