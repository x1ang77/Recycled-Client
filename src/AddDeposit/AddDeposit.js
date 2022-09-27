import { useState } from "react";
import { addDeposits } from "../api/deposits";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

export const AddDeposit = () => {
    const navigate = useNavigate();
    const [deposit, setDeposit] = useState({});
    const [image, setImage] = useState();
    const queryClient = useQueryClient();
    const mutation = useMutation(
        ({ deposit, image, points }) => addDeposits(deposit, image, points),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["deposits"]);
                navigate("/");
                toast.success("Added successfully", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            },
            onError: async () => {
                let x = await mutation.error;
                toast.error(x, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            },
        }
    );

    const onChangeHandler = (e) => {
        setDeposit({ ...deposit, [e.target.name]: e.target.value });
    };

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let points = document.getElementById("added-points").value;
        console.log(points);
        mutation.mutate({ deposit, image, points });
        if (mutation.isSuccess) navigate("/");
    };

    return (
        <>
            <body class="bg-gray-100 flex bg-local pt-5">
                <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-12 px-12 lg:px-24 shadow-xl mb-24">
                    <h2 className="flex justify-center my-2">
                        Fill up your deposit information here!
                    </h2>
                    <form
                        method="POST"
                        className="flex-col"
                        encType="multipart/form-data"
                        onSubmit={onSubmitHandler}
                    >
                        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-full px-3">
                                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Username
                                    </label>
                                    <input
                                        class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                        name="username"
                                        type="text"
                                        placeholder="Username"
                                        onChange={onChangeHandler}
                                    />
                                </div>
                            </div>
                            <div class="-mx-3 md:flex mb-2">
                                <div class="md:w-1/2 px-3 md:mb-0">
                                    <label
                                        class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                        for=""
                                    >
                                        Plastic Weight (kg)
                                    </label>
                                    <div>
                                        <input
                                            class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 mb-3 rounded"
                                            type="number"
                                            defaultValue={0}
                                            min={0}
                                            name="plasticWeight"
                                            step="0.1"
                                            onChange={onChangeHandler}
                                        />
                                    </div>
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label
                                        class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                        for="location"
                                    >
                                        Metal Weight (kg)
                                    </label>
                                    <div>
                                        <input
                                            class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 mb-3 rounded"
                                            type="number"
                                            defaultValue={0}
                                            min={0}
                                            name="mWeight"
                                            step="0.1"
                                            onChange={onChangeHandler}
                                        />
                                    </div>
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label
                                        class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                        for="location"
                                    >
                                        Paper Weight (kg)
                                    </label>
                                    <div>
                                        <input
                                            class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 mb-3 rounded"
                                            type="number"
                                            defaultValue={0}
                                            min={0}
                                            name="paperWeight"
                                            step="0.1"
                                            onChange={onChangeHandler}
                                        />
                                    </div>
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label
                                        class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                        for="department"
                                    >
                                        Glass Weight (KG)
                                    </label>
                                    <div>
                                        <input
                                            class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 mb-3 rounded"
                                            type="number"
                                            defaultValue={0}
                                            min={0}
                                            name="gWeight"
                                            step="0.1"
                                            onChange={onChangeHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                        for=""
                                    >
                                        Location
                                    </label>
                                    <select
                                        class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 mb-3 rounded"
                                        name="location"
                                        onChange={onChangeHandler}
                                    >
                                        <option selected disabled>
                                            Select Location
                                        </option>
                                        <option value="gg">Jalan GG</option>
                                        <option value="hh">Jalan HH</option>
                                        <option value="ii">Jalan II</option>
                                    </select>
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label
                                        class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                        for="title"
                                    >
                                        Date
                                    </label>
                                    <input
                                        class="w-full bg-gray-200 text-black border border-gray-200 rounded py-2 px-4 mb-3"
                                        type="date"
                                        name="date"
                                        onChange={onChangeHandler}
                                    />
                                </div>
                            </div>
                            <div class="md:w-full ">
                                <label
                                    class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                    for="application-link"
                                >
                                    Image (Proof of Recycling)
                                </label>
                                <input
                                    class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-5 mb-5"
                                    type="file"
                                    name="image"
                                    onChange={imageHandler}
                                />
                            </div>
                            <div class="md:w-1/2 ">
                                <div>
                                    <input
                                        class=""
                                        name="points"
                                        type="hidden"
                                        value={0}
                                        id="added-points"
                                        onChange={onChangeHandler}
                                    ></input>
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mt-5">
                                <div class="md:w-full px-3">
                                    <button class="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 rounded-full">
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </body>
            {/* <div>
                    <label htmlFor="">Locations</label>
                    <select name="location" onChange={onChangeHandler}>
                        <option value="gg">Jalan GG</option>
                        <option value="hh">Jalan HH</option>
                        <option value="ii">Jalan II</option>
                    </select>
                </div>
                <label htmlFor="">Date</label>
                <input type="date" name="date" onChange={onChangeHandler} />
                <div>
                    <label htmlFor="">Materials</label>
                    <br />
                    <label htmlFor="">Plastic</label>
                    <input
                        type="number"
                        defaultValue={0}
                        min={0}
                        name="plasticWeight"
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="">Metals</label>
                    <input
                        defaultValue={0}
                        min={0}
                        type="number"
                        name="mWeight"
                        onChange={onChangeHandler}
                    />
                    {""}kg
                    <label htmlFor="">Paper</label>
                    <input
                        defaultValue={0}
                        min={0}
                        type="number"
                        name="paperWeight"
                        onChange={onChangeHandler}
                    />
                    {""}kg
                    <label htmlFor="">Glass</label>
                    <input
                        defaultValue={0}
                        min={0}
                        type="number"
                        name="gWeight"
                        onChange={onChangeHandler}
                    />
                    {""}kg
                </div>
                <div>
                    <label htmlFor="">Image</label>
                    <input type="file" name="image" onChange={imageHandler} />
                </div>
                <button>Add</button>
            </form> */}
        </>
    );
};
