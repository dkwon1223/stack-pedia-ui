import React, { useState } from "react";
import ArrowDown from "../assets/icons/arrow-down.svg";

const TechFilterBar = ({
  technologies,
  fetchFilteredTechnologies,
  setIsFiltered,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const overallTypes = technologies.reduce((acc, tech) => {
    if (!acc.includes(tech.overall_type)) {
      acc.push(tech.overall_type);
    }
    return acc;
  }, []);

  async function filterTechnologies(category) {
    setIsFiltered(true);
    await fetchFilteredTechnologies(category);
  }

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="lg:w-1/5 sm:w-4/5 flex justify-evenly items-center mt-24 bg-coral-red h-10 rounded-lg border-4 border-transparent active:border-white duration-600 active:text-orange-800 tracking-wider font-palanquin text-white"
      >
        Filter by Category
        {!isOpen ? (
          <img src={ArrowDown} className="h-16" />
        ) : (
          <img src={ArrowDown} className="h-16 rotate-180" />
        )}
      </button>
      {isOpen && (
        <div className="bg-coral-red flex flex-col justify-center items-center lg:w-1/5 sm:w-4/5 xsm:w-3/5 mt-2 rounded-lg">
          <>
            {overallTypes.map((type, index) => {
              return (
                <button
                  key={index}
                  onClick={() => filterTechnologies(type)}
                  className="bg-orange-700 w-1/2 rounded-full my-2 font-palanquin text-white"
                >
                  {type}
                </button>
              );
            })}
            <button
              onClick={() => setIsFiltered(false)}
              className="bg-orange-700 w-1/2 rounded-full my-2 font-semibold font-palanquin text-white"
            >
              all
            </button>
          </>
        </div>
      )}
    </>
  );
};

export default TechFilterBar;
