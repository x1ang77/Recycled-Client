import React from "react";
import Truck from "../images/truck.jpg";
const Main = () => {
    return (
        <>
            <div className="flex">
                <div className="bg-green-800 w-12/12 lg:w-6/12 h-80">
                    <div className="about flex-column text-white px-5">
                        <b>
                            <h6>INSIDE RECYCLED</h6>
                        </b>
                        <b>
                            <h1 className="text-5xl py-2">
                                Sustainable Technology
                            </h1>
                        </b>
                        <h6 className="py-2">
                            We're developing new technologies and reimagining
                            our processes to build a more sustainable tomorrow
                            for all of us.
                        </h6>
                    </div>
                </div>
                <img
                    className="hidden lg:block w-6/12 h-80"
                    src={Truck}
                    alt=""
                />
            </div>
            <div>
                <h2 className="bg-black py-2 text-white flex justify-center opacity-90">
                    Our Goal is to motivate more people to recycle their unused
                    trash so that we can create a better environment for the
                    world and our future
                </h2>
            </div>

            <section className="bg-gray-100">
                <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                    <h2 className="flex justify-center text font-bold underline">
                        Contact Us
                    </h2>
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:px-20 py-4">
                        <div className=" bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3 justify-between">
                            <div className="flex justify-between">
                                <h1>Send us a message or question!</h1>
                                <h1 className="text-red-500">
                                    *Please fill in all the fields
                                </h1>
                            </div>
                            <form
                                action="https://api.web3forms.com/submit"
                                className="space-y-4"
                                method="POST"
                            >
                                <input
                                    type="hidden"
                                    name="access_key"
                                    value="3d7d6e8d-be48-40b7-9dc7-b501b269385b"
                                />
                                <div>
                                    <label className="sr-only" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="w-full p-3 text-sm border-black border-2 rounded-lg"
                                        placeholder="Name"
                                        name="name"
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            className="sr-only"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            className="w-full p-3 text-sm border-black border-2 rounded-lg"
                                            placeholder="Email address"
                                            type="email"
                                            name="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className="sr-only"
                                            htmlFor="phone"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            className="w-full p-3 text-sm border-black border-2 rounded-lg"
                                            placeholder="Phone Number"
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                                {/* <div className="text-center grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    <div>
                                        <input
                                            className="sr-only"
                                            id="option1"
                                            type="radio"
                                            tabIndex="-1"
                                        />
                                        <label
                                            htmlFor="option1"
                                            className="block w-full p-3 border border-gray-200 rounded-lg"
                                            tabIndex="0"
                                        >
                                            <span className="text-sm font-medium">
                                                {" "}
                                                Option 1{" "}
                                            </span>
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            className="sr-only"
                                            id="option2"
                                            type="radio"
                                            tabIndex="-1"
                                        />
                                        <label
                                            htmlFor="option2"
                                            className="block w-full p-3 border border-gray-200 rounded-lg"
                                            tabIndex="0"
                                        >
                                            <span className="text-sm font-medium">
                                                {" "}
                                                Option 2{" "}
                                            </span>
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            className="sr-only"
                                            id="option3"
                                            type="radio"
                                            tabIndex="-1"
                                        />
                                        <label
                                            htmlFor="option3"
                                            className="block w-full p-3 border border-gray-200 rounded-lg"
                                            tabIndex="0"
                                        >
                                            <span className="text-sm font-medium">
                                                {" "}
                                                Option 3{" "}
                                            </span>
                                        </label>
                                    </div>
                                </div> */}

                                <div>
                                    <label
                                        className="sr-only"
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className="w-full p-3 text-sm border-black border-2 rounded-lg"
                                        placeholder="Message"
                                        rows="8"
                                        name="message"
                                        id="message"
                                    ></textarea>
                                </div>
                                <input
                                    type="hidden"
                                    name="redirect"
                                    value="https://web3forms.com/success"
                                />

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                                    >
                                        <span className="font-medium">
                                            {" "}
                                            Send Message{" "}
                                        </span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 ml-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                strokeLinejoin="round"
                                                stroke-width="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Main;
