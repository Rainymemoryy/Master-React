import { unwrapResult } from '@reduxjs/toolkit'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import InputPassword from 'src/components/InputPassword/InputPassword'
import InputText from 'src/components/InputText/InputText'
import { path } from 'src/constants/path'
import { rules } from 'src/constants/rules'
import * as S from '../Register/register.style'

export default function Login() {
    const {
        control,
        handleSubmit,
        getValues,
        formState: { errors },
        setError
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const handleLogin = async data => {
        console.log(data)
    }

    return (
        <S.StyledRegister>
            <S.Container className='container'>
                <S.Banner />
                <S.FormWrapper>
                    <S.FormTitle>Đăng nhập</S.FormTitle>
                    <S.Form onSubmit={handleSubmit(handleLogin)} noValidate>
                        <S.FormControl>
                            <Controller
                                name='email'
                                control={control}
                                rules={rules.email}
                                render={({ field }) => (
                                    <InputText
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        onChange={field.onChange}
                                        value={getValues('email')}
                                    />
                                )}
                            />
                            <ErrorMessage errors={errors} name='email' />
                        </S.FormControl>
                        <S.FormControl>
                            <Controller
                                name='password'
                                control={control}
                                rules={rules.password}
                                render={({ field }) => (
                                    <InputPassword
                                        name='password'
                                        placeholder='Mật khẩu'
                                        onChange={field.onChange}
                                        value={getValues('password') || ''}
                                    />
                                )}
                            />
                            <ErrorMessage errors={errors} name='password' />
                        </S.FormControl>

                        <S.FormButton>
                            <Button type='submit'>Đăng nhập</Button>
                        </S.FormButton>
                    </S.Form>
                    <S.FormFooter>
                        <span>Bạn mới biết đến Shopee?</span>
                        <Link to={path.register}>Đăng ký</Link>
                    </S.FormFooter>
                </S.FormWrapper>
            </S.Container>
        </S.StyledRegister>
    )
}
