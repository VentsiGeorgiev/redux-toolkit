import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './postsSlice';


function PostForm() {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && content) {
            dispatch(addPost(title, content));
            setTitle('');
            setContent('');
        }

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
                <label htmlFor='content'>Content</label>
                <input
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