import React from 'react'
import 'normalize.css'
import 'src/assets/styles/global.scss'
import RoutesA from './RoutesA'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Authorization from './components/Authorization/Authorization'

function App() {
    return (
        <div className='App'>
            <RoutesA />
            <ToastContainer />
            <Authorization />
        </div>
    )
}

export default App
