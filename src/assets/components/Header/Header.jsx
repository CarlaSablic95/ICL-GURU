import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
    return (
        <>
            <header className="py-4 d-flex justify-content-between">
                <p className='text-white mx-5'>User:</p>
                <div className="bg-warning mx-5">Logo</div>
            </header>

            <Sidebar />
        </>
    )
}

export default Header;