export const getAllDeposits = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/deposits`, {
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
    });
    const data = await res.json();
    console.log(data.length);
    if (!res.ok) {
        throw new Error("Something went wrong.");
    }
    return data;
};

export const addDeposits = async (deposit, image, points) => {
    const formData = new FormData();

    formData.append("username", deposit.username);
    formData.append("location", deposit.location);
    formData.append("date", deposit.date);
    formData.append("plasticWeight", deposit.plasticWeight);
    formData.append("mWeight", deposit.mWeight);
    formData.append("paperWeight", deposit.paperWeight);
    formData.append("gWeight", deposit.gWeight);
    formData.append("points", points);
    formData.append("image", image);

    console.log(formData);

    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/deposits`, {
        method: "POST",
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
        body: formData,
    });
    const data = await res.json();
    return data;
};

export const deleteDeposit = async (id) => {
    let res = await fetch(
        `${process.env.REACT_APP_API_SERVER}/deposits/${id}`,
        {
            method: "DELETE",
            headers: {
                "x-auth-token": localStorage.getItem("token"),
            },
        }
    );
    let data = await res.json();
    return data;
};
