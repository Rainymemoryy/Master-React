import React from 'react'
import 'normalize.css'
import 'src/assets/styles/global.scss'
import RoutesA from './RoutesA'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Authorization from './components/Authorization/Authorization'
import Loading from './components/Loading/Loading'

function App() {
    return (
        <div className='App'>
            <RoutesA />
            <Loading />
            <ToastContainer />
            <Authorization />
        </div>
    )
}

export default App
