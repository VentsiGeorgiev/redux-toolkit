import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', name: 'Peter Smith' },
    { id: '2', name: 'Jane O\'connor' },
    { id: '3', name: 'Will Jameson' },
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;