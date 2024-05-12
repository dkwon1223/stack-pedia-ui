import React, { useState } from "react";
import Nav from "./Nav";
import StackIcon from "../assets/icons/stack-icon.svg";
import LoginIcon from "../assets/icons/login-icon.svg";
import Button from "./Button";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useLogin } from "../Hooks/useLogin";
import { useAuthContext } from "../Hooks/useAuthContext";
import Loading from "./Loading";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    await login(email, password); 
  };

  return (
    <section className="h-screen w-full">
      <Nav />
      {!user ? (<div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-12">
          <img
            className="mx-auto h-14 w-auto"
            src={StackIcon}
            alt="StackPedia Logo"
          />
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
              {error && <p className="font-bold text-red-600 text-lg mb-4">{error}</p>}
              <Button label="Sign In" iconUrl={LoginIcon} disabled={isLoading}/>
            </div>
          </form>

          <p className="mt-10 text-center text-md text-gray-500">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-orange-600 hover:text-orange-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>) : <Loading text="Login successful...redirecting"/>}
      <Footer />
    </section>
  );
};

export default SignIn;
