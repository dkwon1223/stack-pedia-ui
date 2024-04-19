import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import TechFilterBar from "./TechFilterBar";
import Footer from "./Footer";
import Loading from "./Loading";

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
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
      setLoading(false);
    } catch (error) {
      console.log(Error, error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchTechnologies("all");
    }, 1500)
  }, []);

  return (
    <>
      <Nav />
      {loading && <Loading />}
      {technologies && (<section className="flex flex-col justify-center items-center mb-12">
        <TechFilterBar
          technologies={technologies}
          setTechnologies={setTechnologies}
          fetchTechnologies={fetchTechnologies}
          fetchFilteredTechnologies={fetchFilteredTechnologies}
          isFiltered={isFiltered}
          setIsFiltered={setIsFiltered}
        />
        <section className="grid lg:grid-cols-4 grid-rows-[auto] auto-rows-fr pt-12 w-full gap-x-5 gap-y-5 px-8 sm:grid-cols-2">
          {isFiltered ? (filteredTechnologies.map((tech) => {
            return (
              <Link key={tech.name.toLowerCase()} to={`/technologies/${tech.name.toLowerCase()}`} state={{ specs: `${tech.overall_type}/${tech.name.toLowerCase()}` }} className="flex flex-col justify-evenly items-center max-h-44 border-2 rounded-lg px-2 hover:hover:bg-orange-300 hover:scale-110 cursor-pointer hover:shadow-xl">
                <img src={tech.image_url} className="h-1/2" />
                <h1 className="font-bold text-center">{tech.name}</h1>
              </Link>
            );
          })) 
          : 
          (technologies.map((tech) => {
            return (
              <Link key={tech.name.toLowerCase()} to={`/technologies/${tech.name.toLowerCase()}`} state={{specs: `${tech.overall_type}/${tech.name.toLowerCase()}`}} className="flex flex-col justify-evenly items-center max-h-44 border-2 rounded-lg px-2 hover:hover:bg-orange-300 hover:scale-110 cursor-pointer hover:shadow-xl">
                <img src={tech.image_url} className="h-1/2" />
                <h1 className="font-bold text-center">{tech.name}</h1>
              </Link>
            );
          }))}
        </section>
      </section>)}
      <Footer />
    </>
  );
};

export default Technologies;
