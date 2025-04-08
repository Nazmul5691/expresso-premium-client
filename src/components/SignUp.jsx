import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


export default function SignUp() {
    

    const {createUser} = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;



        

        createUser(email, password)
        .then(result =>{
            console.log(result);

            const createdAt = result?.user?.metadata?.createdAt;

            const newUser = {name, email, createdAt}

            fetch('http://localhost:5000/users', {
                method:'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res =>res.json())
            .then(data => {
                console.log(data);
                alert('user added into database successfully')
            })


        })
        .catch(error => console.log(error))
       
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content lg:w-[400px]">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
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
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}