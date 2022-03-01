import React from 'react'
import 'normalize.css'
import 'src/assets/styles/global.scss'
import RoutesA from './RoutesA'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
    return (
        <div className='App'>
            <RoutesA />
            <ToastContainer />
        </div>
    )
}

export default App
