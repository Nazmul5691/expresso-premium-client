import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";


export default function SignIn() {

    const { signInUser } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        signInUser(email, password)
            .then(result => {
                console.log(result.user);

                const lastSignInTime = result?.user?.metadata?.lastSignInTime
                const logInInfo = { email, lastSignInTime }


                //use axios
                axios.patch('https://expresso-premium-server.vercel.app/users', loginInfo)
                .then(response =>{
                    console.log(response.data);
                })

                // fetch('https://expresso-premium-server.vercel.app/users', {
                //     method: "PATCH",
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify(logInInfo),
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data.user);
                //         alert('user updated successfully')
                //     })



            })
            .catch(error => {
                console.log(error);
            })




    };

    return (
        <div className="hero h-screen bg-base-200">
            <div className="hero-content">

                <div className="card flex-shrink-0 lg:w-[350px] shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                        <p>
                            New to coffee drinker?{" "}
                            <Link to="/signUp">
                                <span className="text-blue-600 font-semibold">Sign Up</span>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}




