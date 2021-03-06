import { createNextState, unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Checkbox from 'src/components/Checkbox/Checkbox'
import ProductQuantityController from 'src/components/ProductQuantityController/ProductQuantityController'
import { path } from 'src/constants/path'
import { formatMoney, generateNameId } from 'src/untils/helper'
import { getCartPurchases, updatePurchase, deletePurchases, buyPurchases } from './cart.slice'
import * as S from './cart.style'
import keyBy from 'lodash/keyBy'
import { toast } from 'react-toastify'
import Helmet from 'react-helmet'

export default function Cart() {
    const dispatch = useDispatch()
    const purchases = useSelector(state => state.cart.purchases)

    const [localPurchases, setLocalPurchases] = useState(() =>
        createNextState(purchases, draft => {
            draft.forEach(purchase => {
                purchase.disabled = true
                purchase.checked = false
            })
        })
    )

    useEffect(() => {
        setLocalPurchases(localPurchases => {
            const localPurchasesObject = keyBy(localPurchases, '_id')
            return createNextState(purchases, draft => {
                draft.forEach(purchase => {
                    purchase.disabled = false
                    purchase.checked = Boolean(localPurchasesObject[purchase._id]?.checked)
                })
            })
        })
    }, [purchases])

    const handleInputQuantity = indexPurchase => value => {
        const newLocalPurchases = createNextState(localPurchases, draft => {
            draft[indexPurchase].buy_count = value
        })
        setLocalPurchases(newLocalPurchases)
    }

    const handleBlurQuantity = indexPurchase => async value => {
        const purchase = localPurchases[indexPurchase]

        setLocalPurchases(localPurchases =>
            createNextState(localPurchases, draft => {
                draft[indexPurchase].disabled = true
            })
        )

        await dispatch(
            updatePurchase({
                product_id: purchase.product._id,
                buy_count: purchase.buy_count
            })
        ).then(unwrapResult)

        await dispatch(getCartPurchases()).then(unwrapResult)

        setLocalPurchases(localPurchases =>
            createNextState(localPurchases, draft => {
                draft[indexPurchase].disabled = false
            })
        )
    }

    const handleIncreaseAndDecrease = indexPurchase => async value => {
        const purchase = localPurchases[indexPurchase]
        setLocalPurchases(localPurchases =>
            createNextState(localPurchases, draft => {
                draft[indexPurchase].disabled = true
                draft[indexPurchase].buy_count = value
            })
        )

        await dispatch(
            updatePurchase({
                product_id: purchase.product._id,
                buy_count: value
            })
        ).then(unwrapResult)

        await dispatch(getCartPurchases()).then(unwrapResult)

        setLocalPurchases(localPurchases =>
            createNextState(localPurchases, draft => {
                draft[indexPurchase].disabled = false
            })
        )
    }

    const handleCheck = indexPurchase => value => {
        setLocalPurchases(localPurchases =>
            createNextState(localPurchases, draft => {
                draft[indexPurchase].checked = value
            })
        )
    }

    const isCheckAll = localPurchases.length > 0 && localPurchases.every(purchase => purchase.checked)

    const checkedPurchases = localPurchases.filter(purchase => purchase.checked)

    const totalCheckedPurchases = checkedPurchases.length

    const totalCheckedPurchasesPrice = checkedPurchases.reduce((result, cur) => result + cur.price * cur.buy_count, 0)

    const totalCheckedPurchasesSavingPrice = checkedPurchases.reduce(
        (result, cur) => result + (cur.price_before_discount - cur.price) * cur.buy_count,
        0
    )

    const handleCheckOn = () => {
        setLocalPurchases(localPurchases =>
            createNextState(localPurchases, draft => {
                draft.forEach(purchase => {
                    purchase.checked = !isCheckAll
                })
            })
        )
    }

    const handleRemove = indexPurchase => async () => {
        const purchase_id = localPurchases[indexPurchase]._id
        await dispatch(deletePurchases([purchase_id])).then(unwrapResult)
        await dispatch(getCartPurchases())
            .then(unwrapResult)
            .then(res => console.log(res))

        toast.success('Xo?? s???n ph???m ra kh???i gi??? h??ng', {
            position: 'bottom-right',
            autoClose: 2000
        })
    }

    const handleRemoveManyPurchases = async () => {
        const purchase_ids = checkedPurchases.map(purchase => purchase._id)
        await dispatch(deletePurchases(purchase_ids)).then(unwrapResult)
        await dispatch(getCartPurchases()).then(unwrapResult)

        toast.success('Xo?? s???n ph???m ra kh???i gi??? h??ng', {
            position: 'bottom-right',
            autoClose: 2000
        })
    }

    const handleBuyPurchases = async () => {
        if (checkedPurchases.length > 0) {
            const body = checkedPurchases.map(purchase => ({
                product_id: purchase.product._id,
                buy_count: purchase.buy_count
            }))
            console.log(body)
            await dispatch(buyPurchases(body)).then(unwrapResult)
            await dispatch(getCartPurchases()).then(unwrapResult)

            toast.success('?????t ????n h??ng th??nh c??ng', {
                position: 'bottom-right',
                autoClose: 2000
            })
        }
    }
    return (
        <div className='container'>
            <Helmet>
                <title>Gi??? h??ng</title>
            </Helmet>
            <div>
                <S.ProductHeader>
                    <S.ProductHeaderCheckbox>
                        <Checkbox onChange={handleCheckOn} checked={isCheckAll} />
                    </S.ProductHeaderCheckbox>
                    <S.ProductHeaderName>S???n ph???m</S.ProductHeaderName>
                    <S.ProductHeaderUnitPrice>????n gi??</S.ProductHeaderUnitPrice>
                    <S.ProductHeaderQuantity>S??? l?????ng</S.ProductHeaderQuantity>
                    <S.ProductHeaderTotalPrice>S??? ti???n</S.ProductHeaderTotalPrice>
                    <S.ProductHeaderAction>Thao t??c</S.ProductHeaderAction>
                </S.ProductHeader>
                <S.ProductSection>
                    {localPurchases &&
                        localPurchases.map((purchase, index) => (
                            <S.CartItem key={purchase._id}>
                                <S.CartItemCheckbox>
                                    <Checkbox checked={purchase.checked} onChange={handleCheck(index)} />
                                </S.CartItemCheckbox>
                                <S.CartItemOverview>
                                    <S.CartItemOverviewImage to={path.product + `/${generateNameId(purchase.product)}`}>
                                        <img src={purchase.product.image} alt='' />
                                    </S.CartItemOverviewImage>
                                    <S.CartItemOverviewNameWrapper>
                                        <S.CartItemOverviewName
                                            to={path.product + `/${generateNameId(purchase.product)}`}
                                        >
                                            {purchase.product.name}
                                        </S.CartItemOverviewName>
                                    </S.CartItemOverviewNameWrapper>
                                </S.CartItemOverview>
                                <S.CartItemUnitPrice>
                                    <span>??{formatMoney(purchase.product.price_before_discount)}</span>
                                    <span>??{formatMoney(purchase.product.price)}</span>
                                </S.CartItemUnitPrice>
                                <S.CartItemQuantity>
                                    <ProductQuantityController
                                        max={purchase.product.quantity}
                                        value={purchase.buy_count}
                                        disabled={purchase.disabled}
                                        onInput={handleInputQuantity(index)}
                                        onBlur={handleBlurQuantity(index)}
                                        onIncrease={handleIncreaseAndDecrease(index)}
                                        onDecrease={handleIncreaseAndDecrease(index)}
                                    />
                                </S.CartItemQuantity>
                                <S.CartItemTotalPrice>
                                    <span>??{formatMoney(purchase.product.price * purchase.buy_count)}</span>
                                </S.CartItemTotalPrice>
                                <S.CartItemAction>
                                    <S.CartItemActionButton onClick={handleRemove(index)}>X??a</S.CartItemActionButton>
                                </S.CartItemAction>
                            </S.CartItem>
                        ))}
                </S.ProductSection>
            </div>
            <S.CartFooter>
                <S.CartFooterCheckbox>
                    <Checkbox onChange={handleCheckOn} checked={isCheckAll} />
                </S.CartFooterCheckbox>
                <S.CartFooterButton>Ch???n t???t c??? ({localPurchases.length})</S.CartFooterButton>
                <S.CartFooterButton onClick={handleRemoveManyPurchases}>X??a</S.CartFooterButton>
                <S.CartFooterSpaceBetween />
                <S.CartFooterPrice>
                    <S.CartFooterPriceTop>
                        <div>T???ng thanh to??n ({totalCheckedPurchases}): </div>
                        <div>??{formatMoney(totalCheckedPurchasesPrice)}</div>
                    </S.CartFooterPriceTop>
                    <S.CartFooterPriceBot>
                        <div>Ti???t ki???m</div>
                        <div>??{formatMoney(totalCheckedPurchasesSavingPrice)}</div>
                    </S.CartFooterPriceBot>
                </S.CartFooterPrice>
                <S.CartFooterCheckout onClick={handleBuyPurchases}>Mua h??ng</S.CartFooterCheckout>
            </S.CartFooter>
        </div>
    )
}
