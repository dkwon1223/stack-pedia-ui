import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Loading from "./Loading";
import StackFilterBar from "./StackFilterBar";

const Stacks = () => {
  const [stacks, setStacks] = useState([]);
  const [filteredStacks, setFilteredStacks] = useState([]);
  const [isFiltered2, setIsFiltered2] = useState(false);
  const [loading2, setLoading2] = useState(true);

  const fetchStacks = async (endpoint) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/stacks/${endpoint}`
      );
      if (!response.ok) {
        throw new Error("Failed to retrieve data. Try again later.");
      }
      const data = await response.json();
      setStacks(data);
      setLoading2(false);
    } catch (error) {
      console.log(Error, error);
    }
  };

  const fetchFilteredStacks = async (endpoint) => {
    try {
      const response = await fetch(`https://stack-pedia-api.adaptable.app/api/v1/stacks/${endpoint}`)
      if(!response.ok) {
        throw new Error("Failed to retrieve data. Try again later");
      }
      const data = await response.json();
      setFilteredStacks(data);
      setLoading2(false);
    } catch (error) {
      console.log(Error, error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchStacks("all");
    }, 1500);
  }, []);

  return (
    <>
      <Nav />
      {loading2 && <Loading />}
      {stacks && (
        <section className="flex flex-col justify-center items-center mb-12 h-full w-full">
          {!loading2 && (<StackFilterBar
            stacks={stacks}
            fetchFilteredStacks={fetchFilteredStacks}
            setIsFiltered2={setIsFiltered2}
          />)}
          <section className="grid lg:grid-cols-4 grid-rows-[auto] auto-rows-fr pt-2 mt-12 w-full gap-x-5 gap-y-5 px-8 sm:grid-cols-2">
            {isFiltered2
              ? filteredStacks.map((stack) => {
                  return (
                    <Link
                      key={stack.name.toLowerCase()}
                      to={`/stacks/${stack.name.toLowerCase()}`}
                      state={{
                        specs: `${stack.type}/${stack.name.toLowerCase()}`,
                      }}
                      className="flex flex-col justify-evenly items-center max-h-44 border-2 rounded-lg px-2 hover:hover:bg-orange-300 hover:scale-110 cursor-pointer hover:shadow-xl"
                    >
                      <img src={stack.image_url} className="h-1/2" />
                      <h1 className="font-bold text-center">{stack.name}</h1>
                    </Link>
                  );
                })
              : stacks.map((stack) => {
                  return (
                    <Link
                      key={stack.name.toLowerCase()}
                      to={`/stacks/${stack.name.toLowerCase()}`}
                      state={{
                        specs: `${stack.type}/${stack.name.toLowerCase()}`,
                      }}
                      className="flex flex-col justify-evenly items-center max-h-54 border-2 rounded-lg px-2 hover:hover:bg-orange-300 hover:scale-110 cursor-pointer hover:shadow-xl"
                    >
                      <img src={stack.image_url} className="h-auto" />
                      <h1 className="font-bold text-center">{stack.name}</h1>
                    </Link>
                  );
                })}
          </section>
        </section>
      )}
      <Footer />
    </>
  );
};

export default Stacks;
