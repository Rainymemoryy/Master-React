import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import { path } from './constants/path'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import UnAuthenticatedGuard from './guards/UnAuthenticatedGuard'
import CartLayout from './layouts/CartLayout/CartLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import User from './pages/User/User'
import Password from './pages/User/Password/Password'
import Profile from './pages/User/Profile/Profile'
import Purchase from './pages/User/Purchase/Purchase'

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
                path={path.productDetail}
                element={
                    <MainLayout>
                        <ProductDetail />
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
                path={path.user + '/*'}
                element={
                    <AuthenticatedGuard>
                        <MainLayout>
                            <User />
                        </MainLayout>
                    </AuthenticatedGuard>
                }
            >
                <Route path='*' element={<Navigate to={path.user + path.profile} />}></Route>
                <Route path={path.profile.slice(1)} element={<Profile />}></Route>
                <Route path={path.password.slice(1)} element={<Password />}></Route>
                <Route path={path.purchase.slice(1)} element={<Purchase />}></Route>
            </Route>

            <Route
                path={path.cart}
                element={
                    <AuthenticatedGuard>
                        <CartLayout>
                            <Cart />
                        </CartLayout>
                    </AuthenticatedGuard>
                }
            ></Route>

            <Route path={path.notFound} element={<NotFound />}></Route>
        </Routes>
    )
}
