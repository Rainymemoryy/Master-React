import React from 'react'
import InputText from 'src/components/InputText/InputText'
import * as S from './profile.style'
import range from 'lodash/range'

export default function Profile() {
    return (
        <S.Profile>
            <S.ProfileHeader>
                <S.ProfileHeaderTitle>Hồ sơ của tôi</S.ProfileHeaderTitle>
                <S.ProfileHeaderSubtitle>Quản lý thông tin profile để bảo mật tài khoản</S.ProfileHeaderSubtitle>
            </S.ProfileHeader>
            <S.ProfileInfo>
                <S.ProfileLeft>
                    <S.InputLabel>
                        <S.InputLabelLabel>Email</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <S.InputLabelContentText>KhangKhang04@gmail.com</S.InputLabelContentText>
                        </S.InputLabelContent>
                    </S.InputLabel>

                    <S.InputLabel>
                        <S.InputLabelLabel>Tên</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <InputText name='name' type='text' placeholder='Nhập trên của bạn' />
                        </S.InputLabelContent>
                    </S.InputLabel>

                    <S.InputLabel>
                        <S.InputLabelLabel>Số điện thoại</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <InputText name='phone' type='text' placeholder='Nhập số điện thoại của bạn' />
                        </S.InputLabelContent>
                    </S.InputLabel>

                    <S.InputLabel>
                        <S.InputLabelLabel>Địa chỉ</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <InputText name='address' type='text' placeholder='Nhập địa chỉ của bạn' />
                        </S.InputLabelContent>
                    </S.InputLabel>

                    <S.InputLabel>
                        <S.InputLabelLabel>Ngày sinh</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <S.DateSelect>
                                <S.SelectDate
                                    title='Ngày'
                                    options={range(1, 32).map(item => ({
                                        name: item,
                                        value: item
                                    }))}
                                />
                                <S.SelectDate
                                    title='Tháng'
                                    options={range(0, 12).map(item => ({
                                        name: item + 1,
                                        value: item
                                    }))}
                                />
                                <S.SelectDate
                                    title='Năm'
                                    options={range(1900, 2022).map(item => ({
                                        name: item,
                                        value: item
                                    }))}
                                />
                            </S.DateSelect>
                        </S.InputLabelContent>
                    </S.InputLabel>

                    <S.ButtonSubmit type='submit'>Lưu</S.ButtonSubmit>
                </S.ProfileLeft>

                <S.ProfileRight>
                    <S.AvatarUploader>
                        <S.Avatar>
                            <img src='https://cf.shopee.vn/file/bbe4831308307c44b638058a3e735181_tn' alt=''></img>
                        </S.Avatar>
                        <S.InputFile type='file' accept='.jpg,.png,.jpeg' />
                        <S.ButtonUpload light>Chọn ảnh</S.ButtonUpload>
                        <S.AvatarUploaderTextContainer>
                            <div>Dung lượng tối đa 1MB</div>
                            <div>Định dạng: .JPEG .PNG .JPG</div>
                        </S.AvatarUploaderTextContainer>
                    </S.AvatarUploader>
                </S.ProfileRight>
            </S.ProfileInfo>
        </S.Profile>
    )
}
