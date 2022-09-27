import React, { useState } from "react";
import { useQuery } from "react-query";
import { ColorRing } from "react-loader-spinner";
import { getAllRewards } from "../api/rewards";
import Reward from "./Reward";
import jwt_decode from "jwt-decode";
import { SiGumtree } from "react-icons/si";
import { getUsersbyId } from "../api/users";

export const RewardsList = () => {
    const { data, error, isLoading, isError } = useQuery(
        "rewards",
        getAllRewards
    );

    const user =
        localStorage.getItem("token") &&
        jwt_decode(localStorage.getItem("token"));
    // const [myPoints, setMyPoints] = useState(user.data.points);

    const userData = useQuery("user", () => getUsersbyId(user.data._id));
    console.log(userData);

    if (isLoading) {
        return (
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
        );
    }
    if (isError) return <h2>Error: {error.message}</h2>;

    console.log(data);
    return (
        <>
            <h2 className="flex justify-center py-5">
                Redeem rewards from points you've gained from recycling here.
                <span class="ml-2 bg-green-200 pt-1 text-white text-xs font-semibold flex mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 justify-end">
                    {" "}
                    {!userData.isLoading && userData.data.points} Points
                    <span className="mt-0.5 mx-1">
                        <SiGumtree />
                    </span>
                </span>
            </h2>
            {/*  */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:px-24">
                {!data ? (
                    <h2>No rewards to show</h2>
                ) : (
                    data.map((reward) => (
                        <Reward
                            key={reward._id}
                            data={reward}
                            value={reward.points}
                        />
                    ))
                )}
            </div>
        </>
    );
};
