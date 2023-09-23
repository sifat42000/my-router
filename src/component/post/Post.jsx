import { Link } from "react-router-dom";


const Post = ({post}) => {
    return (
        <div>
            <h2>Tittle :{post.title}</h2>
            <h2>Body :{post.body}</h2>
            <Link to={`/post/${post.id}`}>Show details</Link>
            
            
        </div>
    );
};

export default Post;