import {Link} from 'react-router-dom'
import Login from "./Login";

export default function Home() {
    return (
        <>
            <Login />

            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </>
    );
}