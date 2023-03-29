import { createSlice } from "@reduxjs/toolkit";
import { getItemsFromStorage, saveItemsToStorage } from "../../localStorage";

const initialState = getItemsFromStorage() ;

const todoSlice  = createSlice({
    name:'todo',
    initialState,
    reducers : {
        addItem: (state, action)=> {
            state.push(action.payload) ;
            saveItemsToStorage(state) ;
        },
        updateItem: (state, action) => {
            const item = state.findIndex((item) => item.id === action.payload.id);
            state[item] = {
                ...action.payload
            }
            saveItemsToStorage(state) ;
          },
        deleteItem: (state, action) => {
            const id = action.payload;
            state = state.filter((item) => item.id !== id);
            saveItemsToStorage(state) ;
          },
    }
}) ;


export default todoSlice.reducer ;

export const {addItem, updateItem, deleteItem} = todoSlice.actions


