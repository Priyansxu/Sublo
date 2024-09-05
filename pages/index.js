import React from 'react';
import { Search, Share2 } from 'lucide-react';

export default function GoogleArtsAndCulture() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <header className="flex justify-between items-center p-4 border-b">
        <button className="text-gray-600">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold">Google Arts & Culture</h1>
        <button className="text-gray-600">
          <Search className="w-6 h-6" />
        </button>
      </header>

      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Who will you invite to dinner?</h2>
        <p className="text-sm text-gray-600 mb-4">Pick a royal guest and learn about culture</p>

        <div className="relative mb-4">
          <img src="/placeholder.svg" alt="Queen Victoria" className="w-full h-48 object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold">Queen Victoria</h3>
            <p className="text-sm">Fond of ostrich egg omelettes and petit fours</p>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Neues Museum</button>
          <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Palace of Versailles</button>
        </div>

        <button className="text-blue-600 text-sm font-semibold mb-8">More historic dinner guests</button>

        <div className="bg-coral-100 p-4 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-2">Create your own manga character</h3>
          <p className="text-sm mb-4">With a little help from Machine Learning</p>
          <img src="/placeholder.svg" alt="Manga characters" className="w-full h-32 object-cover rounded-lg mb-4" />
          <img src="/placeholder.svg" alt="Manga sketches" className="w-full h-24 object-cover rounded-lg" />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Get Some Manga Inspiration</h3>
            <Share2 className="w-5 h-5 text-gray-600" />
          </div>
          <p className="text-sm text-gray-600">Explore the history and culture of Japanese comics</p>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <img src="/placeholder.svg" alt="Manga 1" className="w-full h-20 object-cover rounded" />
            <img src="/placeholder.svg" alt="Manga 2" className="w-full h-20 object-cover rounded" />
            <img src="/placeholder.svg" alt="Manga 3" className="w-full h-20 object-cover rounded" />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">What is Manga?</h3>
            <Share2 className="w-5 h-5 text-gray-600" />
          </div>
          <p className="text-sm text-gray-600">Go on a cartoon adventure, from Edo-period Japan to today</p>
          <img src="/placeholder.svg" alt="Drawing manga" className="w-full h-32 object-cover rounded-lg mt-2" />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">More Games to Play</h3>
            <Share2 className="w-5 h-5 text-gray-600" />
          </div>
          <p className="text-sm text-gray-600">Crosswords, coloring, and more</p>
        </div>
      </main>

      <footer className="p-4 border-t">
        <h3 className="font-semibold mb-2">Today's top picks</h3>
      </footer>
    </div>
  );
}