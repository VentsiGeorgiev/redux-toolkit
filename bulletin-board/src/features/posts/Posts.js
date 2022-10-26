import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
import PostAuthor from './PostAuthor';
import PostForm from './PostForm';
import { selectAllPosts } from './postsSlice';
import ReactionButtons from './ReactionButtons';

function Posts() {
    const posts = useSelector(selectAllPosts);
    const users = useSelector(selectAllUsers);

    // const getUserName = (userId) => {
    //     const user = users.find((user) => user.id === userId);
    //     return user ? <span>{user.name}</span> : <span>Unknown Author</span>;
    // };

    const renderPosts = () => {
        return (
            posts.map((post) => (
                <article key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.content}</p>
                    {/* {getUserName(post.authorId)} */}
                    <div>
                        <PostAuthor userId={post.authorId} />
                    </div>
                    <ReactionButtons post={post} />
                </article>
            ))
        );
    };

    return (
        <section>
            <PostForm />
            {renderPosts()}
        </section>
    );
}

export default Posts;