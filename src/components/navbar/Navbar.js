import "./Navbar.css"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useQueryContext} from "../../hooks/useQueryContext";


const Navbar = () => {

    const [search, setSearch] = useState("")
    const {changeQuery} = useQueryContext()

    useEffect(()=>{
        changeQuery(search)
    },[search])

    return (
        <div className="navbar">
            <nav>

                    <Link to="/" className="title">Best Courses</Link>

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