import React from "react";

const RecipeCards = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1">
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img
          className="h-52 w-full object-cover"
          src="/unsplash_r01ZopTiEV8.png"
          alt=""
          loading="lazy"
        />
        <div className="py-6 px-4">
          <div className="font-bold text-xl mb-2">Shrimp Flavored Stir-fry Pasta</div>
          <p className="text-gray-700 text-base">
          Savor the exquisite fusion of flavors with our Shrimp Flavored Stir-Fry Pasta – a tantalizing blend of succulent shrimp, vibrant vegetables, and al dente pasta, perfectly tossed in a savory, garlic-infused stir-fry sauce. 
          </p>
        </div>
      </div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img
          className="h-52 w-full object-cover"
          src="/unsplash_fdlZBWIP0aM.png"
          alt=""
          loading="lazy"
        />
        <div className="py-6 px-4">
          <div className="font-bold text-xl mb-2">Golden Sunrise Delight</div>
          <p className="text-gray-700 text-base">
          A heavenly breakfast masterpiece featuring fluffy pancakes adorned with a golden crown of perfectly cooked sunny-side-up eggs. 
          </p>
        </div>
      </div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img
          className="h-52 w-full object-cover"
          src="/unsplash_zcUgjyqEwe8.png"
          alt=""
          loading="lazy"
        />
        <div className="py-6 px-4">
          <div className="font-bold text-xl mb-2">Berry Bliss Brioche</div>
          <p className="text-gray-700 text-base">
          A delectable creation that marries the sweetness of blackberries and the creamy richness of sliced bananas, all nestled on a pillowy brioche drizzled with golden honey. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCards;
