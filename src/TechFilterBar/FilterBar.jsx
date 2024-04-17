import React from "react";

const TechFilterBar = ({ technologies }) => {
    const overallTypes = technologies.reduce((acc, tech) => {
        if(!acc.includes(tech.overall_type)) {
            acc.push(tech.overall_type);
        }
        return acc;
    }, [])
  return (
    <button className="w-1/5 flex justify-evenly items-center mt-24 bg-coral-red h-12 rounded-full">
      Filter by Category
    </button>
  );
};

export default TechFilterBar;
