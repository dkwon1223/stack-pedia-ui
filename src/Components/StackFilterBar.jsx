import React, { useState } from "react";
import ArrowDown from "../assets/icons/arrow-down.svg";
import PropTypes from "prop-types";


const StackFilterBar = ({ stacks, fetchFilteredStacks, setIsFiltered2 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const overallTypes = stacks.reduce((acc, stack) => {
    if (!acc.includes(stack.type)) {
      acc.push(stack.type);
    }
    return acc;
  }, []);

  async function filterStacks(category) {
    setIsFiltered2(true);
    await fetchFilteredStacks(category);
  }

  return (
    <>
      <button
        id="stackFilterButton"
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
                  onClick={() => filterStacks(type)}
                  className="bg-orange-700 w-1/2 rounded-full my-2 font-palanquin text-white"
                >
                  {type}
                </button>
              );
            })}
            <button
              onClick={() => setIsFiltered2(false)}
              className="filterOption bg-orange-700 w-1/2 rounded-full my-2 font-semibold font-palanquin text-white"
            >
              all
            </button>
          </>
        </div>
      )}
    </>
  );
};

export default StackFilterBar;

StackFilterBar.propTypes = {
  stacks: PropTypes.array,
  fetchFilteredStacks: PropTypes.func,
  setIsFiltered2: PropTypes.func
}