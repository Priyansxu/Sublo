"use client";
import { Download, Github, Figma, Heart } from "lucide-react";

export default function Header() {
    return (
        <header className="relative">
            {/* Single Gradient with h-20 and thin line */}
            <div>
                <div className="h-20 bg-gradient-to-b from-purple-500 to-transparent"></div>
                <div className="h-px bg-gray-300"></div>
            </div>

            <div className="bg-gradient-to-b from-indigo-100 to-white py-20 flex flex-col justify-center items-center">
                {/* Heart Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-white p-3 shadow-lg flex items-center justify-center">
                        <Heart className="text-purple-600 w-12 h-12" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="container mx-auto text-center px-8">
                    <h3 className="text-blue-600 text-xl font-medium mb-3">
                        25+ free logos for personal and commercial use
                    </h3>
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">
                        Free Professional Logo Placeholders
                    </h1>

                    {/* Button Group */}
                    <div className="relative border border-gray-300 shadow-lg p-4 rounded-lg">
                        <div className="flex flex-col space-y-4 items-center relative z-10">
                            {/* Upper Button with light color */}
                            <a href="https://www.figma.com/community/plugin/1120667703468196103"
                                className="flex items-center bg-blue-100 text-blue-700 px-8 py-4 rounded-full shadow-md mb-2">
                                <Figma className="mr-2" /> Figma plugin
                            </a>

                            {/* Dark Button behind */}
                            <a href="https://github.com/realvjy/uilogos.co"
                                className="flex items-center bg-gray-800 text-white px-8 py-4 rounded-full">
                                <Github className="mr-2" /> Github code
                            </a>
                        </div>
                        {/* Bottom Button (acts as background) */}
                        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center">
                            <a href="https://s.vjy.me/uilogos-v1" download="uilogos-v2.0.zip"
                                className="flex items-center bg-gray-900 text-white px-10 py-4 rounded-full shadow-lg">
                                <Download className="mr-2" /> Download .zip
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}