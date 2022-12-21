import {createSlice} from "@reduxjs/toolkit";

const initialStoreState ={toDos:[]};
const storeSlice = createSlice({

    name:"create",
    initialState: initialStoreState,
    reducers:{
        storeToDoList: (state,action) => {
            // console.log(action)
            // const newTodos = [...state.toDos,  action.payload ];
            state.toDos =[...state.toDos,  action.payload ];
        },
    }
})

export const { storeToDoList } = storeSlice.actions
export default storeSlice.reducer;