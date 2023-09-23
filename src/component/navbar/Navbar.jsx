import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <h2>This is our Navbar</h2>
            <Link to="/mouse">About</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/header">Home</Link>
            <Link to="/users">User</Link>
            
            
            
        </div>
    );
};

export default Navbar;