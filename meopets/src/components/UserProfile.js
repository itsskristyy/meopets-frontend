import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/loginContext";
import Pets from "./Pets";

export default function UserProfile(props) {
    //const [greeting, setGreeting] = useState("Welcome Back, Bobble!");
    const user = useContext(UserContext);
    const updateUser = useContext(UserContext).updateUser;
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!user.isLoggedIn) {
            navigate('/home');
        }
    }, []);

    // async function getCoins(newCurrency) {
    //     return updateUser(newCurrency);
    // }

    return (
        <>  
            {!user.isLoggedIn && navigate('/home')}
            {user.isLoggedIn &&
                <div>
                    <div className="currency">
                        <img src="https://cdn-icons-png.flaticon.com/512/550/550638.png" alt="coin stack"
                             className="coins-img"/>
                        <p className="coins">{user.currency + 50}</p>
                    </div>

                    <div className="banner">

                {/*<button type='button' */}
                {/*    onClick={async () => {*/}
                {/*        const today = new Date();*/}
                {/*        today.setHours(0, 0, 0, 0);*/}
                {/*        const lastUpdated = new Date(user.user.lastUpdated);*/}
                {/*        if(today > lastUpdated) {*/}
                {/*            await getCoins({currency: user.currency + 50})*/}
                {/*        } else {*/}

                {/*        }*/}
                {/*    }}>Get Your Daily Coins!</button>*/}

                <div>
                    {user.user.created !== user.user.lastUpdated &&
                    <h3 className="prof-msg-txt">Welcome back, {user.user.username}!</h3>}
                    {user.user.created === user.user.lastUpdated &&
                    <h4 className="prof-msg-txt">Welcome, {user.user.username}!</h4>}
                </div>

            </div>
            </div>}

            <Pets/>

            {/* Outlet sets this component as the parent route:
            
            UserProfile will be the parent route of Pet, path = "/userprofile"
            When the user clicks on an individual, pet, they will be taken
            to that pet's profile page, path = "/userprofile/petnamehere" */}
            <Outlet/>
        </>
    );
}