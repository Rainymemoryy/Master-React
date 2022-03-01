import { createAsyncThunk } from '@reduxjs/toolkit'
import productApi from 'src/api/product.api'
import purchaseApi from 'src/api/pruchase.api'
import { payloadCreator } from 'src/untils/helper'

export const getProductDetail = createAsyncThunk(
    'productDetail/getProductDetail',
    payloadCreator(productApi.getProductDetail)
)
export const addToCard = createAsyncThunk('productDetail/addToCard', payloadCreator(purchaseApi.addToCart))
