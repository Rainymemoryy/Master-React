import styled from 'styled-components'

export const SortBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: rgba(0, 0, 0, 0.03);
    padding: 1.25rem 1.5rem;
    border-radius: 2px;
    margin-bottom: 1.5rem;
`
export const SortBarLable = styled.span``

export const SortByOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-grow: 1;
`

export const SortByOptionsOption = styled.div`
    flex: 0 0 auto;
    cursor: pointer;
    background: #fff;
    margin-left: 1rem;
    height: 3.25rem;
    padding: 0 1.5rem;
    border-radius: 2px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    &.active {
        color: #fff;
        background: #ee4d2d;
    }
`

export const SortByPrice = styled.select`
    flex: 0 0 auto;
    margin-left: 1rem;
    height: 3.25rem;
    border: 0;
    padding: 0 1.5rem;
    &.active {
        background: #ee4d2d;
    }
`

export const MiniPageControler = styled.div`
    display: flex;
    align-items: center;
`
export const MiniPageControlerState = styled.div`
    display: flex;
    margin-right: 1.5rem;
`
export const MiniPageControlerCurrentState = styled.div`
    color: #ee4d2d;
`
export const MiniPageControlerTotalState = styled.div``

export const ButtonControler = styled.button`
    box-shadow: 0 1px 1px 0 rgb(0 0 0/50%);
    width: 3.6rem;
    height: 3.4rem;
    border-radius: 2px;
    border: 0;
    background: ${({ disabled }) => (disabled ? '#f9f9f9' : '#fff')};

    svg {
        width: 0.625rem;
        height: 0.625rem;
        fill: ${({ disabled }) => (disabled ? '#ccc' : '#555')};
        margin-top: 0.125rem;
    }
`
export const ButtonControlerPrev = styled(ButtonControler)``
export const ButtonControlerNext = styled(ButtonControler)``
