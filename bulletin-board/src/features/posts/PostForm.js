import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

function PostForm() {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorId, setAuthorId] = useState(users[0].id);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && content) {
            dispatch(addPost(title, content, authorId));
            setTitle('');
            setContent('');
        }
    };

    const userOptions = () => {
        return (
            users.map((user) => (
                <option key={user.id} value={user.id}>{user.name}</option>
            ))
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='title'>Post Title</label>
                <input
                    name='title'
                    id='title'
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='author'>Author</label>
                <select
                    name='author'
                    id='author'
                    type='text'
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                >
                    {userOptions()}
                </select>
            </div>
            <div>
                <label htmlFor='content'>Content</label>
                <textarea
                    name='content'
                    id='content'
                    type='text'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button>Save Post</button>
        </form>
    );
}

export default PostForm;