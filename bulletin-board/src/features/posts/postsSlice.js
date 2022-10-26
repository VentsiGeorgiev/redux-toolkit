import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: 'Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more.',
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    },
    {
        id: '2',
        title: 'Opinionated Redux Toolkit',
        content: 'Provides good defaults for store setup out of the box, and includes the most commonly used Redux addons built-in.',
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.unshift(action.payload);
            },
            prepare(title, content, authorId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        authorId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        }
                    }
                };
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost = state.find(post => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        }
    }
});

export const selectAllPosts = (state) => state.posts;

export const { addPost, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;