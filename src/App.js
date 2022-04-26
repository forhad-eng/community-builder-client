import 'react-loader-spinner/dist'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Nav from './Pages/Nav/Nav'

function App() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
