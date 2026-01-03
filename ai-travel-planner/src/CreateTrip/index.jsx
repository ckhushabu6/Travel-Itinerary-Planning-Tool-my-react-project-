import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { SelectBudgetOption, SelectTraveleList } from "@/constant/options";
import PlaceSearch from "@/Maps/Search";
import { toast } from "sonner";
import { generateTrip } from "@/service/generateTrip";

 

const initialTripData = {
  destination: null,
  days: "",
  budget: null,
  travelers: null,
};


function CreateTrip() {
  const [tripData, setTripData] = useState(initialTripData);

  const isFormValid =
    tripData.destination &&
    tripData.days &&
    tripData.budget &&
    tripData.travelers;

    const handelGenterateTrip = async() => {
  if(!isFormValid){
      toast.error("Please fill all details");
    return;
  }
   toast.info("Generating your trip...");

    try {
    const itinerary = await generateTrip(tripData);
    console.log("AI TRIP PLAN:", itinerary);
    toast.success("Trip generated successfully!");
  } catch (err) {
    console.error(err);
    toast.error("Failed to generate trip");
  }
};

  // Debug updated state correctly
  useEffect(() => {
    console.log("Updated Trip Data:", tripData);
  }, [tripData]);

 

  return (
    <div className="ml-32 mr-32">
      {/* HEADER */}
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
        <h2 className="text-3xl font-bold">🚀 Tell Us Your Dream Plan</h2>
        <p className="mt-3 text-gray-500 text-xl">
          Tell us your bucket-list spots, ideal travel duration, and the way you
          like to explore new places. No need to think too much—just drop your
          ideas, big or small.
        </p>
      </div>

      {/* DESTINATION */}
      <div className="mt-20">
        <h2 className="text-xl font-medium ml-32">
          What is your destination of choice?
        </h2>

        <PlaceSearch
          onSelectedPlace={(place) =>
            setTripData((prev) => ({
              ...prev,
              destination: place,
            }))
          }
        />
      </div>

      {/* DAYS */}
      <div className="mt-20">
        <h2 className="text-xl font-medium ml-32">
          How many days are you planning your trip?
        </h2>

        <div className="w-full max-w-sm mx-auto mt-10">
          <Input
            type="number"
            placeholder="EX. 3"
            value={tripData.days}
            onChange={(e) =>
              setTripData((prev) => ({
                ...prev,
                days: e.target.value,
              }))
            }
            className="w-full px-4 py-6 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* BUDGET */}
      <div className="mt-20">
        <h2 className="text-xl font-medium ml-32">What is your Budget?</h2>
        <h3 className="text-gray-500 ml-32 pb-4">
          The budget is exclusively allocated for activities and dining
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {SelectBudgetOption.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                setTripData((prev) => ({
                  ...prev,
                  budget: item,
                }))
              }
              className={`p-6 border rounded-xl cursor-pointer transition-all duration-300
                ${
                  tripData.budget?.title === item.title
                    ? "border-blue-600 bg-blue-50 shadow-xl scale-105"
                    : "hover:shadow-2xl hover:border-blue-500 hover:scale-105 bg-white"
                }`}
            >
              <h2 className="text-4xl mb-3">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TRAVELERS */}
      <div className="mt-20">
        <h2 className="text-xl font-medium ml-32">
          Who are you traveling with?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {SelectTraveleList.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                setTripData((prev) => ({
                  ...prev,
                  travelers: item,
                }))
              }
              className={`p-6 border rounded-xl cursor-pointer transition-all duration-300
                ${
                  tripData.travelers?.title === item.title
                    ? "border-blue-600 bg-blue-50 shadow-xl scale-105"
                    : "hover:shadow-2xl hover:border-blue-500 hover:scale-105 bg-white"
                }`}
            >
              <h2 className="text-4xl mb-3">{item.icone}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-16">
 

<button
disabled={!isFormValid}
  onClick={handelGenterateTrip}
  className={`px-12 py-4 text-lg font-semibold rounded-xl transition-all duration-300
    ${
      isFormValid
        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg active:scale-95"
        : "bg-gray-300 text-gray-600 cursor-not-allowed"
    }`}
>
  Generate Trip
</button>

</div>

    </div>
  );
}

export default CreateTrip;
