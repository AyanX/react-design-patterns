import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count : 0
}

const countSlice = createSlice({
    name:"count",
    initialState,
    reducers:{
        increment : (state) => {
            state.count +=1
        },
        decrement : (state) => {
            state.count -=1
        },
        addAmount : (state,amount) => {
            state.count +=amount.payload
        }
    }
})

export const {increment, decrement,addAmount} = countSlice.actions

export default countSlice.reducer