import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2>This is a nevigationbar</h2>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;