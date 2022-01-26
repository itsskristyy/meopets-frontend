import {Link, useNavigate} from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate()

    return (
        <>
            <form onSubmit={() => {
                navigate("/userprofile")
            }}>
                <label>Username:<br/>
                    <input type="text" name="username" />
                </label><br/>

                <label>Password:<br/>
                    <input type="text" name="password"  />
                </label><br/>

                <input type="submit" value="Submit"/>
            </form>

            <p>Don't have an account? <Link to = "/Signup" onClick={() => window.location.reload()}> Sign Up Here</Link></p>
        </>
    );
}