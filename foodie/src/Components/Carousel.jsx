import { Carousel } from "flowbite-react";

export function SlidingComponent() {
  return (
    <div className="h-80 sm:h-80 xl:h-80 2xl:h-96">
      <Carousel>
        {/* testimonial one */}
        <div className="flex h-full items-center bg-transparent">
          <div className="sm:text-2xl text-lg font-medium text-gray-900 sm:px-36 px-5">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            "This site is so helpful. My kids are in love with the recipes I
            cook for them especially the{" "}
            <span className="hover:text-red-500">stir-fried shrimps.</span>"
            <figcaption className="flex items-center justify-center mt-2 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-2 font-medium text-xs text-gray-900">
                  Micheal Gough
                </div>
                <div className="pl-2 text-xs font-light text-gray-500">
                  CEO at Greenwood
                </div>
              </div>
            </figcaption>
          </div>
        </div>

        <div className="flex h-full items-center justify-center bg-transparent">
          {/* testimonial two */}
        <div className="flex h-full items-center">
          <div className="sm:text-2xl text-lg font-medium text-gray-900 sm:px-36 px-5">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            "I'm just delighted with the recipes here. So good and nutritious."{" "}
           
            <figcaption className="flex items-center justify-center mt-2 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-xs text-gray-900">
                  Jane Oswald
                </div>
                <div className="pl-3 text-xs font-light text-gray-500">
                  Mother of two
                </div>
              </div>
            </figcaption>
          </div>
        </div>
        </div>
        <div className="flex h-full items-center justify-center bg-transparent">
          {/* testimonial three */}
        <div className="flex h-full items-center">
          <div className="sm:text-2xl text-lg font-medium text-gray-900 sm:px-36 px-5">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            "As a chef, I always want to try new recipes. This site has been so helpful. I've tried a lot of recipes here and they are all so good."
            
            <figcaption className="flex items-center justify-center mt-2 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-xs text-gray-900">
                  Chef Manner
                </div>
                <div className="pl-3 text-xs font-light text-gray-500">
                  Professional Chef
                </div>
              </div>
            </figcaption>
          </div>
        </div>
        </div>
      </Carousel>
    </div>
  );
}
