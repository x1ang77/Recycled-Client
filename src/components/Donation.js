import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import volunteer from "../images/volunteer.jpg";
import starcharity from "../images/starcharity.png";
import gold from "../images/gold.png";

const Donation = () => {
    const [checkout, setCheckout] = useState(false);
    const [checkout2, setCheckout2] = useState(false);
    const [checkout3, setCheckout3] = useState(false);
    const [checkout4, setCheckout4] = useState(false);
    const [checkout5, setCheckout5] = useState(false);
    const [checkout6, setCheckout6] = useState(false);
    const [checkout7, setCheckout7] = useState(false);
    const [price, setPrice] = useState();
    const onChangeHandler = (e) => {
        setPrice(e.target.value);
    };
    return (
        <div className="flex-col justify-center pt-10">
            <div class="grid grid-cols-3 gap-4">
                <div class="col-span-3 lg:col-span-1 mx-6">
                    <img className="pt-5" src={volunteer} alt=""></img>
                    <h2 className="py-4 items-center text-lg ">
                        <span className="font-bold">
                            We are proudly non-profit,
                        </span>{" "}
                        non-corporate and non-compromised. Thousands of people
                        like you help us stand up for a healthy environment for
                        all. We rely on donations to carry out our mission to
                        keep our community clean.{" "}
                        <span className="font-bold">Will you give today?</span>
                    </h2>
                    <div className="flex justify-start gap-x-6">
                        <img className="h-20" src={starcharity} alt=""></img>
                        <img className="h-20" src={gold} alt=""></img>
                    </div>
                </div>
                <div class="col-span-3 lg:col-span-2 pt-4">
                    <h2 className="heading mx-3 flex justify-center lg:justify-start">
                        Donate Now
                    </h2>
                    <div className="">
                        <div className="flex flex-wrap justify-center lg:justify-start">
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
                                                                details.payer
                                                                    .name
                                                                    .given_name
                                                        );
                                                    });
                                            }}
                                        />
                                    </PayPalScriptProvider>
                                ) : (
                                    <button
                                        className="hover:bg-blue-500 w-64 h-16 mx-3 my-3 shadow-lg rounded  "
                                        duration-40300
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
                                                                details.payer
                                                                    .name
                                                                    .given_name
                                                        );
                                                    });
                                            }}
                                        />
                                    </PayPalScriptProvider>
                                ) : (
                                    <button
                                        className="hover:bg-blue-500 w-64 h-16 py-3 mx-3 my-3 shadow-lg rounded duration-300"
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
                                            style={{
                                                layout: "vertical",
                                                size: "2px",
                                            }}
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
                                                                details.payer
                                                                    .name
                                                                    .given_name
                                                        );
                                                    });
                                            }}
                                        />
                                    </PayPalScriptProvider>
                                ) : (
                                    <button
                                        className="hover:bg-blue-500 w-64 h-16 py-3 mx-3 my-3 shadow-lg rounded duration-300"
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
                                            style={{
                                                layout: "vertical",
                                                size: "2px",
                                            }}
                                            createOrder={(data, actions) => {
                                                return actions.order.create({
                                                    purchase_units: [
                                                        {
                                                            amount: {
                                                                // currency_code: "MYR",
                                                                value: "20.00",
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
                                                                details.payer
                                                                    .name
                                                                    .given_name
                                                        );
                                                    });
                                            }}
                                        />
                                    </PayPalScriptProvider>
                                ) : (
                                    <button
                                        className="hover:bg-blue-500 w-64 h-16 py-3 mx-3 my-3 shadow-lg rounded duration-300"
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
                                            style={{
                                                layout: "vertical",
                                                size: "2px",
                                            }}
                                            createOrder={(data, actions) => {
                                                return actions.order.create({
                                                    purchase_units: [
                                                        {
                                                            amount: {
                                                                // currency_code: "MYR",
                                                                value: "50.00",
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
                                                                details.payer
                                                                    .name
                                                                    .given_name
                                                        );
                                                    });
                                            }}
                                        />
                                    </PayPalScriptProvider>
                                ) : (
                                    <button
                                        className="hover:bg-blue-500 w-64 h-16 py-3 mx-3 my-3 shadow-lg rounded duration-300"
                                        onClick={() => {
                                            setCheckout5(true);
                                        }}
                                    >
                                        $50
                                    </button>
                                )}
                            </div>
                            <div>
                                {checkout7 ? (
                                    <PayPalScriptProvider
                                        options={{
                                            "client-id":
                                                "AeK31Ee0F3KCERykEHZXhHnmiXglnkygcvOii3bqwSxJpAffA5FJe6rP-O75b99n6p4u5eis1aaqO9Cs",
                                        }}
                                    >
                                        <PayPalButtons
                                            style={{
                                                layout: "vertical",
                                                size: "2px",
                                            }}
                                            createOrder={(data, actions) => {
                                                return actions.order.create({
                                                    purchase_units: [
                                                        {
                                                            amount: {
                                                                // currency_code: "MYR",
                                                                value: "100.00",
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
                                                                details.payer
                                                                    .name
                                                                    .given_name
                                                        );
                                                    });
                                            }}
                                        />
                                    </PayPalScriptProvider>
                                ) : (
                                    <button
                                        className="hover:bg-blue-500 w-64 h-16 py-3 mx-3 my-3 shadow-lg rounded duration-300"
                                        onClick={() => {
                                            setCheckout7(true);
                                        }}
                                    >
                                        $100
                                    </button>
                                )}
                            </div>
                            <div className="pt-5">
                                {checkout6 ? (
                                    <PayPalScriptProvider
                                        options={{
                                            "client-id":
                                                "AeK31Ee0F3KCERykEHZXhHnmiXglnkygcvOii3bqwSxJpAffA5FJe6rP-O75b99n6p4u5eis1aaqO9Cs",
                                        }}
                                    >
                                        <PayPalButtons
                                            style={{
                                                layout: "vertical",
                                                size: "2px",
                                            }}
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
                                                                details.payer
                                                                    .name
                                                                    .given_name
                                                        );
                                                    });
                                            }}
                                        />
                                    </PayPalScriptProvider>
                                ) : (
                                    <div className="flex">
                                        <div className="flex border border-gray-700 rounded-full mt-2 mx-2">
                                            <span className="mt-5 lg:mt-2 ml-3">
                                                $
                                            </span>
                                            <input
                                                class="w-full rounded-full p-2 focus:outline-none"
                                                type="number"
                                                onChange={onChangeHandler}
                                                min={2}
                                                placeholder="Custom Amount"
                                                required
                                            />
                                            <span class="flex items-center justify-center text-gray-700">
                                                <button
                                                    className="custom-donate hover:bg-blue-700 w-32 h-16 lg:h-10 border border-blue-600 bg-blue-600 text-white rounded-full"
                                                    onClick={() => {
                                                        setCheckout6(true);
                                                    }}
                                                >
                                                    Pay
                                                </button>
                                            </span>
                                        </div>
                                        <div className="flex justify-end">
                                            <h2 className="pt-5 text-red-600 text-xs">
                                                *Minimum amount to donate is $2
                                            </h2>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 flex-col gap-y-8 mx-2 lg:mr-10">
                        <h1 className="text-xs py-2">
                            Recycled is committed to your privacy; please read
                            our privacy policy here. Your payment details will
                            be processed by Braintree, a PayPal company (for
                            credit/debit cards) or PayPal, and a record of your
                            donation will be stored by Recycled.
                        </h1>
                        <h1 className="text-xs py-2">
                            Other ways to give:{" "}
                            <a className="text-blue-800 font-bold" href="#!">
                                SEPA/BACS | Check
                            </a>
                        </h1>

                        <h1 className="text-xs py-2">
                            Problems donating? Visit our FAQ for answers to most
                            common questions. Still have problems?{" "}
                            <a className="text-blue-700" href="#!">
                                Contact us.
                            </a>
                        </h1>

                        <h1 className="text-xs py-2">
                            Contributions go to the Recycled Foundation, a
                            501(c)(3) organization based in Penang, Malaysia, to
                            be used in its discretion for its charitable
                            purposes. They are tax-deductible in Malaysia to the
                            fullest extent permitted by law.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;
