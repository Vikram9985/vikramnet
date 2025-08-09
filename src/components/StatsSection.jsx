import React from "react";
import { FaAsterisk } from "react-icons/fa"; // Decorative icon

function StatsSection() {
  return (
    <div className="bg-black text-green-300 py-10 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 text-center border border-white p-3 rounded-md">

        {/* First Stat */}
        <div>
          <h2 className="text-5xl font-extrabold">90%</h2>
          <p className="mt-2 text-lg">Job Success<br />Score on Upwork</p>
        </div>

        {/* Icon */}
        <FaAsterisk className="text-2xl hidden md:block" />

        {/* Second Stat */}
        <div>
          <h2 className="text-5xl font-extrabold">&gt;25.000</h2>
          <p className="mt-2 text-lg">Duplicates on Figma<br />Community</p>
        </div>

        {/* Icon */}
        <FaAsterisk className="text-2xl hidden md:block" />

        {/* Third Stat */}
        <div>
          <h2 className="text-5xl font-extrabold">&gt;2K</h2>
          <p className="mt-2 text-lg">In Finished<br />Works</p>
        </div>

      </div>
    </div>
  );
}

export default StatsSection;
