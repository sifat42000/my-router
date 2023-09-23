import { useLoaderData } from "react-router-dom";


const Userdetails = () => {
    const user = useLoaderData()
    return (
        <div>
            <h2>Details About User :{user.name}</h2>
            <h2>Website : {user.website}</h2>
            
        </div>
    );
};

export default Userdetails;