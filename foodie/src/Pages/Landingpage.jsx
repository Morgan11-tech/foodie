import React from "react";
import { SlidingComponent } from "../Components/Carousel";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Landingpage() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="bg-[url('assets/foodiehero.png')] bg-no-repeat bg-cover h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 overflow-hidden">
          <div className=" w-full lg:mt-0 grid justify-items-center">
            <h1 className="font-extrabold text-5xl text-center sm:text-6xl mb-5">
              Healthy Cooking Recipes <br /> and the right Nutrition.
            </h1>
            <p className="font-light text-md text-center sm:text-xl mb-2">
              Browse through thousands of our Tasty Recipes
            </p>

            <button className="rounded-tl-lg bg-green-600 text-white text-center px-3 py-2 hover:bg-green-500 mb-10">
              Browse all our recipies
            </button>

            <div className="relative inline-block bg-white rounded-full p-2">
              <div
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer"
              >
                <svg
                  className="animate-bounce w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#D8F0F4] h-full flex flex-col justify-center lg:p-28 md:p-10 p-10">
          <p className="font-extrabold text-4xl text-center sm:text-6xl mb-2">
            Popular Recipes
          </p>
          <p className="font-regular text-xl text-center mb-5">
            Recipes our customers are in love with
          </p>
          <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1">
            <div className="max-w-xs rounded overflow-hidden shadow-lg">
              <img
                className="h-52 w-full object-cover"
                src="assets/unsplash_r01ZopTiEV8.png"
                alt=""
              />
              <div className="py-6 px-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="max-w-xs rounded overflow-hidden shadow-lg">
              <img
                className="h-52 w-full object-cover"
                src="assets/unsplash_fdlZBWIP0aM.png"
                alt=""
              />
              <div className="py-6 px-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div className="max-w-xs rounded overflow-hidden shadow-lg">
              <img
                className="h-52 w-full object-cover"
                src="assets/unsplash_zcUgjyqEwe8.png"
                alt=""
              />
              <div className="py-6 px-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
          {/* testimonials */}
          <section className="flex flex-col items-center mt-20">
            <p className="font-medium text-xl">What our</p>
            <p className="font-extrabold text-4xl sm:text-6xl">Customers say</p>
          </section>

          <SlidingComponent />

          <section className="flex flex-col items-center mt-20">
            <p className="font-medium text-xl">
              To receive weekly recepies in your email,
            </p>
            <p className="font-extrabold text-4xl sm:text-6xl mb-5">
              Sign up for our newsletter
            </p>
          </section>
          {/* newsletter */}
          <form action="#">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required=""
                ></input>
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-green-500 border-green-600 sm:rounded-none sm:rounded-r-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer">
              We care about the protection of your data.{" "}
              <a
                href="#"
                className="font-medium text-green-600 hover:underline"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </main>
        <Footer />
    </div>
  );
}

export default Landingpage;
