import React, { Fragment, useState } from 'react'
import * as S from './navbar.style'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { useSelector } from 'react-redux'
import { path } from 'src/constants/path'

export default function Navbar() {
    const [activePopover, setActivePopover] = useState(false)
    const authenticated = useAuthenticated()
    const profile = useSelector(state => state.auth.profile)

    const showPopover = () => setActivePopover(true)
    const hidePopover = () => setActivePopover(false)
    return (
        <S.Navbar>
            <S.NavMenu>
                {authenticated && (
                    <li>
                        <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
                            <S.UserImage src='https://cf.shopee.vn/file/bbe4831308307c44b638058a3e735181_tn' />
                            <S.UserName>{profile.name || profile.email}</S.UserName>
                            {activePopover && (
                                <S.Drawer>
                                    <S.PopoverArrow />
                                    <S.PopoverContent>
                                        <S.UserLink to=''>Tài khoản của tôi</S.UserLink>
                                        <S.UserLink to=''>Đơn mua</S.UserLink>
                                        <S.UserButton>Đăng xuất</S.UserButton>
                                    </S.PopoverContent>
                                </S.Drawer>
                            )}
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
