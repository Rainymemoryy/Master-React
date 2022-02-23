import React from 'react'
import { Link } from 'react-router-dom'
import ProductRating from '../ProductRating/ProductRating'
import * as S from './productItem.style'

export default function ProductItem() {
    return (
        <S.Product>
            <Link to=''>
                <S.ProductItem>
                    <S.ProductItemImg>
                        <img src='https://cf.shopee.vn/file/3f2e5d62a0697809f98d329d70223cb4_tn' alt='' />
                    </S.ProductItemImg>
                    <S.ProductItemInfo>
                        <S.ProductItemTitle>
                            led dây 12v SMD 2835 120 Led/m 5m 6500k - 3000k, Led dán siêu sáng giá rẻ loại tốt trang trí
                            tủ bếp, kệ trưng bày
                        </S.ProductItemTitle>
                        <S.ProductItemPrice>
                            <S.ProductItemPriceOriginal>đ100.000</S.ProductItemPriceOriginal>
                            <S.ProductItemPriceSale>đ82.000</S.ProductItemPriceSale>
                        </S.ProductItemPrice>
                        <S.ProductItemMeta>
                            <ProductRating />
                        </S.ProductItemMeta>
                        <S.ProductItemSold>
                            <span>1.7k</span>
                            <span>Đã bán</span>
                        </S.ProductItemSold>
                    </S.ProductItemInfo>
                </S.ProductItem>
            </Link>
        </S.Product>
    )
}
