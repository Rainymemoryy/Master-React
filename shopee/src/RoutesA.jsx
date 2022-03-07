import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loading from './components/Loading/Loading'

import { path } from './constants/path'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import UnAuthenticatedGuard from './guards/UnAuthenticatedGuard'
import CartLayout from './layouts/CartLayout/CartLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'

import Password from './pages/User/Password/Password'
import Profile from './pages/User/Profile/Profile'
import Purchase from './pages/User/Purchase/Purchase'

const Home = lazy(() => import('./pages/Home/Home'))
const ProductDetail = lazy(() => import('./pages/ProductDetail/ProductDetail'))
const User = lazy(() => import('./pages/User/User'))
const Cart = lazy(() => import('./pages/Cart/Cart'))
const Register = lazy(() => import('./pages/Auth/Register/Register'))
const Login = lazy(() => import('./pages/Auth/Login/Login'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

export default function RoutesA() {
    return (
        <Routes>
            <Route
                path={path.home}
                element={
                    <MainLayout>
                        <Suspense fallback={<Loading />}>
                            <Home />
                        </Suspense>
                    </MainLayout>
                }
            ></Route>

            <Route
                path={path.productDetail}
                element={
                    <MainLayout>
                        <Suspense fallback={<Loading />}>
                            <ProductDetail />
                        </Suspense>
                    </MainLayout>
                }
            ></Route>

            <Route
                path={path.login}
                element={
                    <UnAuthenticatedGuard>
                        <RegisterLayout title={'Đăng nhập'}>
                            <Suspense fallback={<Loading />}>
                                <Login />
                            </Suspense>
                        </RegisterLayout>
                    </UnAuthenticatedGuard>
                }
            ></Route>

            <Route
                path={path.register}
                element={
                    <UnAuthenticatedGuard>
                        <RegisterLayout title={'Đăng ký'}>
                            <Suspense fallback={<Loading />}>
                                <Register />
                            </Suspense>
                        </RegisterLayout>
                    </UnAuthenticatedGuard>
                }
            ></Route>

            <Route
                path={path.user + '/*'}
                element={
                    <AuthenticatedGuard>
                        <MainLayout>
                            <Suspense fallback={<Loading />}>
                                <User />
                            </Suspense>
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
                            <Suspense fallback={<Loading />}>
                                <Cart />
                            </Suspense>
                        </CartLayout>
                    </AuthenticatedGuard>
                }
            ></Route>

            <Route path={path.notFound} element={<NotFound />}></Route>
        </Routes>
    )
}
