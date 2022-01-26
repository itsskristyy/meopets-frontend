import React from "react";
import {useNavigate} from "react-router-dom";

export default function Login() {
    let navigate = useNavigate()

    // const [user, setUser] = React.useState({
    //     username: "",
    //     password: ""
    // });

    return(
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
    )
}