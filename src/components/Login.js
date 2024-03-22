import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInFrom, setIsSignInFrom] = useState(true);
    const toggleSignForm = () => {
        setIsSignInFrom(isSignInFrom === false)
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background image" />
            </div>
            <form className="absolute h-120 w-3/12 p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90">
                <h1 className="font-bold text-3xl my-6 ">{isSignInFrom ? "Sign In" : "Sign up"}</h1>
                {!isSignInFrom &&
                    <input type="text" placeholder="Full Name" className="p-2 py-4 m-2 w-full bg-gray-700" />
                }
                <input type="text" placeholder="email-Adress" className="p-2 py-4 m-2 w-full bg-gray-700" />
                <input type="password" placeholder="Password" className="p-2 py-4 m-2 w-full bg-gray-700" />
                <button className="p-3 m-2 bg-red-700 w-full my-5">{isSignInFrom ? "Sign In" : "Sign up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignForm}>{isSignInFrom ? "New to Netflix? Sign Up Now" : "Aready registers ? Sign In Now"}</p>
            </form>
        </div>
    )
}
export default Login;