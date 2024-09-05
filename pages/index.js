import React from 'react';
import { Anchor, Ship, Users, Map, Palette, Discord } from 'lucide-react';

export default function DedParWevender() {
  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen font-sans">
      <header className="bg-teal-600 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">DedPar Wevender</h1>
        <p className="text-xl">The Best Pirate Sailers in Discovery</p>
      </header>

      <main className="p-6 space-y-8">
        <section className="text-center">
          <p className="text-lg mb-4">
            Discovery? Yes, you heard it right! That's our goal, and we invite you, yes you, to join us and our community and help us grow.
          </p>
          <a 
            href="https://discord.gg/hTVphcJUYX" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <Discord className="inline-block mr-2" />
            Join Our Discord Server
          </a>
        </section>

        <section className="bg-teal-50 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-teal-800">FEATURES</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Anchor className="flex-shrink-0 w-6 h-6 text-teal-600 mr-2" />
              <p>You can stay in any channels for up to 24 hours and never get disconnected or just connect to a different channel.</p>
            </li>
            <li className="flex items-start">
              <Users className="flex-shrink-0 w-6 h-6 text-teal-600 mr-2" />
              <p>Our community is friendly and warm to new mascots or pirates.</p>
            </li>
            <li className="flex items-start">
              <Ship className="flex-shrink-0 w-6 h-6 text-teal-600 mr-2" />
              <p>We support every game with ships, and not only ships.</p>
            </li>
            <li className="flex items-start">
              <Map className="flex-shrink-0 w-6 h-6 text-teal-600 mr-2" />
              <p>Map Table which can show you the best and most important in our server such as where the support is.</p>
            </li>
            <li className="flex items-start">
              <Palette className="flex-shrink-0 w-6 h-6 text-teal-600 mr-2" />
              <p>Our Design and gameplay is unique.</p>
            </li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Join Our Adventure</h2>
          <p className="mb-4">
            Embark on an exciting journey with DedPar Wevender. Whether you're a seasoned pirate or a newcomer to the seas, there's a place for you in our crew.
          </p>
          <a 
            href="https://discord.gg/hTVphcJUYX" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white text-teal-600 font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Set Sail Now!
          </a>
        </section>
      </main>

      <footer className="bg-teal-800 text-white p-6 mt-8">
        <p className="text-center">&copy; 2023 DedPar Wevender. All rights reserved.</p>
      </footer>
    </div>
  );
}