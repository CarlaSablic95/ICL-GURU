import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <header className="py-4 d-flex justify-content-between d-none d-lg-flex">
                <p className="text-white mx-5 mb-0">{ `User: ${user?.username}` }
                </p>
                <div className="bg-warning mx-5">Logo</div>
            </header>
            <Sidebar />
        </>
    )
}

export default Header;