import React from "react";
import placeholderImg from "../assets/image2.jpg"; // Replace with your image

const portfolioData = [
  { title: "Chaintech Product", tags: ["UX Design", "Angular", "JavaScript"] },
  { title: "Chaintech Product", tags: ["UX Design", "Angular", "JavaScript"] },
  { title: "Chaintech Product", tags: ["UX Design", "Angular", "JavaScript"] },
  { title: "Chaintech Product", tags: ["UX Design", "Angular", "JavaScript"] },
  { title: "Chaintech Product", tags: ["UX Design", "Angular", "JavaScript"] },
  { title: "Chaintech Product", tags: ["UX Design", "Angular", "JavaScript"] },
  { title: "Chaintech Product", tags: ["UX Design", "Angular", "JavaScript"] },
  { title: "Chaintech Product", tags: ["UX Design", "Angular", "JavaScript"] },
];

function Portfolio() {
  return (
    <div className="bg-black text-white py-14 px-6" id="portfolio">
      {/* Title */}
      <h2 className="text-3xl font-extrabold mb-10">
        PORTFOLIO
      </h2>

      {/* Grid of Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-lg overflow-hidden shadow-lg border border-gray-800 flex flex-col"
          >
            {/* Image */}
            <img
              src={placeholderImg}
              alt={item.title}
              className="w-full h-40 object-cover"
            />

            {/* Card Body */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold">{item.title}</h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-purple-200 text-purple-800 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button className="bg-gray-800 text-white px-4 py-2 rounded mt-auto hover:bg-gray-700 transition mt-4">
                View Product Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
