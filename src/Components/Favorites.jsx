import { useEffect, useState } from "react";
import Nav from "./Nav";
import { jwtDecode } from "jwt-decode";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Favorites = () => {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUser = async (endpoint) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/user/${endpoint}`
      );
      if (!response.ok) {
        throw new Error("Failed to retrieve data. Try again later.");
      }
      const data = await response.json();
      setCurrentUser(data);
    } catch (error) {
      console.log(Error, error);
    }
  };

  const handleUser = () => {
    if (userLocal.token) {
      const decode = jwtDecode(userLocal.token);
      const loggedInId = decode._id;
      fetchUser(loggedInId);
    } else {
      fetchUser(userLocal._id);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleUser();
    }, 2000)
  }, []);

  return (
    <section className="flex flex-col items-center h-screen">
      <Nav />
      {currentUser ? (<section className="flex w-full screen-full flex-col items-center justify-normal mt-28">
        <h3 className="mb-0 font-palanquin text-3xl max-sm:text-[36px] max-sm:leading-[41px] font-bold">Favorite <span className="text-coral-red inline-block mt-3">technologies</span></h3>
        {currentUser.favoriteTechs.length > 0 ? (
          <ul
            role="list"
            className="py-12 w-full grid grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-5 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {currentUser.favoriteTechs.map((tech) => (
              <Link to={`/technologies/${tech._id}`}>
                <li key={tech._id} className="relative">
                  <div className="group aspect-h-4 aspect-w-8 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <img
                      src={tech.image_url}
                      alt=""
                      className="pointer-events-none object-contain group-hover:opacity-75"
                    />
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <h1 className="font-palanquin text-xl max-sm:text-[36px] max-sm:leading-[41px] font-bold">You currently have no favorite technologies</h1>
        )}
      </section>): <Loading />}
      {currentUser ? (<section className="flex w-full screen-full flex-col items-center justify-normal mt-12">
        <h3 className="mb-0 font-palanquin text-3xl max-sm:text-[36px] max-sm:leading-[41px] font-bold">Favorite <span className="text-coral-red inline-block mt-3">stacks</span></h3>
        {currentUser.favoriteStacks.length > 0 ? (
          <ul
            role="list"
            className="py-12 w-full grid grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-5 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {currentUser.favoriteStacks.map((stack) => (
              <Link to={`/stacks/${stack._id}`}>
                <li key={stack._id} className="relative">
                  <div className="group aspect-h-4 aspect-w-8 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <img
                      src={stack.image_url}
                      alt=""
                      className="pointer-events-none object-contain group-hover:opacity-75"
                    />
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <h1 className="font-palanquin text-xl max-sm:text-[36px] max-sm:leading-[41px] font-bold">You currently have no favorite stacks</h1>
        )}
      </section>): <Loading />}
    </section>
  );
};

export default Favorites;
