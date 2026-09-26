import React from "react";
import WorkoutCard from "../../components/Shared/WorkoutCard";
const getSets = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
  const data = await res.json();
  return data;
};

const Workouts = async () => {
  const setsData = await getSets();

  return (
    <section className="container mx-auto my-10 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white  tracking-tight">
          THE LIBRARY
        </h1>
        <p className=" max-w-md text-sm leading-7 text-gray-400 sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {setsData.map((item, id) => {
          return <WorkoutCard key={id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Workouts;
