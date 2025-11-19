import React, { useEffect, useState } from "react";

function ArticleFeed() {
  const [articles, setArticles] = useState([]);
  const [selected, setSelected] = useState(null);

  // Cambia esta URL por la de tu backend en Render
  const backendURL = "https://feed-backend.onrender.com";

  useEffect(() => {
    fetch(`${backendURL}/api/feed`)
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error("Error fetching articles:", err));
  }, []);

  if (selected) {
    return (
      <div className="max-w-xl mx-auto mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <button
          className="mb-4 bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
          onClick={() => setSelected(null)}
        >
          ← Volver al feed
        </button>
        <h2 className="text-2xl font-bold mb-4">{selected.title}</h2>
        <p className="text-gray-800 dark:text-gray-200">{selected.content}</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-8">
      {articles.map((a) => (
        <div
          key={a.id}
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4 transition hover:shadow-lg"
        >
          <h3 className="text-xl font-bold mb-2">{a.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{a.summary}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setSelected(a)}
          >
            Leer más
          </button>
        </div>
      ))}
    </div>
  );
}

export default ArticleFeed;

