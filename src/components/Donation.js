import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import volunteer from "../images/volunteer.jpg";

const Donation = () => {
    const [checkout, setCheckout] = useState(false);
    const [checkout2, setCheckout2] = useState(false);
    const [checkout3, setCheckout3] = useState(false);
    const [checkout4, setCheckout4] = useState(false);
    const [checkout5, setCheckout5] = useState(false);
    const [checkout6, setCheckout6] = useState(false);
    const [price, setPrice] = useState();
    const onChangeHandler = (e) => {
        setPrice(e.target.value);
    };
    console.log(price);
    return (
        <div className="">
            <h2 className="flex justify-center font-bold py-2">
                Donation Page
            </h2>
            <div className="">
                <div>
                    {/* <img className="" src={volunteer} alt=""></img> */}
                    <h2 className="py-2 items-center">
                        <span className="font-bold">
                            We are proudly non-profit,
                        </span>{" "}
                        non-corporate and non-compromised. Thousands of people
                        like you help us stand up for a healthy internet for
                        all. We rely on donations to carry out our mission to
                        keep the Web open and free.{" "}
                        <span className="font-bold">Will you give today?</span>
                    </h2>
                    <h2 className="flex justify-center">Donate Now</h2>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div>
                        {checkout ? (
                            <PayPalScriptProvider
                                options={{
                                    "client-id":
                                        "AeK31Ee0F3KCERykEHZXhHnmiXglnkygcvOii3bqwSxJpAffA5FJe6rP-O75b99n6p4u5eis1aaqO9Cs",
                                }}
                            >
                                <PayPalButtons
                                    style={{ layout: "vertical" }}
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        // currency_code: "MYR",
                                                        value: "1.00",
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order
                                            .capture()
                                            .then(function (details) {
                                                // This function shows a transaction success message to your buyer.
                                                alert(
                                                    "Transaction completed by " +
                                                        details.payer.name
                                                            .given_name
                                                );
                                            });
                                    }}
                                />
                            </PayPalScriptProvider>
                        ) : (
                            <button
                                className="hover:bg-blue-500 w-64 h-16 mx-3 my-3 shadow-lg rounded"
                                data-modal-toggle="popup-modal"
                                onClick={() => {
                                    setCheckout(true);
                                }}
                            >
                                $1
                            </button>
                        )}
                    </div>
                    <div>
                        {checkout2 ? (
                            <PayPalScriptProvider
                                options={{
                                    "client-id":
                                        "AeK31Ee0F3KCERykEHZXhHnmiXglnkygcvOii3bqwSxJpAffA5FJe6rP-O75b99n6p4u5eis1aaqO9Cs",
                                }}
                            >
                                <PayPalButtons
                                    style={{ layout: "vertical" }}
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        // currency_code: "MYR",
                                                        value: "5.00",
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order
                                            .capture()
                                            .then(function (details) {
                                                // This function shows a transaction success message to your buyer.
                                                alert(
                                                    "Transaction completed by " +
                                                        details.payer.name
                                                            .given_name
                                                );
                                            });
                                    }}
                                />
                            </PayPalScriptProvider>
                        ) : (
                            <button
                                className="hover:bg-blue-500 w-64 h-16 py-3 mx-3 my-3 shadow-lg rounded"
                                onClick={() => {
                                    setCheckout2(true);
                                }}
                            >
                                $5
                            </button>
                        )}
                    </div>
                    <div>
                        {checkout3 ? (
                            <PayPalScriptProvider
                                options={{
                                    "client-id":
                                        "AeK31Ee0F3KCERykEHZXhHnmiXglnkygcvOii3bqwSxJpAffA5FJe6rP-O75b99n6p4u5eis1aaqO9Cs",
                                }}
                            >
                                <PayPalButtons
                                    style={{ layout: "vertical", size: "2px" }}
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        // currency_code: "MYR",
                                                        value: "10.00",
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order
                                            .capture()
                                            .then(function (details) {
                                                // This function shows a transaction success message to your buyer.
                                                alert(
                                                    "Transaction completed by " +
                                                        details.payer.name
                                                            .given_name
                                                );
                                            });
                                    }}
                                />
                            </PayPalScriptProvider>
                        ) : (
                            <button
                                className="hover:bg-blue-500 w-64 h-16 py-3 mx-3 my-3 shadow-lg rounded"
                                onClick={() => {
                                    setCheckout3(true);
                                }}
                            >
                                $10
                            </button>
                        )}
                    </div>
                    <div>
                        {checkout4 ? (
                            <PayPalScriptProvider
                                options={{
                                    "client-id":
                                        "AeK31Ee0F3KCERykEHZXhHnmiXglnkygcvOii3bqwSxJpAffA5FJe6rP-O75b99n6p4u5eis1aaqO9Cs",
                                }}
                            >
                                <PayPalButtons
                                    style={{ layout: "vertical", size: "2px" }}
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        // currency_code: "MYR",
                                                        value: "2.00",
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order
                                            .capture()
                                            .then(function (details) {
                                                // This function shows a transaction success message to your buyer.
                                                alert(
                                                    "Transaction completed by " +
                                                        details.payer.name
                                                            .given_name
                                                );
                                            });
                                    }}
                                />
                            </PayPalScriptProvider>
                        ) : (
                            <button
                                className="hover:bg-blue-500 w-64 h-16 py-3 mx-3 my-3 shadow-lg rounded"
                                onClick={() => {
                                    setCheckout4(true);
                                }}
                            >
                                $20
                            </button>
                        )}
                    </div>
                    <div>
                        {checkout5 ? (
                            <PayPalScriptProvider
                                options={{
                                    "client-id":
                                        "AeK31Ee0F3KCERykEHZXhHnmiXglnkygcvOii3bqwSxJpAffA5FJe6rP-O75b99n6p4u5eis1aaqO9Cs",
                                }}
                            >
                                <PayPalButtons
                                    style={{ layout: "vertical", size: "2px" }}
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        // currency_code: "MYR",
                                                        value: "2.00",
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order
                                            .capture()
                                            .then(function (details) {
                                                // This function shows a transaction success message to your buyer.
                                                alert(
                                                    "Transaction completed by " +
                                                        details.payer.name
                                                            .given_name
                                                );
                                            });
                                    }}
                                />
                            </PayPalScriptProvider>
                        ) : (
                            <button
                                className="hover:bg-blue-500 w-64 h-16 py-3 mx-3 my-3 shadow-lg rounded"
                                onClick={() => {
                                    setCheckout5(true);
                                }}
                            >
                                $50
                            </button>
                        )}
                    </div>
                    <div>
                        {checkout6 ? (
                            <PayPalScriptProvider
                                options={{
                                    "client-id":
                                        "AeK31Ee0F3KCERykEHZXhHnmiXglnkygcvOii3bqwSxJpAffA5FJe6rP-O75b99n6p4u5eis1aaqO9Cs",
                                }}
                            >
                                <PayPalButtons
                                    style={{ layout: "vertical", size: "2px" }}
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        // currency_code: "MYR",
                                                        value: `${price}`,
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order
                                            .capture()
                                            .then(function (details) {
                                                // This function shows a transaction success message to your buyer.
                                                alert(
                                                    "Transaction completed by " +
                                                        details.payer.name
                                                            .given_name
                                                );
                                            });
                                    }}
                                />
                            </PayPalScriptProvider>
                        ) : (
                            <div>
                                <div className="flex border border-gray-700 rounded-full mt-2 mx-2">
                                    <span className="mt-2 ml-3">$</span>
                                    <input
                                        class="w-full rounded-full p-2 focus:outline-none"
                                        type="number"
                                        onChange={onChangeHandler}
                                        min={2}
                                        placeholder="Custom Amount"
                                    />
                                    <span class="flex items-center justify-center text-gray-700">
                                        <button
                                            className="custom-donate hover:bg-blue-700 w-32 h-10 border border-blue-600 bg-blue-600 text-white rounded-full"
                                            onClick={() => {
                                                setCheckout6(true);
                                            }}
                                        >
                                            Pay
                                        </button>
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;
