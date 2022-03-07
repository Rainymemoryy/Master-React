import { unwrapResult } from '@reduxjs/toolkit'
import React from 'react'
import Helmet from 'react-helmet'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import InputPassword from 'src/components/InputPassword/InputPassword'
import { rules } from 'src/constants/rules'
import { updateMe } from 'src/pages/Auth/auth.slice'
import * as S from '../Profile/profile.style'
import { PasswordContent } from './password.style'

export default function Password() {
    const {
        control,
        handleSubmit,
        getValues,
        formState: { errors },
        setError,
        reset
    } = useForm({
        defaultValues: {
            password: '',
            new_password: '',
            confirmed_new_password: ''
        }
    })
    const dispatch = useDispatch()
    const update = async data => {
        const body = {
            password: data.password,
            new_password: data.new_password
        }
        try {
            await dispatch(updateMe(body)).then(unwrapResult)

            toast.success('Cập nhật mật khẩu thành công', {
                position: 'bottom-right',
                autoClose: 2000
            })
            reset()
        } catch (error) {
            if (error.status === 422) {
                console.log(error)
                for (const key in error.data) {
                    setError(key, {
                        type: 'sever',
                        message: error.data[key]
                    })
                }
            }
        }
    }
    return (
        <S.Profile>
            <Helmet>
                <title>Cập nhật bảo mật</title>
            </Helmet>
            <S.ProfileHeader>
                <S.ProfileHeaderTitle>Đổi mật khẩu</S.ProfileHeaderTitle>
                <S.ProfileHeaderSubtitle>
                    Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
                </S.ProfileHeaderSubtitle>
                <PasswordContent onSubmit={handleSubmit(update)}>
                    <S.InputLabel>
                        <S.InputLabelLabel name='password'>Mật khẩu cũ</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <Controller
                                name='password'
                                control={control}
                                rules={rules.password}
                                render={({ field }) => (
                                    <InputPassword
                                        onChange={field.onChange}
                                        name='password'
                                        value={getValues('password')}
                                    />
                                )}
                            />
                            <ErrorMessage name='password' errors={errors} />
                        </S.InputLabelContent>
                    </S.InputLabel>
                    <S.InputLabel>
                        <S.InputLabelLabel name='new_password'>Mật khẩu mớI</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <Controller
                                name='new_password'
                                control={control}
                                rules={rules.confirmedPassword}
                                render={({ field }) => (
                                    <InputPassword
                                        onChange={field.onChange}
                                        name='new_password'
                                        value={getValues('new_password')}
                                    />
                                )}
                            />
                            <ErrorMessage name='new_password' errors={errors} />
                        </S.InputLabelContent>
                    </S.InputLabel>
                    <S.InputLabel>
                        <S.InputLabelLabel name='confirm_new_password'>Mật khẩu mới</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <Controller
                                name='confirmed_new_password'
                                control={control}
                                rules={{
                                    ...rules.confirmedPassword,
                                    validate: {
                                        samePassword: v => v === getValues('new_password') || 'Mật khẩu không khớp'
                                    }
                                }}
                                render={({ field }) => (
                                    <InputPassword
                                        onChange={field.onChange}
                                        name='confirmed_new_password'
                                        value={getValues('confirmed_new_password')}
                                    />
                                )}
                            />
                            <ErrorMessage name='confirmed_new_password' errors={errors} />
                        </S.InputLabelContent>
                    </S.InputLabel>
                    <S.Submit type='submit'>
                        <S.ButtonSubmit>Lưu</S.ButtonSubmit>
                    </S.Submit>
                </PasswordContent>
            </S.ProfileHeader>
        </S.Profile>
    )
}
