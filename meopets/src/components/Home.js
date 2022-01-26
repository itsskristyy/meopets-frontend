import {Link, useNavigate} from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate()

    return (
        <>
            {/* On successful form submission, redirect user to UserProfile */}
            <form onSubmit={() => {
                navigate("/userprofile")
            }}>
                {/* TODO: Validate user exists in backend */}
                <label>Username:<br/>
                    <input type="text" name="username" />
                </label><br/>

                {/* TODO: Validate password matches backend */}
                <label>Password:<br/>
                    <input type="text" name="password"  />
                </label><br/>

                <input type="submit" value="Submit"/>
            </form>

            <p>Don't have an account? <Link to={`/signup`}>Sign Up Here</Link></p>
        </>
    );
}