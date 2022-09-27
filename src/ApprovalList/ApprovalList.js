import React from "react";
import { useQuery } from "react-query";
import { getAllDeposits } from "../api/deposits";
import Approval from "./Approval";

export const ApprovalList = () => {
    const { data, isLoading } = useQuery("deposits", getAllDeposits);
    if (isLoading) <h2>Loading ...</h2>;

    return (
        <>
            {" "}
            <div class="container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div className="flex justify-between">
                        <h2 class="text-2xl font-semibold leading-tight">
                            History
                        </h2>
                        <div>1kg Plastic = 10 Points</div>
                        <div>1kg Metals = 30 Points</div>
                        <div>1kg Paper = 10 Points</div>
                        <div>1kg Glass = 20 Points</div>
                    </div>
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Location
                                        </th>
                                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Plastic Weight
                                        </th>
                                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Metal Weight
                                        </th>
                                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Paper Weight
                                        </th>
                                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Glass Weight
                                        </th>
                                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Image
                                        </th>
                                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Points Added
                                        </th>
                                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                {!data ? (
                                    <h2 className="py-2 mx-3">
                                        No recycles found
                                    </h2>
                                ) : (
                                    data.map((deposit) => (
                                        <Approval
                                            key={deposit._id}
                                            data={deposit}
                                        />
                                    ))
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
