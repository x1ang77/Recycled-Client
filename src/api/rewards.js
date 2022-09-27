export const getAllRewards = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/rewards`, {
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
    });
    const data = await res.json();
    // console.log(data.length);
    if (!res.ok) {
        throw new Error("Something went wrong.");
    }
    return data;
};

export const redeemRewards = async (id, points) => {
    const res = await fetch(
        `${process.env.REACT_APP_API_SERVER}/rewards/` + id,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                points: points,
            }),
        }
    );
    const data = await res.json();
    return data;
};

export const addReward = async (reward, image) => {
    const formData = new FormData();

    formData.append("title", reward.title);
    formData.append("titletwo", reward.titletwo);
    formData.append("points", reward.points);
    formData.append("image", image);

    console.log(formData);

    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/rewards`, {
        method: "POST",
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
        body: formData,
    });
    const data = await res.json();
    return data;
};

export const updateReward = async (reward, image, id) => {
    const formData = new FormData();
    formData.append("title", reward.title);
    formData.append("titletwo", reward.titletwo);
    formData.append("points", reward.points);
    formData.append("image", image);

    const res = await fetch(
        `${process.env.REACT_APP_API_SERVER}/rewards/${id}`,
        {
            method: "PUT",
            headers: {
                "x-auth-token": localStorage.getItem("token"),
            },
            body: formData,
        }
    );
    const data = await res.json();
    return data;
};

export const deleteReward = async (id) => {
    let res = await fetch(`${process.env.REACT_APP_API_SERVER}/rewards/${id}`, {
        method: "DELETE",
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
    });
    let data = await res.json();
    return data;
};

// export const deleteDeposit = async (id) => {
//     let res = await fetch(
//         `${process.env.REACT_APP_API_SERVER}/deposits/${id}`,
//         {
//             method: "DELETE",
//             headers: {
//                 "x-auth-token": localStorage.getItem("token"),
//             },
//         }
//     );
//     let data = await res.json();
//     return data;
// };
