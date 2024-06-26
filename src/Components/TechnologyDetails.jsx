import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedTechCard from "./DetailedTechCard";
import Nav from "./Nav";
import Loading from "./Loading";

const TechnologyDetails = () => {
  const { id } = useParams();
  const [technology, setTechnology] = useState();

  const fetchSpecifcTechnology = async (endpoint) => {
    try {
      const response = await fetch(
        `https://stack-pedia-api.adaptable.app/api/v1/technology/${endpoint}`
      );
      if (!response.ok) {
        throw new Error("Failed to retrieve data. Try again later.");
      }
      const data = await response.json();
      setTechnology(data);
    } catch (error) {
      console.log(Error, error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchSpecifcTechnology(id);
    }, 2000);
  }, []);

  return (
    <section className="flex flex-col h-screen">
      <Nav />
      <section className="h-full w-full pt-28 flex justify-center items-center">
        {technology ? (
          <DetailedTechCard technology={technology} />
        ) : (
          <Loading />
        )}
      </section>
    </section>
  );
};

export default TechnologyDetails;
