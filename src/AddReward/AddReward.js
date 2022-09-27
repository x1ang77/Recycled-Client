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
        <form
            encType="multipart/form-data"
            method="POST"
            onSubmit={onSubmitHandler}
        >
            {JSON.stringify(reward)}
            <div>
                <label>First Title</label>
                <input type="text" name="title" onChange={onChangeHandler} />
            </div>

            <div>
                <label>Second Title</label>
                <input type="text" name="titletwo" onChange={onChangeHandler} />
            </div>

            <div>
                <label>Points</label>
                <input type="number" name="points" onChange={onChangeHandler} />
            </div>

            <div>
                <label>Image</label>
                <input type="file" name="image" onChange={imageHandler} />
            </div>

            <button>Add</button>
        </form>
    );
};
