import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name:"string",
    initialState:{
      counter: [],
    },
     
    reducers:{

        changeCounter: (state,input)=>{
            console.log(input.payload)
              state.counter.push(input.payload)
            
        }
    }
    
})

export const {changeCounter,decrementCounter} = slice.actions;
export default slice.reducer;