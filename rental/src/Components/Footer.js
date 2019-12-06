import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <div className="center">© 2020 | Peninsula Vacation Rentals</div>
            <div className="center"><Link to={"/about"}>About</Link>{" | "}<Link to={"/contact"}>Contact</Link></div>
        </footer>

    )
}
export default Footer