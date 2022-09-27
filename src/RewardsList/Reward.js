import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { deleteReward, redeemRewards } from "../api/rewards";
import { EditReward } from "../EditReward/EditReward";
import emailjs from "@emailjs/browser";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { SiGumtree } from "react-icons/si";
import { toast } from "react-toastify";
import { getUsersbyId } from "../api/users";

const Reward = ({ data: { title, titletwo, points, image, _id }, value }) => {
    const [myValue, setMyValue] = useState(0);
    const [editing, setEditing] = useState(false);
    const user =
        localStorage.getItem("token") &&
        jwt_decode(localStorage.getItem("token"));

    const userData = useQuery("user", () => getUsersbyId(user.data._id));
    // let newPoints = user.data.points - myValue;
    // console.log(myValue);

    function sendEmail(e) {
        console.log("hwjhdajhsdjkahsdasd");
        emailjs
            .sendForm(
                "service_mh79wbk",
                "template_mfzjsk8",
                e.target,
                "HDVHJ4wCnIIAkwwKJ"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }

    useEffect(() => {
        setMyValue(value);
    }, []);

    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [showModal, setShowModal] = useState(false);
    const mutation = useMutation((_id) => deleteReward(_id), {
        onSuccess: () => {
            queryClient.invalidateQueries(["rewards"]);
            navigate("/reward");
        },
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        redeemRewards(user.data._id, myValue);
        sendEmail(e);
        queryClient.invalidateQueries(["user"]);
        toast.success("Redeemed reward successfully", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const tempData = { title, titletwo, points, image, _id };

    return (
        <>
            <div class="p-2 flex flex-wrap items-center justify-center">
                <div className="flex flex-col">
                    <div class="flex-shrink-0 mx-6 mt-5 relative overflow-hidden bg-teal-500 rounded-t-xl max-w-xs shadow-lg">
                        <div className="flex justify-end p-2 text-white">
                            {localStorage.getItem("token") &&
                            user.data.isAdmin ? (
                                <button
                                    className="flex justify-end text-xl"
                                    onClick={() => setEditing(!editing)}
                                >
                                    <FaEdit />
                                </button>
                            ) : (
                                <></>
                            )}
                            {localStorage.getItem("token") &&
                            user.data.isAdmin ? (
                                <button
                                    className="flex justify-end text-xl"
                                    onClick={() => mutation.mutate(_id)}
                                >
                                    <FaTrashAlt />
                                </button>
                            ) : (
                                <></>
                            )}
                        </div>
                        <svg
                            class="absolute bottom-0 left-0 mb-8"
                            viewBox="0 0 375 283"
                            fill="none"
                            // style="transform: scale(1.5); opacity: 0.1;"
                        >
                            <rect
                                x="159.52"
                                y="175"
                                width="152"
                                height="152"
                                rx="8"
                                transform="rotate(-45 159.52 175)"
                                fill="white"
                            />
                            <rect
                                y="107.48"
                                width="152"
                                height="152"
                                rx="8"
                                transform="rotate(-45 0 107.48)"
                                fill="white"
                            />
                        </svg>
                        <div class="relative pt-10 px-10 flex items-center justify-center">
                            <div
                                class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                // style={{"background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"}}
                            ></div>
                            <img
                                class="relative w-40 h-36"
                                src={process.env.REACT_APP_API_SERVER + image}
                                alt=""
                            />
                            <b>
                                <h2 className="absolute bottom-7 left-20 text-green-700"></h2>
                            </b>
                        </div>

                        <div class="relative text-white px-6 pb-6 mt-6">
                            <span class="block opacity-75 -mb-1">{title}</span>
                            <div class="flex justify-between">
                                <span class="block font-semibold text-xl">
                                    {titletwo}
                                </span>
                                <span class="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                                    <button>{value} points</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    {editing == true ? (
                        <EditReward temp={tempData} edit={setEditing} />
                    ) : (
                        <></>
                    )}

                    {!userData.isLoading && userData.data.points > myValue ? (
                        <>
                            <button
                                className="bg-gray-100 hover:bg-gray-200 rounded-b-xl py-2 mx-6 text-teal-500 font-bold"
                                onClick={() => setShowModal(true)}
                            >
                                Redeem Now
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                disabled
                                className="bg-gray-100  rounded-b-xl py-2 mx-6 text-red-500 font-bold"
                            >
                                <p className="">Invalid Points</p>
                            </button>
                        </>
                    )}
                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                data-toggle="modal"
                            >
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}

                                    <div className="border-0 rounded-lg shadow-lg relative bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="mx-auto items-start justify-center pt-5 border-b border-solid border-slate-200 rounded-t">
                                            <div className="flex flex-col">
                                                <h3 className="text-3xl font-monospace justify-center m-auto py-2">
                                                    Redeem Reward
                                                </h3>
                                                <h2 className="flex justify-center text-sm bg-green-200 w-fit m-auto rounded mb-2">
                                                    {value} Points
                                                    <span className="mt-1 mx-1">
                                                        <SiGumtree />
                                                    </span>
                                                </h2>
                                            </div>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative pt-2 mx-auto">
                                            <p className="my-4 leading-relaxed px-4">
                                                <form
                                                    className="flex flex-col"
                                                    onSubmit={onSubmitHandler}
                                                >
                                                    <h2 className="text-sm text-red-600">
                                                        * Please fill in the
                                                        details below so we can
                                                        mail the rewards to you
                                                        and let you know when it{" "}
                                                        arrives
                                                    </h2>
                                                    <div className="my-2">
                                                        <label className="italic">
                                                            Address:
                                                        </label>
                                                        <textarea
                                                            type="text"
                                                            name="address"
                                                            rows="4"
                                                            placeholder="eg: 24 Caaron GG Street, Penang"
                                                            className="border-gray-700 border-2 rounded px-3 w-full text-black"
                                                            required
                                                        ></textarea>
                                                    </div>
                                                    <div className="mb-2">
                                                        <label className="italic text-gray-700">
                                                            Email:
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder="caarongg@gmail.com"
                                                            className="border-gray-700 border-2 rounded px-3 w-full"
                                                            required
                                                        ></input>
                                                        <input
                                                            type="hidden"
                                                            name="username"
                                                            value={
                                                                user.data
                                                                    .username
                                                            }
                                                        />
                                                    </div>
                                                    <input
                                                        hidden
                                                        name="points"
                                                        value={value}
                                                    />
                                                    <div className=" justify-center p-2 border-t border-solid border-slate-200 rounded-b">
                                                        <div class="text-center md:text-right md:flex md:justify-end">
                                                            <button
                                                                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm 
                                                    md:mt-0 md:order-1"
                                                                type="button"
                                                                onClick={() =>
                                                                    setShowModal(
                                                                        false
                                                                    )
                                                                }
                                                            >
                                                                Close
                                                            </button>

                                                            <button
                                                                value={value}
                                                                className="block w-full md:inline-block md:w-auto px-2 py-3 md:py-2 bg-blue-200 text-blue-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2 "
                                                                data-bs-toggle="modal"
                                                            >
                                                                Redeem
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* <img
                                                        className="h-20"
                                                        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                                                        alt=""
                                                    /> */}
                                                </form>
                                            </p>
                                        </div>
                                        {/*footer*/}
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default Reward;
