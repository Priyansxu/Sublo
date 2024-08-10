import React from "react";
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-white">
      <header className="flex justify-between items-center p-4 bg-gradient-to-r from-pink-500 to-pink-700 text-white">
        <h1 className="text-3xl font-bold tracking-tighter">QUIN TECH</h1>
        <nav className="hidden md:flex space-x-6">
          <button className="bg-pink-700 px-4 py-2 rounded text-white">Home</button>
          <button className="px-4 py-2 rounded text-white">Services</button>
          <button className="px-4 py-2 rounded text-white">Projects</button>
          <button className="px-4 py-2 rounded text-white">About Us</button>
        </nav>
        <div className="flex space-x-2">
          <button className="border border-white px-4 py-2 rounded text-white">Contact Us</button>
          <button className="bg-white px-4 py-2 rounded text-pink-700">Login</button>
        </div>
      </header>

      <main className="flex-grow p-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-6xl font-bold text-pink-600">W98K6R</h2>
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-bold">
                KNOW MORE
              </div>
            </div>
            <button className="bg-gray-200 text-gray-800 flex items-center mt-4 px-4 py-2 rounded">
              Let's understand the technology better
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="relative">
            <img
              src="/path-to-your-image.png"
              alt="Futuristic head illustration"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white shadow-md rounded">
            <h3 className="text-3xl font-bold text-pink-600">100K+</h3>
            <p className="text-sm text-gray-700 mt-2">
              Risus commodo viverra maecenas accumsan lacus
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded">
            <h3 className="text-2xl font-bold">WHAT WE DO</h3>
            <p className="text-sm text-gray-700 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                src="/path-to-your-team-image.png"
                alt="Team"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold">Connect with our experts</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-gray-800">FOLLOW US</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              By reaching out to connect with us, you're taking the first step toward the peace of what the future could be.
            </p>
          </div>
          <div className="flex space-x-4">
            <FacebookIcon className="h-6 w-6 text-gray-800" />
            <TwitterIcon className="h-6 w-6 text-gray-800" />
            <InstagramIcon className="h-6 w-6 text-gray-800" />
            <YoutubeIcon className="h-6 w-6 text-gray-800" />
          </div>
        </div>
      </footer>
    </div>
  );
}