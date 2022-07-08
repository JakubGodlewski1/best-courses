import "./Navbar.css"
import {useState} from "react";


const Navbar = () => {

    const [search, setSearch] = useState("")
    return (
        <div className="navbar">
            <nav>
                <h2>Best Courses</h2>
                <p>Search best courses: </p>
                <input
                    type="text"
                    onChange={(e)=>setSearch(e.target.value)}
                    value={search}
                />
            </nav>
        </div>
    );
};

export default Navbar;