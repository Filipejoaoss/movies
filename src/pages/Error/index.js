import { Link } from "react-router-dom";

import "./style.css";

function Error() {
    return (
        <div className="notFound">
            <h1>404</h1>
            <h2>Page not found!</h2>
            <Link to="/">Return to home page</Link>
        </div>
    );
}

export default Error;