import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, supplier, taste, photo, price, chef, category,details, quantity } = coffee;


    const handleUpdateCoffee = (event) =>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`,{
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedCoffee)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.modifiedCount >0){
                        Swal.fire({
                            title: "Suceess",
                            text: "Coffee updated successfully",
                            icon: "success"
                          });
                    }
                })
    }

    return (
        <div>
            <div className="bg-[#F4F3F0] lg:px-0 px-10 py-20 flex items-center justify-center">
                <div className="group mx-auto flex w-full rounded-md max-w-xl border border-blue-400 bg-white text-blue-400 shadow-lg dark:bg-zinc-900">
                    <form onSubmit={handleUpdateCoffee} className="flex-1 p-8">
                        <h1 className="pb-6 text-xl font-semibold tracking-tight">Update Coffee : {name}</h1>
                        <div className="space-y-4">
                            {/* Name Field quantity row */}
                            <div className=" lg:flex gap-3">
                                {/* Name Field */}
                                <div className="w-full">
                                    <p className="text-black pb-[10px]">Coffee Name</p>
                                    <div className="relative text-sm mt-0">

                                        <input
                                            className="peer/name block text-black w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                                            type="text"
                                            placeholder=""
                                            id="navigate_ui_name_33"
                                            required
                                            name="name"
                                            defaultValue={name}
                                        />
                                        <label
                                            className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/name:top-3 peer-placeholder-shown/name:bg-transparent peer-placeholder-shown/name:text-sm peer-placeholder-shown/name:text-zinc-400 peer-focus/name:-top-2 peer-focus/name:bg-blue-300 peer-focus/name:text-xs peer-focus/name:text-blue-600"
                                            htmlFor="navigate_ui_name_33"
                                        >
                                            Enter Coffee Name
                                        </label>
                                    </div>
                                </div>
                                {/* Quantity Field */}
                                <div className="w-full lg:pt-0 pt-4">
                                    <p className="text-black pb-[10px]">Available Quantity</p>
                                    <div className="relative text-sm">
                                        <input
                                            className="peer/quantity text-black block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                                            type="text"
                                            placeholder=""
                                            id="navigate_ui_quantity_33"
                                            required
                                            name="quantity"
                                            defaultValue={quantity}
                                        />
                                        <label
                                            className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/quantity:top-3 peer-placeholder-shown/quantity:bg-transparent peer-placeholder-shown/quantity:text-sm peer-placeholder-shown/quantity:text-zinc-400 peer-focus/quantity:-top-2 peer-focus/quantity:bg-blue-300 peer-focus/quantity:text-xs peer-focus/quantity:text-blue-600"
                                            htmlFor="navigate_ui_quantity_33"
                                        >
                                            Available Quantity
                                        </label>
                                    </div>
                                </div>
                            </div>


                            {/* Supplier Field quantity row */}
                            <div className=" lg:flex  gap-3">
                                {/* Supplier Field */}
                                <div className="w-full">
                                    <p className="text-black pb-[10px]">Supplier</p>
                                    <div className="relative text-sm mt-0">

                                        <input
                                            className="peer/supplier text-black block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                                            type="text"
                                            placeholder=""
                                            id="navigate_ui_supplier_33"
                                            required
                                            name="supplier"
                                            defaultValue={supplier}
                                        />
                                        <label
                                            className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/supplier:top-3 peer-placeholder-shown/supplier:bg-transparent peer-placeholder-shown/supplier:text-sm peer-placeholder-shown/supplier:text-zinc-400 peer-focus/supplier:-top-2 peer-focus/supplier:bg-blue-300 peer-focus/supplier:text-xs peer-focus/supplier:text-blue-600"
                                            htmlFor="navigate_ui_supplier_33"
                                        >
                                            Supplier Name
                                        </label>
                                    </div>
                                </div>
                                {/* Taste Field */}
                                <div className="w-full lg:pt-0 pt-4">
                                    <p className="text-black pb-[10px]">Taste</p>
                                    <div className="relative text-sm">
                                        <input
                                            className="peer/taste text-black block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                                            type="text"
                                            placeholder=""
                                            id="navigate_ui_taste_33"
                                            required
                                            name="taste"
                                            defaultValue={taste}
                                        />
                                        <label
                                            className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/taste:top-3 peer-placeholder-shown/taste:bg-transparent peer-placeholder-shown/taste:text-sm peer-placeholder-shown/taste:text-zinc-400 peer-focus/taste:-top-2 peer-focus/taste:bg-blue-300 peer-focus/taste:text-xs peer-focus/taste:text-blue-600"
                                            htmlFor="navigate_ui_taste_33"
                                        >
                                            Taste
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Category Field Details row */}
                            <div className=" lg:flex  gap-3">
                                {/* Category Field */}
                                <div className="w-full">
                                    <p className="text-black pb-[10px]">Category</p>
                                    <div className="relative text-sm mt-0">

                                        <input
                                            className="peer/category text-black block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                                            type="text"
                                            placeholder=""
                                            id="navigate_ui_category_33"
                                            required
                                            name="category"
                                            defaultValue={category}
                                        />
                                        <label
                                            className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/category:top-3 peer-placeholder-shown/category:bg-transparent peer-placeholder-shown/category:text-sm peer-placeholder-shown/category:text-zinc-400 peer-focus/category:-top-2 peer-focus/category:bg-blue-300 peer-focus/category:text-xs peer-focus/category:text-blue-600"
                                            htmlFor="navigate_ui_category_33"
                                        >
                                            Category
                                        </label>
                                    </div>
                                </div>
                                {/* Details Field */}
                                <div className="w-full lg:pt-0 pt-4">
                                    <p className="text-black pb-[10px]">Details</p>
                                    <div className="relative text-sm">
                                        <input
                                            className="peer/company text-black block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                                            type="text"
                                            placeholder=""
                                            id="navigate_ui_company_33"
                                            required
                                            name="details"
                                            defaultValue={details}
                                        />
                                        <label
                                            className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/company:top-3 peer-placeholder-shown/company:bg-transparent peer-placeholder-shown/company:text-sm peer-placeholder-shown/company:text-zinc-400 peer-focus/company:-top-2 peer-focus/company:bg-blue-300 peer-focus/company:text-xs peer-focus/company:text-blue-600"
                                            htmlFor="navigate_ui_company_33"
                                        >
                                            Details
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Photo URL Field */}
                            <div className="w-full">
                                <p className="text-black pb-[10px]">Photo URL</p>
                                <div className="relative text-sm">
                                    <input
                                        className="peer/photo block text-black w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                                        type="text"
                                        placeholder=""
                                        id="navigate_ui_photo_33"
                                        required
                                        name="photo"
                                        defaultValue={photo}
                                    />
                                    <label
                                        className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/photo:top-3 peer-placeholder-shown/photo:bg-transparent peer-placeholder-shown/photo:text-sm peer-placeholder-shown/photo:text-zinc-400 peer-focus/photo:-top-2 peer-focus/photo:bg-blue-300 peer-focus/photo:text-xs peer-focus/photo:text-blue-600"
                                        htmlFor="navigate_ui_photo_33"
                                    >
                                        Photo URL
                                    </label>
                                </div>
                            </div>

                        </div>
                        <button
                            type="submit"
                            className="w-full relative z-50 mb-4 mt-8 inline-block overflow-hidden rounded-md uppercase border border-blue-400 px-5 py-2 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-full before:rounded-s-full before:bg-blue-400 before:duration-300 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-full after:rounded-e-full after:bg-blue-400 after:duration-300 text-blue-700 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
                        >
                            Update Coffee
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;