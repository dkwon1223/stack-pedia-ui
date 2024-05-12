import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedStackCard from "./DetailedStackCard";
import Nav from "./Nav";
import Loading from "./Loading";

const StackDetails = () => {
  const { id } = useParams();
  const [stack, setStack] = useState();

  const fetchSpecifcStack = async (endpoint) => {
    try {
      const response = await fetch(
        `https://stack-pedia-api.adaptable.app/api/v1/stack/${endpoint}`
      );
      if (!response.ok) {
        throw new Error("Failed to retrieve data. Try again later.");
      }
      const data = await response.json();
      setStack(data);
    } catch (error) {
      console.log(Error, error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchSpecifcStack(id);
    }, 2000);
  }, []);

  return (
    <section className="flex flex-col h-screen">
      <Nav />
      <section className="h-full w-full pt-28 flex justify-center items-center">
        {stack ? <DetailedStackCard stack={stack} /> : <Loading />}
      </section>
    </section>
  );
};

export default StackDetails;
