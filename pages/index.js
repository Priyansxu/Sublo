"use client";
import { Download, Github, Figma, Heart } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-gradient-to-b from-indigo-100 to-white py-20">
            <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white p-2 shadow-lg flex items-center justify-center">
                    <Heart className="text-purple-600 w-10 h-10" />
                </div>
            </div>

            <div className="container mx-auto text-center px-6">
                <h3 className="text-blue-600 text-xl font-medium mb-3">
                    25+ free logos for personal and commercial use
                </h3>
                <h1 className="text-4xl font-bold text-gray-900 mb-8">
                    Free Professional Logo Placeholders
                </h1>

                <div className="flex flex-col space-y-4 items-center">
                    <a href="https://www.figma.com/community/plugin/1120667703468196103"
                        className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-[4px_4px_0px_#1e40af] hover:shadow-[2px_2px_0px_#1e40af] transition transform hover:-translate-y-1">
                        <Figma className="mr-2" /> Figma plugin
                    </a>
                    <a href="https://s.vjy.me/uilogos-v1" download="uilogos-v2.0.zip"
                        className="flex items-center bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-lg shadow-[4px_4px_0px_#d1d5db] hover:shadow-[2px_2px_0px_#d1d5db] transition transform hover:-translate-y-1">
                        <Download className="mr-2" /> Download .zip
                    </a>
                    <a href="https://github.com/realvjy/uilogos.co"
                        className="flex items-center bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-lg shadow-[4px_4px_0px_#d1d5db] hover:shadow-[2px_2px_0px_#d1d5db] transition transform hover:-translate-y-1">
                        <Github className="mr-2" /> Github code
                    </a>
                </div>
            </div>
        </header>
    );
}