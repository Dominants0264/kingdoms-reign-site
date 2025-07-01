
import React from 'react';

export default function HomePage() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Kingdoms Reign</h1>
      <p className="text-lg">The ultimate MMO kingdom-building strategy game. Coming soon to iOS and Android.</p>
      <div className="mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded m-2">App Store</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded m-2">Google Play</button>
      </div>
    </div>
  );
}
