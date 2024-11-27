import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "counter",
    initialState : {
        nombre : 0
    },
    reducers : {
        increment : (state,action)=>{ 
            state.nombre += 1 
        },
        decrement : (state,action)=>{ 
            state.nombre -= 1 
        },
        reset : (state,action)=>{ 
            state.nombre = 0 
        },
        incrementByAmount : (state,action)=>{ 
            state.nombre += action.payload
        }
    }
})


export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
