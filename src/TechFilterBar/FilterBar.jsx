import React, { useState } from "react";
import ArrowDown from "../assets/icons/arrow-down.svg";

const TechFilterBar = ({ technologies, fetchTechnologies }) => {
  const [isOpen, setIsOpen] = useState(false);

  const overallTypes = technologies.reduce((acc, tech) => {
    if (!acc.includes(tech.overall_type)) {
      acc.push(tech.overall_type);
    }
    return acc;
  }, []);

  async function filterTechnologies(category) {
    await fetchTechnologies(category)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-1/5 flex justify-evenly items-center mt-24 bg-coral-red h-12 rounded-lg border-4 border-transparent active:border-white duration-600 active:text-white font-bold tracking-wider font-palanquin"
      >
        Filter by Category
        {!isOpen ? (
          <img src={ArrowDown} className="h-16" />
        ) : (
          <img src={ArrowDown} className="h-16 rotate-180" />
        )}
      </button>
      {isOpen && (
        <div className="bg-coral-red flex flex-col justify-center items-center w-1/5 mt-2 rounded-lg">
          {overallTypes.map((type, index) => {
            return (
              <button key={index} onClick={() => filterTechnologies(type)} className="bg-white w-1/2 rounded-sm my-2 font-semibold font-palanquin">
                {type}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TechFilterBar;
