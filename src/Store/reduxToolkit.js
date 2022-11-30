import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addToCart = createSlice({
    name: "myCart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            let newItem = true
            state = state.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo = { ...todo, counts: todo.counts + 1 };
                    newItem = false
                }
                return todo;
            });
            if (newItem) state = [...state, { id: action.payload.id, image: action.payload.image, category: action.payload.category, title: action.payload.title, description: action.payload.description, price: action.payload.price, counts: 1 }]
            return state
        },
        removeCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        }
    },
});

export const {
    addCart,
    removeCart
} = addToCart.actions;

export default addToCart.reducer;
