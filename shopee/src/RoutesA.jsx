import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { path } from './constants/path'
import MainLayout from './layouts/MainLayout/MainLayout'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

export default function RoutesA() {
    return (
        <Routes>
            <Route
                path={path.home}
                element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                }
            ></Route>
            <Route
                path={path.login}
                element={
                    <RegisterLayout title={'Đăng nhập'}>
                        <Login></Login>
                    </RegisterLayout>
                }
            ></Route>

            <Route
                path={path.register}
                element={
                    <RegisterLayout title={'Đăng ký'}>
                        <Register></Register>
                    </RegisterLayout>
                }
            ></Route>
            <Route path={path.notFound} element={<NotFound />}></Route>
        </Routes>
    )
}
