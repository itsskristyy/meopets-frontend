import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/loginContext";
import Pets from "./Pets";

export default function UserProfile(props) {
    //const [greeting, setGreeting] = useState("Welcome Back, Bobble!");
    const user = useContext(UserContext);
    const updateUser = useContext(UserContext).updateUser;
    const navigate = useNavigate();
    const loading = user.currency === 0;
    
    useEffect(() => {
        if(!user.isLoggedIn) {
            navigate('/home');
        }
    }, []);

    async function getCoins(newCurrency) {
        return updateUser(newCurrency);
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
        <>  
            {!user.isLoggedIn && navigate('/home')}
            {user.isLoggedIn && !loading &&
                <div>
                    <div className="currency-display">
                        <div className="currency">
                            <img src="https://cdn-icons-png.flaticon.com/512/550/550638.png" alt="coin stack"
                                className="coins-img"/>
                            <p className="coins">{user.currency}</p>
                        </div>
                        {(user.user.created === user.user.lastUpdated || today > new Date(user.user.lastUpdated)) && 
                        <button type='button' className="daily-button"  
                        onClick={async () => {
                            if(user.user.created === user.user.lastUpdated || today > new Date(user.user.lastUpdated)) {
                                await getCoins({currency: user.currency + 50})
                            }
                        }}>Daily Coins!</button>}
                    </div>

                <div className="banner">


                    <div>
                        {new Date(user.user.created) < today &&
                            <h1 className="prof-msg-txt">Welcome back, {user.user.username}!</h1>}
                        {new Date(user.user.created) > today &&
                        <h1 className="prof-msg-txt">Welcome, {user.user.username}!</h1>}
                    </div>

                    </div>

                    <h2 className="pet-list">Your pets:</h2>
                    <Pets/>
            </div>}



            {/* Outlet sets this component as the parent route:
            
            UserProfile will be the parent route of Pet, path = "/userprofile"
            When the user clicks on an individual, pet, they will be taken
            to that pet's profile page, path = "/userprofile/petnamehere" */}
            <Outlet/>
        </>
    );
}