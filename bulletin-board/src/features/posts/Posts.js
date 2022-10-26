import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

function Posts() {
    const posts = useSelector(selectAllPosts);

    const renderPosts = () => {
        return (
            posts.map((post) => (
                <article key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.content}</p>
                </article>
            ))
        );
    };

    return (
        <section>
            <h3>Posts</h3>
            {renderPosts()}
        </section>
    );
}

export default Posts;