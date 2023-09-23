import { useLoaderData } from "react-router-dom";
import User from "../users/User";



const Users = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>

            <h2>Our All users{users.length}</h2>
            <div>
               {
                users.map(user => <User user={user} key={user.id}></User>)
               }
            </div>
            
        </div>
    );
};

export default Users;