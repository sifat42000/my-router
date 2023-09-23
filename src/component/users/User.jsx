// import { Link } from "react-router-dom";

const User = ({user}) => {
    return (
        <div>
            <h2>Name :{user.name}</h2>
            <h2>Username :{user.username}</h2>
            <h2>Email :{user.email}</h2>
            {/* <Link to={`/user/${id}`}></Link> */}
            
        </div>
    );
};

export default User;