import Search from "@/Maps/Search";
import React from "react";
import { Input } from "@/components/ui/input";
import { SelectBudgetOption } from "@/constant/options";
import { SelectTraveleList } from "@/constant/options";
import PlaceSearch from "@/Maps/Search";

function CreateTrip() {
  return (
    <div className="ml-32 mr-32">
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5  mt-10">
        <h2 className="text-3xl font-bold">🚀 Tell Us Your Dream Plan</h2>

        <p className="mt-3 text-gray-500    text-xl  ">
          Tell us your bucket-list spots, ideal travel duration, and the way you
          like to explore new places. No need to think too much—just drop your
          ideas, big or small. We’ll turn it into a beautifully curated trip
          that feels smooth, flexible, and stress-free.
        </p>
      </div>

      <div className="mt-20">
        <h2 className="my-3 text-xl my-3 font-medium ml-32 ">
          What is your destination of choice ?{" "}
        </h2>
        <PlaceSearch />
      </div>

      <div className="mt-20">
        <h2 className="my-3 text-xl my-3 font-medium ml-32 ">
          How many days you are planning your trip ?
        </h2>
        <div className="w-full max-w-sm mx-auto mt-10 relative ml-30">
          <Input
            type="number"
            placeholder={"EX.3"}
            className="w-full px-4 py-6 border border-gray-300 rounded-lg shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-20">
          <h2 className="my-3 text-xl my-3 font-medium ml-32 ">
            What is your Budget?
          </h2>
          <h3 className="my-3 text-xl my-3 front-medium ml-32 pb-4 ">
            The budget is exclusive allocated for activity and dining process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {SelectBudgetOption.map((item, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl cursor-pointer
                 hover:shadow-2xl hover:border-blue-500
                 transition-all duration-300 ease-in-out
                 hover:scale-105 bg-white"
              >
                <h2 className="text-4xl mb-3">{item.icon}</h2>
                <h2 className="font-bold text-lg mb-1">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>

          <div>
            <h2 className="my-3 text-xl my-3 font-medium ml-32 pt-5 ">
              Who do you plan on traveling with you on your next advanture ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              {SelectTraveleList.map((item, index) => (
                <div
                  key={index}
                  className="p-6 border rounded-xl cursor-pointer
                 hover:shadow-2xl hover:border-blue-500
                 transition-all duration-300 ease-in-out
                 hover:scale-105 bg-white"
                >
                  <h2 className="text-4xl mb-3">{item.icone}</h2>
                  <h2 className="font-bold text-lg mb-1">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-14">
              <button
                className="px-10 py-4 text-lg font-semibold text-white
               bg-blue-600 rounded-xl shadow-lg
               hover:bg-blue-700 hover:shadow-2xl
               transition-all duration-300
               active:scale-95"
              >
                Generate Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
