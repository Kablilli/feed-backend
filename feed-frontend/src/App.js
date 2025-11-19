import React from "react";
import ArticleFeed from "./components/Articlefeed";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="bg-blue-600 dark:bg-blue-800 text-white py-4 shadow">
        <h1 className="text-3xl text-center font-bold">Mi Feed de Artículos</h1>
      </header>
      <main className="p-4">
        <ArticleFeed />
      </main>
      <footer className="text-center text-gray-500 dark:text-gray-400 mt-8">
        &copy; 2025 Mi Feed App
      </footer>
    </div>
  );
}

export default App;

