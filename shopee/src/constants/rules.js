import { isEmail } from 'src/untils/helper'

export const rules = {
    email: {
        required: {
            value: true,
            message: 'Email là bắt buộc'
        },
        minLength: {
            value: 5,
            message: 'Email có độ dài từ 6-160 ký tự'
        },
        maxLength: {
            value: 160,
            message: 'Email có độ dài từ 6-160 ký tự'
        },
        validate: {
            email: v => isEmail(v) || 'Email không đúng định dạng'
        }
    },
    password: {
        required: {
            value: true,
            message: 'Mật khẩu là bắt buộc'
        },
        minLength: {
            value: 6,
            message: 'Mật khẩu có độ dài từ 6-32 ký tự'
        },
        maxLength: {
            value: 32,
            message: 'Mật khẩu có độ dài từ 6-32 ký tự'
        }
    },
    confirmedPassword: {
        required: {
            value: true,
            message: 'Nhập lại mật khẩu'
        },
        minLength: {
            value: 6,
            message: 'Mật khẩu có độ dài từ 6-32 ký tự'
        },
        maxLength: {
            value: 32,
            message: 'Mật khẩu có độ dài từ 6-32 ký tự'
        }
    }
}
