import { Delete, Eye, Pencil } from "lucide-react";
import React from "react";
import EditTournamentResult from "./EditTournamentResult";
import Link from "next/link";


const TournamentResult = () => {
  return (
    <div className="flex justify-start items-start flex-col my-4 bg-gray-100 rounded-md py-2 md:py-3 px-1 md:px-2">
      {/* top  */}
      <div className="flex justify-between w-full border-b-2 pb-1 mb-2">
        <h3 className="md:text-3xl text-xl font-medium">Result</h3>
        <EditTournamentResult />
      </div>

      {/* table */}
      <table className="w-full border-collapse ">
        <thead className="bg-white">
          <tr>
            <th className="p-3 text-left">Rank</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Points</th>
            <th className="p-3 text-left">Win Prize</th>
            <th className="p-3 text-left">Others</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 text-base">1</td>
            <td className="p-3 text-base">Team1</td>
            <td className="p-3 text-base">100</td>
            <td className="p-3 text-base">10000</td>
            <td className="p-3 text-base">Other details</td>
            <td className="p-3 text-base flex flex-row gap-1 ">
              <Link
                href="/dashboard"
                className="w-full flex gap-2 border bg-white rounded-md shadow-lg py-1 px-2 cursor-pointer text-green-500"
              >
                <Eye width={12} /> View
              </Link>
              <button
                type="button"
                className="w-full flex gap-2 border bg-white rounded-md shadow-lg py-1 px-2 cursor-pointer text-green-500"
              >
                <Pencil width={12} /> Edit
              </button>
              <button
                type="button"
                className="w-full flex gap-2 border bg-white rounded-md shadow-lg py-1 px-2 cursor-pointer text-red-500"
              >
                <Delete width={12} /> Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TournamentResult;
