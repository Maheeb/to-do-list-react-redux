import {createSlice, current} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

const initialStoreState ={toDos:[]};
const storeSlice = createSlice({
    name:"create",
    initialState: initialStoreState,
    reducers:{
        storeToDoList: (state,action) => {
            const todo = {
                id: uuidv4(),
                text: action.payload,
                isDone: false
            };
            state.toDos =[...state.toDos,  todo ];
        },
        isDoneToDo: (state,action) => {
            const newTodos = [...state.toDos];
            newTodos.map((todo, index) => {
                if (index == action.payload) {
                    todo.isDone = !todo.isDone;
                }
            })
            state.toDos = newTodos;
        },
        removeToDo: (state,action) => {
            const itemRemoved = state.toDos.filter((item) => item.id != action.payload);
            state.toDos = itemRemoved;
        },

    }
})

export const { storeToDoList,isDoneToDo,removeToDo } = storeSlice.actions
export default storeSlice.reducer;