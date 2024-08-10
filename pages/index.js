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
    <div className="bg-white min-h-screen flex flex-col">
      <div className="flex-grow relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#f3e3f6] rounded-br-[100px]"></div>
        <div className="relative z-10">
          <header className="flex justify-between items-center p-6">
            <div className="text-2xl font-bold tracking-tighter rotate-90">QUIN TECH</div>
            <nav className="flex space-x-4">
              <button className="px-4 py-2 bg-[#ff3fa0] text-white rounded-full">Home</button>
              <button className="px-4 py-2">Services</button>
              <button className="px-4 py-2">Projects</button>
              <button className="px-4 py-2">About Us</button>
            </nav>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-white rounded-full">Contact Us</button>
              <button className="px-4 py-2 bg-[#ff3fa0] text-white rounded-full">Login</button>
            </div>
          </header>

          <main className="flex mt-8 px-6">
            <div className="w-1/2 pr-8">
              <h1 className="text-7xl font-bold text-[#ff3fa0] mb-4">W98K6R</h1>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-xs text-center">
                  24/7<br/>SUPPORT
                </div>
              </div>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gray-200 rounded-full text-gray-800">
                Let's understand the technology better
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="w-1/2 relative">
              <img src="/placeholder.svg?height=500&width=500" alt="Futuristic head illustration" className="w-full h-auto" />
            </div>
          </main>

          <div className="flex space-x-4 mt-8 px-6">
            <div className="bg-white rounded-3xl p-6 flex-1">
              <h3 className="text-3xl font-bold text-[#ff3fa0]">100K+</h3>
              <p className="text-sm text-gray-600">Risus commodo viverra maec enas accumsan lacus</p>
            </div>
            <div className="bg-white rounded-3xl p-6 flex-1">
              <h3 className="text-xl font-bold mb-2">WHAT WE DO</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 flex-1 flex items-center space-x-4">
              <img src="/placeholder.svg?height=50&width=50" alt="Team" className="w-12 h-12 rounded-full" />
              <p className="font-semibold">Connect with our experts</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white p-6 flex justify-between items-center">
        <div>
          <h3 className="font-semibold mb-2">FOLLOW US</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            By reaching out to connect with us, you're taking the first step toward the peace of what the future could be
          </p>
        </div>
        <div className="flex space-x-4">
          <FacebookIcon className="w-8 h-8 text-gray-600" />
          <TwitterIcon className="w-8 h-8 text-gray-600" />
          <InstagramIcon className="w-8 h-8 text-gray-600" />
          <YoutubeIcon className="w-8 h-8 text-gray-600" />
        </div>
      </footer>
    </div>
  );
}