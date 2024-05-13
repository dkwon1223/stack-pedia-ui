import React from "react";
import Button from "./Button";
import DocIcon from "../assets/icons/doc-icon.svg";
import FavIcon from "../assets/icons/favorite-icon.svg";
import Footer from "./Footer";
import PropTypes from "prop-types";
import { useFavoriteStack } from "../Hooks/useFavoriteStack";
import { useAuthContext } from "../Hooks/useAuthContext";
import { jwtDecode } from "jwt-decode";

const DetailedStackCard = ({ stack }) => {
  const { favoriteStack } = useFavoriteStack();
  const { user } = useAuthContext();

  function handleFavorite() {
    if (user.token) {
      const decode = jwtDecode(user.token);
      const loggedInId = decode._id;
      favoriteStack(stack, loggedInId);
    } else {
      favoriteStack(stack, user._id);
    }
  }

  return (
    <section>
      <section
        id="stackCard"
        className="w-screen flex xl:flex-row flex-col justify-center gap-10 max-container lg:mt-52 xsm:mt-80 md:mt-96"
      >
        <figure
          id="stackCardImage"
          className="flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-4 bg-primary bg-hero bg-cover bg-center bg-gradient-to-b-0.2 md:mt-36 lg:mt-0 xsm:mt-12"
        >
          <img
            src={stack.image2_url}
            alt={`cover image showing {${stack.name}}`}
            width={670}
            height={500}
            className="object-contain relative z-10"
          />
        </figure>
        <article
          id="stackCardText"
          className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x ml-10 xsm:ml-2"
        >
          <h1 className="font-palanquin text-4xl max-sm:text-[36px] max-sm:leading-[41px] font-bold">
            {stack.name}
            <br />
            <span className="text-coral-red inline-block mt-3 text-3xl">
              {stack.type}
            </span>
          </h1>
          <p className="font-monserrat text-slate-gray text-lg leading-8 mt-4 mb-4 sm:max-w-sm lg:max-w-lg">
            {stack.summary}
          </p>
          <article className="flex flex-col justify-start items-start flex-wrap w-full gap-4 mb-6">
            <div className="flex justify-evenly">
              <div className="w-1/2">
                <p className="text-lg font-palanquin font-bold">
                  Potential Downsides
                </p>
                <ul className="leading-7 font-montserrat text-slate-gray w-3/4">
                  {stack.downsides.map((downside, index) => {
                    return (
                      <li key={index} className="list-disc">
                        {downside}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="w-1/2">
                <p className="text-lg font-palanquin font-bold">
                  Potential Benefits
                </p>
                <ul className="leading-7 font-montserrat text-slate-gray w-3/4">
                  {stack.benefits.map((benefit, index) => {
                    return (
                      <li key={index} className="list-disc">
                        {benefit}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex justify-start items-center w-full">
              <div className="mr-24">
                <p className="text-lg font-palanquin font-bold">Used At</p>
                <ul className="leading-7 font-montserrat text-slate-gray">
                  {stack.companies.map((company, index) => {
                    return (
                      <li key={index} className="list-disc">
                        {company}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <a href={stack.learn_link} target="_blank" className="mr-4">
                <Button label="Learn More" iconUrl={DocIcon} />
              </a>
              {user && (
                <div onClick={handleFavorite} className="mr-4 pr-4">
                  <Button label="Favorite this" iconUrl={FavIcon} />
                </div>
              )}
            </div>
          </article>
        </article>
      </section>
      <Footer />
    </section>
  );
};

export default DetailedStackCard;

DetailedStackCard.propTypes = {
  stack: PropTypes.object.isRequired,
};
