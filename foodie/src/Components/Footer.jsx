import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#2E8C9C] lg:px-32 px-5 p-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-white sm:text-center">
            © 2023 Foodie!™. All rights reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-grey-500 sm:mt-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6 text-white">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6 text-white">Contact</a>
                </li>
            </ul>
        </div>
      </footer>
  )
}

export default Footer;