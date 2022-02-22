import React from 'react'
import Navbar from '../Navbar/Navbar'
import * as S from './header.style'

export default function Header() {
    return (
        <S.StyleHeader>
            <div className='container'>
                <Navbar />
            </div>
        </S.StyleHeader>
    )
}
