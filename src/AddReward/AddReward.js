import { useState } from "react";
import { addReward } from "../api/rewards";
import { useNavigate } from "react-router-dom";
import { Query, useMutation, useQuery, useQueryClient } from "react-query";
import { Oval } from "react-loader-spinner";

export const AddReward = () => {
    const navigate = useNavigate();
    const [reward, setReward] = useState({});
    const [image, setImage] = useState();

    const queryClient = useQueryClient();
    const mutation = useMutation(
        ({ reward, image }) => addReward(reward, image),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["rewards"]);
                navigate("/");
            },
        }
    );

    const onChangeHandler = (e) => {
        setReward({ ...reward, [e.target.name]: e.target.value });
    };

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        mutation.mutate({ reward, image });
    };

    return (
        <>
            <h2 className="flex justify-center py-5 underline">Add Rewards</h2>
            <form
                encType="multipart/form-data"
                method="POST"
                onSubmit={onSubmitHandler}
            >
                <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                for="grid-first-name"
                            >
                                Title
                            </label>
                            <input
                                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                id="grid-first-name"
                                type="text"
                                placeholder="Indoor"
                                name="title"
                                onChange={onChangeHandler}
                            />
                            <p class="text-red text-xs italic">
                                Please fill out all fields.
                            </p>
                        </div>
                        <div class="md:w-1/2 px-3">
                            <label
                                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                for="grid-last-name"
                            >
                                Second Title
                            </label>
                            <input
                                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="grid-last-name"
                                type="text"
                                placeholder="Plant"
                                name="titletwo"
                                onChange={onChangeHandler}
                            />
                        </div>
                    </div>

                    <div class="-mx-3 md:flex mb-2">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                for="grid-city"
                            >
                                Points
                            </label>
                            <input
                                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="grid-city"
                                type="number"
                                placeholder="777"
                                name="points"
                                onChange={onChangeHandler}
                            />
                        </div>

                        <div class="md:w-1/2 px-3">
                            <label
                                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                for="grid-zip"
                            >
                                Image
                            </label>
                            <input
                                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="grid-zip"
                                type="file"
                                name="image"
                                placeholder="90210"
                                onChange={imageHandler}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-600 mt-5 rounded w-72 py-1 text-white">
                            Add
                        </button>
                    </div>
                </div>
            </form>
            {/* <form
                encType="multipart/form-data"
                method="POST"
                onSubmit={onSubmitHandler}
            >
                <div>
                    <label>First Title</label>
                    <input
                        type="text"
                        name="title"
                        onChange={onChangeHandler}
                    />
                </div>

                <div>
                    <label>Second Title</label>
                    <input
                        type="text"
                        name="titletwo"
                        onChange={onChangeHandler}
                    />
                </div>

                <div>
                    <label>Points</label>
                    <input
                        type="number"
                        name="points"
                        onChange={onChangeHandler}
                    />
                </div>

                <div>
                    <label>Image</label>
                    <input type="file" name="image" onChange={imageHandler} />
                </div>

                <button>Add</button>
            </form> */}
        </>
    );
};
