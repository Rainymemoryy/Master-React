import styled from 'styled-components'

// Hiện tại VS Code đang bị lỗi đối với extion này á em (theo như mô tả từ bên tác giả) và họ vẫn đang đợi vs code cập nhật bản fix trong version tiếp theo
// Nếu em cảm thấy khó chịu khi dùng styled component thì có thể chuyển sang dùng css modules, dễ hơn và tự động nhắc code
// chỉ là code khác anh 1 tí thôi ( k nhiều lắm)

export const Footer = styled.footer`
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.65);
    padding: 4.2rem 0 3.7rem;
    background: #f5f5f5;
    width: 100%;
    min-width: max-content;
`

export const Footer1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
`

export const Language = styled.div`
    display: flex;
    span {
        padding: 0 0.3215rem;
        cursor: pointer;
        &:not(:last-child) {
            border-right: 1px solid rgba(0, 0, 0, 0.2);
        }
    }
`
export const Footer2 = styled.div`
    font-size: 1.2rem;
    text-align: center;
    div {
        line-height: 2;
        :first-child {
            margin-bottom: 1.5rem;
        }
    }
`
