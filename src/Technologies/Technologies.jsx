import React from "react";
import Nav from "../Nav/Nav";
import { useState, useEffect } from "react";
import TechFilterBar from "../TechFilterBar/FilterBar";

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const fetchTechnologies = async (endpoint) => {
    try {
        const response = await fetch(`http://localhost:8080/api/v1/technologies/${endpoint}`)
        if(!response.ok) {
            throw new Error("Failed to retrieve data. Try again later.");
        }
        const data = await response.json();
        setTechnologies(data);
    } catch (error) {
        console.log(Error, error);
    }
  }
  useEffect(() => {
    fetchTechnologies("all");
  }, [])

  return (
    <>
      <Nav />
      <section className="flex flex-col justify-center items-center">
        <TechFilterBar technologies={technologies}/>
        <section className="grid grid-cols-6 grid-rows-[auto] auto-rows-fr pt-12 w-full gap-x-5 gap-y-5 px-8">
          {technologies.map((tech) => {
            return (
              <div key={tech.name} className="flex flex-col justify-evenly items-center max-h-44 border rounded-lg px-2 hover:hover:bg-slate-300 hover:scale-110 cursor-pointer">
                <img src={tech.image_url} className="h-1/3"/>
                <h1 className="font-bold text-center">{tech.name}</h1>
              </div>
            )
          })}
        </section>
    </section>
    </>
  );
};

export default Technologies;
