import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Main = () => {
    return (
        <div>
            <div className="h-[68px]">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;