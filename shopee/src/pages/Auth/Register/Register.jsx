import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
import InputText from 'src/components/InputText/InputText'
import { path } from 'src/constants/path'

import * as S from './register.style'

export default function Register() {
    return (
        <S.StyledRegister>
            <S.Container className='container'>
                <S.Banner />
                <S.FormWrapper>
                    <S.FormTitle>Đăng ký</S.FormTitle>
                    <S.Form noValidate>
                        <S.FormControl>
                            <InputText type='email' name='email' placeholder='email' />
                        </S.FormControl>
                        <S.FormControl></S.FormControl>
                        <S.FormControl></S.FormControl>
                        <S.FormButton>
                            <Button type='submit'>Đăng ký</Button>
                        </S.FormButton>
                    </S.Form>
                    <S.FormFooter>
                        <span>Bạn đã có tài khoản?</span>
                        <Link to={path.login}>Đăng nhập</Link>
                    </S.FormFooter>
                </S.FormWrapper>
            </S.Container>
        </S.StyledRegister>
    )
}
