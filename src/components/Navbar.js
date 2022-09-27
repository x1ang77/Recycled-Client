import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/reactlogo.png";
import { logout } from "../api/users";
import jwt_decode from "jwt-decode";

const Navbar = () => {
    let navigate = useNavigate();
    let user =
        localStorage.getItem("token") &&
        jwt_decode(localStorage.getItem("token"));
    return (
        <div className="">
            <body class="antialiased">
                <header class="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 shadow-md">
                    <div class="flex-1 flex justify-between items-center ">
                        <a href="#!">
                            <img className="w-48" src={Logo} alt="" />
                        </a>
                    </div>

                    <label
                        for="menu-toggle"
                        class="cursor-pointer lg:hidden block"
                    >
                        <svg
                            class="fill-current text-gray-900"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                        >
                            <title>menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </label>
                    {/* <!-- id same with label --> */}
                    <input class="hidden" type="checkbox" id="menu-toggle" />

                    {/* <!-- nav, toggle menu --> */}
                    <div
                        class="hidden lg:flex lg:items-center lg:w-auto w-full"
                        id="menu"
                    >
                        <nav>
                            <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                                <li>
                                    <Link
                                        to="/"
                                        class="lg:p-4 py-3 px-0 block text-green-600 hover:text-green-600"
                                    >
                                        Home
                                    </Link>
                                </li>
                                {localStorage.getItem("token") ? (
                                    <>
                                        <li>
                                            <a
                                                class="lg:p-4 py-3 px-0 block hover:underline"
                                                href="/donation"
                                            >
                                                Donation
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                class="lg:p-4 py-3 px-0 block hover:underline "
                                                href="/location"
                                            >
                                                Locations
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                class="lg:p-4 py-3 px-0 block hover:underline lg:mb-0 mb-2"
                                                href="/approval"
                                            >
                                                History
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                class="lg:p-4 py-3 px-0 block hover:underline lg:mb-0 mb-2"
                                                href="/reward"
                                            >
                                                Rewards
                                            </a>
                                        </li>

                                        {user.data.isAdmin && (
                                            <>
                                                <li>
                                                    <Link
                                                        to="/add-reward"
                                                        class="lg:p-4 py-3 px-0 block "
                                                    >
                                                        Add Rewards
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/deposit"
                                                        class="lg:p-2 py-3 px-0 block "
                                                    >
                                                        Deposit
                                                    </Link>
                                                </li>
                                            </>
                                        )}
                                        <button
                                            className="lg:p-2 py-1 px-0 block"
                                            onClick={() => {
                                                logout();
                                                navigate("/");
                                                localStorage.removeItem(
                                                    "username"
                                                );
                                            }}
                                        >
                                            {" "}
                                            Logout
                                        </button>
                                        <div className="text-green-700 lg:p-2 py-3 px-0 block">
                                            {localStorage.getItem("username")}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <a
                                                class="lg:p-4 py-3 px-0 block hover:text-indigo-400 lg:mb-0 mb-2 "
                                                href="/register"
                                            >
                                                Sign up
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                class="lg:p-4 py-3 px-0 block hover:text-indigo-400 lg:mb-0 mb-2"
                                                href="/login"
                                            >
                                                Sign in
                                            </a>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </nav>
                    </div>
                </header>
            </body>
        </div>
    );
};

export default Navbar;
