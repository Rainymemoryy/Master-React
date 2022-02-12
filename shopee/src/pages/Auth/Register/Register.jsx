import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import { Message } from 'src/components/ErrorMessage/errorMessage.style'
import InputPassword from 'src/components/InputPassword/InputPassword'
import InputText from 'src/components/InputText/InputText'
import { path } from 'src/constants/path'
import { rules } from 'src/constants/rules'

import * as S from './register.style'

export default function Register() {
    const {
        control,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirmedPasword: ''
        }
    })

    const handleRegister = data => {
        console.log(data)
    }

    console.log(errors)

    return (
        <S.StyledRegister>
            <S.Container className='container'>
                <S.Banner />
                <S.FormWrapper>
                    <S.FormTitle>Đăng ký</S.FormTitle>
                    <S.Form onSubmit={handleSubmit(handleRegister)} noValidate>
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
                                        value={getValues('password')}
                                    />
                                )}
                            />
                            <ErrorMessage errors={errors} name='password' />
                        </S.FormControl>
                        <S.FormControl>
                            <Controller
                                name='confirmedPassword'
                                control={control}
                                rules={{
                                    ...rules.confirmedPassword,
                                    validate: {
                                        samePassword: v => v === getValues('password') || 'Mật khẩu không khớp'
                                    }
                                }}
                                render={({ field }) => (
                                    <InputPassword
                                        name='confirmedPassword'
                                        placeholder='Nhập lại mật khẩu'
                                        onChange={field.onChange}
                                        value={getValues('confirmedPassword')}
                                    />
                                )}
                            />
                            <ErrorMessage errors={errors} name='confirmedPassword' />
                        </S.FormControl>
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
