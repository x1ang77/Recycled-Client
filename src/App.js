import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Donation from "./components/Donation";
import Location from "./components/Location";
import { RewardsList } from "./RewardsList";
import { AddDeposit } from "./AddDeposit";
import { AddReward } from "./AddReward";
import AdminRoutes from "./AdminRoutes";
import CustomerRoutes from "./CustomerRoutes";
import GuestRoutes from "./GuestRoutes";
import { ApprovalList } from "./ApprovalList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />

                <Route element={<AdminRoutes />}>
                    <Route path="/deposit" element={<AddDeposit />} />
                    <Route path="/add-reward" element={<AddReward />} />
                </Route>
                <Route element={<CustomerRoutes />}>
                    <Route path="/donation" element={<Donation />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/approval" element={<ApprovalList />} />
                </Route>
                <Route path="/reward" element={<RewardsList />} />

                <Route element={<GuestRoutes />}>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            ></ToastContainer>
            <Footer />
        </>
    );
}

export default App;
