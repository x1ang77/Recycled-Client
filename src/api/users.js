import jwt_decode from "jwt-decode";

export const login = async (user) => {
    try {
        const res = await fetch(
            `${process.env.REACT_APP_API_SERVER}/users/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }
        );
        const data = await res.json();
        if (res.ok) localStorage.setItem("token", data);
        if (!res.ok) throw new Error(data.message);
    } catch (e) {
        throw e.message;
    }
};

export const register = async (user) => {
    try {
        const res = await fetch(
            `${process.env.REACT_APP_API_SERVER}/users/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }
        );
        const data = await res.text();
        if (res.ok) return data;
        else if (!res.ok) throw new Error(data.message);
    } catch (e) {
        throw e.message;
    }
};

export const logout = () => {
    localStorage.removeItem("token");
};

export const checkAuth = () => {
    let isAuth = localStorage.getItem("token") ? true : false;
    let user = localStorage.getItem("token")
        ? jwt_decode(localStorage.getItem("token"))
        : null;
    return { isAuth, user };
};

export const getUsersbyId = async (id) => {
    try {
        const res = await fetch(
            `${process.env.REACT_APP_API_SERVER}/users/${id}`,
            {
                method: "GET",
            }
        );
        const data = await res.json();
        if (res.ok) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (e) {
        throw e.message;
    }
};
