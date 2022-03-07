import { createAsyncThunk } from '@reduxjs/toolkit'
import purchaseApi from 'src/api/purchase.api'
import { payloadCreator } from 'src/untils/helper'

export const getPurchase = createAsyncThunk('user/getPurchase', payloadCreator(purchaseApi.getPurchase))
