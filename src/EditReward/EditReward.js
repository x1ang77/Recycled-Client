import { useState } from "react";
import { updateReward } from "../api/rewards";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { Oval } from "react-loader-spinner";

export const EditReward = ({ temp, edit }) => {
    const navigate = useNavigate();
    const [reward, setReward] = useState({
        title: temp.title,
        titletwo: temp.titletwo,
        points: temp.points,
    });
    const [image, setImage] = useState();

    const queryClient = useQueryClient();
    const mutation = useMutation(
        ({ reward, image, _id }) => updateReward(reward, image, temp._id),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["rewards"]);
                navigate("/reward");
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
        edit(true);
        e.preventDefault();
        mutation.mutate({ reward, image });
        edit(false);
        navigate("/reward");
    };
    return (
        <form
            encType="multipart/form-data"
            onSubmit={onSubmitHandler}
            className="ml-6"
        >
            <div className="py-2">
                <label className="mr-2">First Title:</label>
                <input
                    className="border-black border-2 rounded w-full"
                    type="text"
                    name="title"
                    value={reward.title}
                    onChange={onChangeHandler}
                />
            </div>

            <div className="py-2">
                <label className="mr-2">Second Title:</label>
                <input
                    className="border-black border-2 rounded w-full"
                    type="text"
                    name="titletwo"
                    value={reward.titletwo}
                    onChange={onChangeHandler}
                />
            </div>

            <div className="py-2">
                <label className="">Points:</label>
                <input
                    className="border-black border-2 rounded w-full"
                    type="number"
                    name="points"
                    value={`${reward.points}`}
                    onChange={onChangeHandler}
                />
            </div>

            <div className="py-2 flex">
                <label>Image</label>
                <input
                    type="file"
                    className="w-full"
                    name="image"
                    onChange={imageHandler}
                />
                <button className=" bg-blue-600 rounded-b text-white w-full">
                    Confirm Edit
                </button>
            </div>
        </form>
    );
};
