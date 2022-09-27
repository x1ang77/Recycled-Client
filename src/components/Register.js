import { useState } from "react";
import { register } from "../api/users";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import eyeOff from "../images/eye-off.svg";
import eye from "../images/eye.svg";
import { toast } from "react-toastify";

let usernameValidator = "";
let passwordValidator = "";
let validRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{3})+$/;
const Register = () => {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [icon, setIcon] = useState(eye);
    const [inputType, setInputType] = useState("password");

    const togglePassword = () => {
        if (inputType === "password") {
            setInputType("text");
            setIcon(eyeOff);
        } else {
            setInputType("password");
            setIcon(eye);
        }
    };

    const [uvalidator, setuValidator] = useState(false);
    const [pvalidator, setpValidator] = useState(false);

    const mutation = useMutation((user) => register(user), {
        onSuccess: () => {
            navigate("/login");
            toast.success("Registered successfully", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        },
        onError: () => async () => {
            let error = await mutation.error;
            toast.error(error, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        },
    });

    const onChangeHandler = (e) => {
        if (user.username.length < 7) {
            setuValidator(true);
            usernameValidator = "Username must be 8 characters";
        } else {
            setuValidator(false);
        }
        if (user.username.length > 8) {
            if (user.password.length < 8 && user.email.match(validRegex)) {
                setpValidator(true);
                passwordValidator = "Password must be 8 characters";
            } else {
                setpValidator(false);
            }
        }
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        mutation.mutate(user);
    };
    return (
        <form encType="multipart/form-data" onSubmit={onSubmitHandler}>
            <div>
                <div class="min-h-full relative bg-purple-100 backdrop-blur flex justify-center items-center bg-texture bg-cover py-28 sm:py-0">
                    <div class="p-4 sm:p-8 flex-1 mt-10">
                        <div class="max-w-[420px] min-w-[320px] bg-white rounded-b-3xl mx-auto">
                            <div class="relative h-auto">
                                <svg
                                    class="absolute -top-20 mt-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1440 320"
                                >
                                    <path
                                        fill="#fff"
                                        fill-opacity="1"
                                        d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                    ></path>
                                </svg>
                                <div class="absolute bottom-5 right-2">
                                    <a
                                        href="#!"
                                        class="block transition hover:rotate-180"
                                    >
                                        {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-8 w-8 stroke-current text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg> */}
                                    </a>
                                </div>
                            </div>
                            <div class="px-10 pt-4 pb-8 rounded-3xl shadow-xl">
                                <div class="mx-auto text-center">
                                    <h1 class="text-4xl text-gray-800">
                                        Register
                                    </h1>
                                    <p class="mt-4">
                                        How do you want to sign up?
                                    </p>
                                </div>
                                <div class="flex items-center justify-around mt-6">
                                    <div class="w-14 h-14 text-center rounded-full bg-blue-500 text-white saturate-200 transition-all hover:bg-blue-600">
                                        <a href="#!" class="block mt-4">
                                            <i class="fab fa-facebook-f fa-lg "></i>
                                        </a>
                                    </div>
                                    <div class="w-14 h-14 text-center rounded-full bg-red-500 text-white saturate-100 transition-all hover:bg-red-600">
                                        <a href="#!" class="block mt-4">
                                            <i class="fab fa-google fa-lg"></i>
                                        </a>
                                    </div>
                                    <div class="w-14 h-14 text-center rounded-full bg-indigo-500 text-white saturate-100 transition-all hover:bg-indigo-600">
                                        <a href="#!" class="block mt-4">
                                            <i class="fa-brands fa-twitter"></i>
                                        </a>
                                    </div>
                                    <div class="w-14 h-14 text-center rounded-full bg-green-500 text-white saturate-100 transition-all hover:bg-green-600">
                                        <a href="#!" class="block mt-4">
                                            <i class="fab fa-line fa-lg"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="flex items-center my-6">
                                    <hr class="flex-1" />
                                    <span class="px-4 text-sm text-gray-400">
                                        Or continue with
                                    </span>
                                    <hr class="flex-1" />
                                </div>
                                <form action="" method="POST">
                                    <div class="mt-10 relative">
                                        <input
                                            required
                                            id="username"
                                            type="text"
                                            name="username"
                                            onChange={onChangeHandler}
                                            class="peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent focus:ring-0 "
                                            placeholder="Username"
                                        />
                                        <label
                                            for="username"
                                            class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0.5 peer-focus:-top-5 peer-focus:text-black peer-focus:text-sm"
                                        >
                                            Username
                                        </label>
                                        {uvalidator ? (
                                            <span className="text-rose-600 bold">
                                                {usernameValidator}
                                            </span>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                    <div class="relative mt-10">
                                        <input
                                            id="email"
                                            name="email"
                                            type="text"
                                            onChange={onChangeHandler}
                                            class="peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-purple-600"
                                            placeholder={" "}
                                            required
                                        />
                                        <label
                                            for="email"
                                            class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0.5 peer-focus:-top-5 peer-focus:text-purple-600 peer-focus:text-sm"
                                        >
                                            Email
                                        </label>
                                    </div>
                                    <div class="mt-10 relative">
                                        <input
                                            id="password"
                                            type={inputType}
                                            name="password"
                                            onChange={onChangeHandler}
                                            class="peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-purple-600"
                                            placeholder={" "}
                                            required
                                        />
                                        <label
                                            for="password"
                                            class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0.5 peer-focus:-top-5 peer-focus:text-purple-600 peer-focus:text-sm"
                                        >
                                            Password
                                        </label>
                                        <span className="password-icon absolute right-2 top-0">
                                            <img
                                                src={icon}
                                                alt="icon"
                                                onMouseDown={togglePassword}
                                            />
                                        </span>
                                        {pvalidator ? (
                                            <span className="text-rose-600">
                                                {passwordValidator}
                                            </span>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                    <div class="mt-5">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                required
                                                class="rounded border-gray-300 text-purple-600 focus:border-purple-300 focus:ring focus:ring-offset-0 focus:ring-purple-200/50"
                                            />
                                            <span class="ml-2 text-sm">
                                                Check here that you have agreed
                                                to{" "}
                                                <a
                                                    href="#!"
                                                    class="font-semibold text-blue-500 hover:underline"
                                                >
                                                    the terms.
                                                </a>
                                            </span>
                                        </label>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={onSubmitHandler}
                                        class="w-full mt-5 py-4 text-lg text-white font-semibold text-center rounded-full bg-green-600 transition-all hover:bg-green-700 focus:outline-none"
                                    >
                                        Sign up
                                    </button>
                                    <p class="text-center text-sm text-gray-400 mt-4">
                                        Have an account?{" "}
                                        <a
                                            href="/login"
                                            class="font-semibold text-blue-600 hover:underline"
                                        >
                                            Log in
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;
