import React from 'react'
import * as S from './purchase.style'

export default function Purchase() {
    return (
        <div>
            <S.PurchaseTabs>
                <S.PurchaseTabItem to=''>Tất cả</S.PurchaseTabItem>
                <S.PurchaseTabItem to=''>Chờ xác nhận</S.PurchaseTabItem>
                <S.PurchaseTabItem to=''>Chờ lấy hàng</S.PurchaseTabItem>
                <S.PurchaseTabItem to=''>Đang giao</S.PurchaseTabItem>
                <S.PurchaseTabItem to=''>Đã giao</S.PurchaseTabItem>
                <S.PurchaseTabItem to=''>Đã huỷ</S.PurchaseTabItem>
            </S.PurchaseTabs>

            <S.PurchaseList>
                <S.OrderCard>
                    <S.OrderCardContent>
                        <S.OrderCardDetail>
                            <img alt='' src=''></img>
                            <S.OrderContent>
                                <S.OrderName>đèn liedasdsadasqw31231231 dá dá dá d á</S.OrderName>
                                <S.OrderQuantity>x 1</S.OrderQuantity>
                            </S.OrderContent>
                        </S.OrderCardDetail>
                        <S.OrderCardPrice>đ200.000</S.OrderCardPrice>
                    </S.OrderCardContent>
                    <S.OrderCardButtonsContainer>
                        <S.PurchaseButton to='' light='true'>
                            Xem sản phẩm
                        </S.PurchaseButton>
                        <S.TotalPrice>
                            <S.TotalPriceLabel>Tổng giá tiền</S.TotalPriceLabel>
                            <S.TotalPricePrice>đ200.000</S.TotalPricePrice>
                        </S.TotalPrice>
                    </S.OrderCardButtonsContainer>
                </S.OrderCard>
            </S.PurchaseList>
        </div>
    )
}
