import { GiCoffeeCup } from "react-icons/gi";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";


const Home = () => {
    const loadedCoffee = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffee)
    return (
        <div>
            
            <div className="space-y-8 pt-20">
            <div className="flex flex-col gap-4">
                <p className="text-center">--- Sip & Savor ---</p>
                <h1 className=' text-3xl lg:text-6xl text-center text-purple-600 '>
                    Our Popular Products
                </h1>
                <div className="flex items-center justify-center">
                    <Link to="/addCoffee">
                        <button className="flex items-center justify-center gap-2 text-xl rounded-[4px]  bg-[#e3b577] px-3 py-2">
                            Add Coffee <span><GiCoffeeCup /></span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-4 lg:px-0 px-10 max-w-5xl mx-auto'>
                {
                   coffees.map(coffee => <CoffeeCard coffee={coffee} coffees={coffees} setCoffees={setCoffees} key={coffee._id}></CoffeeCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default Home;