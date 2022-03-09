import React, { Fragment } from 'react'
import * as S from './navbar.style'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { useSelector } from 'react-redux'
import { path } from 'src/constants/path'
import usePopover from 'src/hooks/usePopover'
import Popover from '../Popover/Popover'
import { useDispatch } from 'react-redux'
import { logout } from 'src/pages/Auth/auth.slice'

export default function Navbar() {
    const authenticated = useAuthenticated()
    const profile = useSelector(state => state.auth.profile)
    const { activePopover, showPopover, hidePopover } = usePopover()

    const dispatch = useDispatch()
    const handleLogout = () => dispatch(logout())

    return (
        <S.Navbar>
            <S.NavMenu>
                {authenticated && (
                    <li>
                        <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
                            <S.UserImage src='https://cf.shopee.vn/file/bbe4831308307c44b638058a3e735181_tn' />
                            <S.UserName>{profile.name || profile.email}</S.UserName>

                            <Popover active={activePopover}>
                                <S.UserLink to={path.user}>Tài khoản của tôi</S.UserLink>
                                <S.UserLink to={path.user + path.purchase}>Đơn mua</S.UserLink>
                                <S.UserButton onClick={handleLogout}>Đăng xuất</S.UserButton>
                            </Popover>
                        </S.User>
                    </li>
                )}
                {!authenticated && (
                    <Fragment>
                        <li>
                            <S.NavLink to={path.register}>Đăng ký</S.NavLink>
                        </li>
                        <li>
                            <S.NavLink to={path.login}>Đăng nhập</S.NavLink>
                        </li>
                    </Fragment>
                )}
            </S.NavMenu>
        </S.Navbar>
    )
}
