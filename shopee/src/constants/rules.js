import { isEmail } from 'src/untils/helper'

export const rules = {
    name: {
        minLength: {
            value: 1,
            message: 'Tên có độ dài từ 1-160 ký tự'
        },
        maxLength: {
            value: 160,
            message: 'Tên có độ dài từ 1-160 ký tự'
        }
    },
    phone: {
        minLength: {
            value: 9,
            message: 'SDT có độ dài từ 9-20 ký tự'
        },
        maxLength: {
            value: 20,
            message: 'SDT có độ dài từ 9-20 ký tự'
        }
    },
    address: {
        minLength: {
            value: 5,
            message: 'Địa chỉ có độ dài từ 5-160 ký tự'
        },
        maxLength: {
            value: 160,
            message: 'Địa chỉ có độ dài từ 5-160 ký tự'
        }
    },
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
