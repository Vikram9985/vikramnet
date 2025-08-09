import React from "react";

const skills = [
  {
    name: "UX Design",
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
    percentage: 97,
  },
  {
    name: "UI Design",
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
    percentage: 97,
  },
  {
    name: "UX Design",
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
    percentage: 97,
  },
  {
    name: "UX Design",
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
    percentage: 97,
  },
];

function Skills() {
  return (
    <div className="bg-black text-white py-14 px-6" id="skills">
      {/* Title */}
      <h2 className="text-3xl font-extrabold mb-10">SKILLS</h2>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-6 border border-gray-800 rounded-lg p-6"
          >
            {/* Circle Progress */}
            <div className="relative w-24 h-24">
              {/* Outer Circle */}
              <svg className="w-full h-full">
                <circle
                  className="text-gray-700"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="44"
                  cx="50%"
                  cy="50%"
                />
                <circle
                  className="text-pink-500"
                  strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 44}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 44 - (skill.percentage / 100) * (2 * Math.PI * 44)
                  }`}
                  strokeLinecap="round"
                  stroke="url(#gradient)"
                  fill="transparent"
                  r="44"
                  cx="50%"
                  cy="50%"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f87171" />
                    <stop offset="100%" stopColor="#facc15" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Percentage */}
              <span className="absolute inset-0 flex items-center justify-center font-bold text-lg">
                {skill.percentage}%
              </span>
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-xl font-bold">{skill.name}</h3>
              <p className="text-gray-300 text-sm mt-2">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
