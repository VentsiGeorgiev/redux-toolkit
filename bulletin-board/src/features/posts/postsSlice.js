import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, title: 'Learning Redux Toolkit', content: 'Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more.' },
    { id: 2, title: 'Opinionated Redux Toolkit', content: 'Provides good defaults for store setup out of the box, and includes the most commonly used Redux addons built-in.' },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
});

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;