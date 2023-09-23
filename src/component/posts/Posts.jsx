import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";


const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h2>Post : {posts.length}</h2>
            <div>
                {
                    posts.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>
            
        </div>
    );
};

export default Posts;