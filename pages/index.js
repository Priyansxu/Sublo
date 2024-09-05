import React from 'react';
import { Anchor, Ship, Users, Map, Palette, MessageSquare } from 'lucide-react';

export default function DedParWevender() {
  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen font-sans">
      <header className="bg-white text-gray-800 p-6 shadow-sm">
        <h1 className="text-4xl font-bold mb-2 text-teal-600">DedPar Wevender</h1>
        <p className="text-sm text-gray-600">The Best Pirate Sailers in Discovery</p>
      </header>

      <main className="p-6 space-y-12">
        <section className="text-center">
          <p className="text-lg mb-6">
            Discovery? Yes, you heard it right! That's our goal, and we invite you, yes you, to join us and our community and help us grow.
          </p>
          <a 
            href="https://discord.gg/hTVphcJUYX" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg"
          >
            <MessageSquare className="inline-block mr-2" />
            Join Our Server
          </a>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-teal-700">FEATURES</h2>
          <ul className="space-y-6">
            <li className="flex items-start">
              <Anchor className="flex-shrink-0 w-8 h-8 text-teal-500 mr-4" />
              <p className="text-lg">Stay connected in any channel for up to 24 hours without disconnection, or easily switch to a different channel.</p>
            </li>
            <li className="flex items-start">
              <Users className="flex-shrink-0 w-8 h-8 text-teal-500 mr-4" />
              <p className="text-lg">Experience our warm and friendly community, welcoming to both new mascots and seasoned pirates.</p>
            </li>
            <li className="flex items-start">
              <Ship className="flex-shrink-0 w-8 h-8 text-teal-500 mr-4" />
              <p className="text-lg">Enjoy support for every game featuring ships, and much more beyond the seas.</p>
            </li>
            <li className="flex items-start">
              <Map className="flex-shrink-0 w-8 h-8 text-teal-500 mr-4" />
              <p className="text-lg">Navigate our server easily with our Map Table, showcasing the best and most important aspects, including support locations.</p>
            </li>
            <li className="flex items-start">
              <Palette className="flex-shrink-0 w-8 h-8 text-teal-500 mr-4" />
              <p className="text-lg">Immerse yourself in our unique design and gameplay experience.</p>
            </li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Join Our Adventure</h2>
          <p className="text-lg mb-6">
            Embark on an exciting journey with DedPar Wevender. Whether you're a seasoned pirate or a newcomer to the seas, there's a place for you in our crew.
          </p>
          <a 
            href="https://discord.gg/hTVphcJUYX" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white text-teal-600 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg"
          >
            Set Sail Now!
          </a>
        </section>
      </main>

      <footer className="bg-gray-100 text-gray-600 p-6 mt-12">
        <p className="text-center">&copy; 2023 DedPar Wevender. All rights reserved.</p>
      </footer>
    </div>
  );
}