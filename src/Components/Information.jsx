import React from "react";
import Button from "./Button";
import ArrowIcon from "../assets/icons/arrow-right.svg";
import StackGraphic from "../assets/images/stack-diagram.png";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <section
      id="info"
      className="w-screen flex xl:flex-row flex-col justify-center min-h-screen gap-5 max-container"
    >
      <figure id="infoImage" className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-4 bg-primary bg-hero bg-cover bg-center">
        <img
          src={StackGraphic}
          alt="developer coding at the computer"
          width={610}
          height={600}
          className="object-contain relative z-10"
        />
      </figure>
      <div id="infoText" className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-5 ml-5">
        <h1 className="mt-2 font-palanquin text-4xl max-sm:text-[36px] max-sm:leading-[41px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative pr-1">
            Tech Stacks...{" "}
          </span>
          <span className="text-coral-red inline-block mt-3 mb-4">
            explained
          </span>
        </h1>
        <p className="font-monserrat text-orange-600 text-xl leading-8 mt-2 sm:max-w-sm lg:max-w-lg">
          What is a tech stack?
        </p>
        <p className="font-monserrat text-slate-gray text-lg leading-8 mt-2 mb-5 sm:max-w-sm lg:max-w-lg">
          In the context of modern web applications, tech stacks are sets of
          technologies that are "stacked" together and work in synergy to
          provide a fast, interactive, and dynamic user experience. "Full
          stacks" consist of front-end and back-end components.
        </p>
        <p className="font-monserrat text-orange-600 text-xl leading-8 mt-2 sm:max-w-sm lg:max-w-lg">
          Why are they important?
        </p>
        <p className="font-monserrat text-slate-gray text-lg leading-8 mt-2 mb-5 sm:max-w-sm lg:max-w-lg">
          Most applications are built to be used by a large number of people. By
          planning and being intentional about your choices in each piece of
          your stack, you can avoid horizontal and vertical scaling issues as
          your project grows.
        </p>
        <p className="font-monserrat text-orange-600 text-xl leading-8 mt-2 sm:max-w-sm lg:max-w-lg">
          Which one is the best?
        </p>
        <p className="font-monserrat text-slate-gray text-lg leading-8 mt-2 mb-5 sm:max-w-sm lg:max-w-lg">
          There is no one "right" tech stack. Different stacks offer their own
          unique benefits. When researching the right one for you, it's a good
          idea to consider the project purpose/requirements, scope, scalability,
          and ecosystems surrounding each technology.
        </p>
        <Link to="/technologies">
          <Button label="View Individual Technologies" iconUrl={ArrowIcon} />
        </Link>
        <Link to="/stacks">
          <Button label="View Tech Stacks" iconUrl={ArrowIcon} />
        </Link>
      </div>
    </section>
  );
};

export default Information;
