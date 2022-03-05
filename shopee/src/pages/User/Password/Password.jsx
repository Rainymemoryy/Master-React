import React from 'react'
import InputPassword from 'src/components/InputPassword/InputPassword'
import * as S from '../Profile/profile.style'
import { PasswordContent } from './password.style'

export default function Password() {
    console.log('Password')
    return (
        <S.Profile>
            <S.ProfileHeader>
                <S.ProfileHeaderTitle>Đổi mật khẩu</S.ProfileHeaderTitle>
                <S.ProfileHeaderSubtitle>
                    Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
                </S.ProfileHeaderSubtitle>
                <PasswordContent>
                    <S.InputLabel>
                        <S.InputLabelLabel name='password'>Mật khẩu cũ</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <InputPassword />
                        </S.InputLabelContent>
                    </S.InputLabel>
                    <S.InputLabel>
                        <S.InputLabelLabel name='new_password'>Mật khẩu mớI</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <InputPassword />
                        </S.InputLabelContent>
                    </S.InputLabel>
                    <S.InputLabel>
                        <S.InputLabelLabel name='confirm_new_password'>Mật khẩu mới</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <InputPassword />
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
