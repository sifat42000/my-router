import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const postt = useLoaderData()
    return (
        <div>
            <h2>PostDetails id:{postt.id}</h2>
            <h2>Tittle:{postt.title}</h2>
            <h2>Body:{postt.body}</h2>

        </div>
    );
};

export default PostDetails;