import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { path } from './constants/path'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import UnAuthenticatedGuard from './guards/UnAuthenticatedGuard'
import MainLayout from './layouts/MainLayout/MainLayout'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import User from './pages/User/User'

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
                    <UnAuthenticatedGuard>
                        <RegisterLayout title={'Đăng nhập'}>
                            <Login></Login>
                        </RegisterLayout>
                    </UnAuthenticatedGuard>
                }
            ></Route>

            <Route
                path={path.register}
                element={
                    <UnAuthenticatedGuard>
                        <RegisterLayout title={'Đăng ký'}>
                            <Register></Register>
                        </RegisterLayout>
                    </UnAuthenticatedGuard>
                }
            ></Route>
            <Route
                path={path.user}
                element={
                    <AuthenticatedGuard>
                        <MainLayout>
                            <User />
                        </MainLayout>
                    </AuthenticatedGuard>
                }
            ></Route>
            <Route path={path.notFound} element={<NotFound />}></Route>
        </Routes>
    )
}
