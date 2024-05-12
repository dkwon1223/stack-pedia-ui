import React from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import Nav from "./Nav";

const Favorites = () => {
  const { user } = useAuthContext();
  
  return (
    <section>
        <Nav />
        {user ? <h1>Favorites</h1> : <h1>You must sign in to add and view favorites</h1>}
    </section>
  );
};

export default Favorites;
