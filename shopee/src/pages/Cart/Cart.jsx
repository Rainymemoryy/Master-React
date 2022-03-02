import { Checkbox } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductQuantityController from 'src/components/ProductQuantityController/ProductQuantityController'
import { formatMoney } from 'src/untils/helper'
import * as S from './cart.style'
export default function Cart() {
    const purchases = useSelector(state => state.cart.purchases)
    console.log(purchases)
    return (
        <div className='container'>
            <div>
                <S.ProductHeader>
                    <S.ProductHeaderCheckbox>
                        <Checkbox />
                    </S.ProductHeaderCheckbox>
                    <S.ProductHeaderName>Sản phẩm</S.ProductHeaderName>
                    <S.ProductHeaderUnitPrice>Đơn giá</S.ProductHeaderUnitPrice>
                    <S.ProductHeaderQuantity>Số lượng</S.ProductHeaderQuantity>
                    <S.ProductHeaderTotalPrice>Số tiền</S.ProductHeaderTotalPrice>
                    <S.ProductHeaderAction>Thao tác</S.ProductHeaderAction>
                </S.ProductHeader>
                <S.ProductSection>
                    {purchases &&
                        purchases.map(purchase => (
                            <S.CartItem key={purchase._id}>
                                <S.CartItemCheckbox>
                                    <Checkbox />
                                </S.CartItemCheckbox>
                                <S.CartItemOverview>
                                    <S.CartItemOverviewImage to=''>
                                        <img src={purchase.product.image} alt='' />
                                    </S.CartItemOverviewImage>
                                    <S.CartItemOverviewNameWrapper>
                                        <S.CartItemOverviewName to=''>{purchase.product.name}</S.CartItemOverviewName>
                                    </S.CartItemOverviewNameWrapper>
                                </S.CartItemOverview>
                                <S.CartItemUnitPrice>
                                    <span>đ{formatMoney(purchase.product.price_before_discount)}</span>
                                    <span>đ{formatMoney(purchase.product.price)}</span>
                                </S.CartItemUnitPrice>
                                <S.CartItemQuantity>
                                    <ProductQuantityController
                                        max={purchase.product.quantity}
                                        value={purchase.buy_count}
                                    />
                                </S.CartItemQuantity>
                                <S.CartItemTotalPrice>
                                    <span>đ{formatMoney(purchase.product.price * purchase.buy_count)}</span>
                                </S.CartItemTotalPrice>
                                <S.CartItemAction>
                                    <S.CartItemActionButton>Xóa</S.CartItemActionButton>
                                </S.CartItemAction>
                            </S.CartItem>
                        ))}
                </S.ProductSection>
            </div>
            <S.CartFooter>
                <S.CartFooterCheckbox>
                    <Checkbox />
                </S.CartFooterCheckbox>
                <S.CartFooterButton>Chọn tất cả {purchases.length}</S.CartFooterButton>
                <S.CartFooterButton>Xóa</S.CartFooterButton>
                <S.CartFooterSpaceBetween />
                <S.CartFooterPrice>
                    <S.CartFooterPriceTop>
                        <div>Tổng thanh toán (10 sản phẩm): </div>
                        <div>đ500000</div>
                    </S.CartFooterPriceTop>
                    <S.CartFooterPriceBot>
                        <div>Tiết kiệm</div>
                        <div>đ50000</div>
                    </S.CartFooterPriceBot>
                </S.CartFooterPrice>
                <S.CartFooterCheckout>Mua hàng</S.CartFooterCheckout>
            </S.CartFooter>
        </div>
    )
}
