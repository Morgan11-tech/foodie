import React from "react";
import { SlidingComponent } from "../Components/Carousel";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import RecipeCards from "../Components/RecipeCards";

function Landingpage() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="bg-[url('/foodiehero.png')] bg-no-repeat bg-cover h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 overflow-hidden">
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
                onClick={() =>{
                    document.getElementById('popular-recipes').scrollIntoView({ behavior: 'smooth' });
                  }}
                
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

        <div id="popular-recipes" className="bg-[#D8F0F4] h-full flex flex-col justify-center lg:p-28 md:p-10 p-10">
          <p className="font-extrabold text-4xl text-center sm:text-6xl mb-2">
            Popular Recipes
          </p>
          <p className="font-regular text-xl text-center mb-5">
            Recipes our customers are in love with
          </p>
          <RecipeCards />

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
          <Newsletter />
        </div>
      </main>
        <Footer />
    </div>
  );
}

export default Landingpage;
