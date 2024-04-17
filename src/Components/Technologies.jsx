import React from "react";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import TechFilterBar from "./FilterBar";
import { Link } from "react-router-dom";

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const fetchTechnologies = async (endpoint) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/technologies/${endpoint}`
      );
      if (!response.ok) {
        throw new Error("Failed to retrieve data. Try again later.");
      }
      const data = await response.json();
      setTechnologies(data);
    } catch (error) {
      console.log(Error, error);
    }
  };

  const fetchFilteredTechnologies = async (endpoint) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/technologies/${endpoint}`
      );
      if (!response.ok) {
        throw new Error("Failed to retrieve data. Try again later.");
      }
      const data = await response.json();
      setFilteredTechnologies(data);
    } catch (error) {
      console.log(Error, error);
    }
  };

  useEffect(() => {
    fetchTechnologies("all");
  }, []);

  return (
    <>
      <Nav />
      <section className="flex flex-col justify-center items-center mb-12">
        <TechFilterBar
          technologies={technologies}
          setTechnologies={setTechnologies}
          fetchTechnologies={fetchTechnologies}
          fetchFilteredTechnologies={fetchFilteredTechnologies}
          isFiltered={isFiltered}
          setIsFiltered={setIsFiltered}
        />
        <section className="grid grid-cols-6 grid-rows-[auto] auto-rows-fr pt-12 w-full gap-x-5 gap-y-5 px-8">
          {isFiltered ? (filteredTechnologies.map((tech) => {
            return (
              <Link key={tech.name.toLowerCase()} to={`/technologies/${tech.name.toLowerCase()}`} state={{ specs: `${tech.overall_type}/${tech.name.toLowerCase()}` }} className="flex flex-col justify-evenly items-center max-h-44 border rounded-lg px-2 hover:hover:bg-orange-300 hover:scale-110 cursor-pointer hover:shadow-xl">
                <img src={tech.image_url} className="h-1/2" />
                <h1 className="font-bold text-center">{tech.name}</h1>
              </Link>
            );
          })) 
          : 
          (technologies.map((tech) => {
            return (
              <Link key={tech.name.toLowerCase()} to={`/technologies/${tech.name.toLowerCase()}`} state={{specs: `${tech.overall_type}/${tech.name.toLowerCase()}`}} className="flex flex-col justify-evenly items-center max-h-44 border rounded-lg px-2 hover:hover:bg-orange-300 hover:scale-110 cursor-pointer hover:shadow-xl">
                <img src={tech.image_url} className="h-1/2" />
                <h1 className="font-bold text-center">{tech.name}</h1>
              </Link>
            );
          }))}
        </section>
      </section>
    </>
  );
};

export default Technologies;
