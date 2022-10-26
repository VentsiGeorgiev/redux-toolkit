import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
};

function ReactionButtons({ post }) {

    const dispatch = useDispatch();

    const ReactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type='button'
                onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
                className='btn-reaction'
            >
                {emoji} {post.reactions[name]}
            </button>
        );
    });

    return <div>{ReactionButtons}</div>;


}

export default ReactionButtons;