import Login from "./Login";
import {Link, Outlet} from "react-router-dom";

export default function Landing() {
    return (
        <>
            <h1>Welcome to Meopets!</h1>

            <h2>Returning user?{" "}
                <Link className="link"
                      to={`/login`}
                >Login</Link>
            </h2>

            <h2>Haven't made an account yet?{" "}
                <Link className="link"
                      to={`/signup`}
                >Come adopt a pet!</Link>
            </h2>
        </>
    );
}