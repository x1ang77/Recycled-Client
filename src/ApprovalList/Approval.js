import { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { deleteDeposit } from "../api/deposits";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Approval = ({
    data: {
        location,
        date,
        plasticWeight,
        mWeight,
        paperWeight,
        gWeight,
        image,
        points,
        _id,
    },
}) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [isZoomed, setIsZoomed] = useState(false);
    const handleZoomChange = useCallback((shouldZoom) => {
        setIsZoomed(shouldZoom);
    }, []);
    const mutation = useMutation((_id) => deleteDeposit(_id), {
        onSuccess: () => {
            queryClient.invalidateQueries(["deposits"]);
            navigate("/approval");
        },
    });

    return (
        <>
            <tbody>
                <tr className="hover:bg-gray-700">
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{date}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-600 whitespace-no-wrap">
                            Jalan {location}
                        </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                            {plasticWeight} kg
                        </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-600 whitespace-no-wrap">
                            {mWeight} kg
                        </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-600 whitespace-no-wrap">
                            {paperWeight} kg
                        </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-600 whitespace-no-wrap">
                            {gWeight} kg
                        </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <ControlledZoom
                            isZoomed={isZoomed}
                            onZoomChange={handleZoomChange}
                        >
                            <img
                                className="h-10"
                                src={process.env.REACT_APP_API_SERVER + image}
                                alt=""
                            />
                        </ControlledZoom>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-green-600 font-bold whitespace-no-wrap">
                            <span>+ {""}</span>
                            {points}
                        </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm mt-1">
                        <button
                            className="bg-red-500 p-1 rounded-lg text-white"
                            onClick={() => mutation.mutate(_id)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default Approval;
