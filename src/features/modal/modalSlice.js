import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isOpen : false
}

const modalSlice = createSlice({
    name : "modal",
    initialState,
    reducers: {
        OpenModal : (state , action) => {
            state.isOpen = true
        },
        CloseModal : (state , action) => {
            state.isOpen = false
        }
    }
});

export default modalSlice.reducer;
export const {OpenModal , CloseModal} = modalSlice.actions