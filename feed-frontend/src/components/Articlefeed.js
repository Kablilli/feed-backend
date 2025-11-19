import React, { useEffect, useState } from 'react';

function ArticleFeed() {
  const [articles, setArticles] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('https://feed-backend-3g55.onrender.com/api/articles') // Cambiar a la URL de Render si despliegas
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  if (selected) {
    return (
      <div>
        <button onClick={() => setSelected(null)}>Volver al feed</button>
        <h2>{selected.title}</h2>
        <p>{selected.content}</p>
      </div>
    );
  }

  return (
    <div>
      {articles.map(a => (
        <div key={a.id} style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
          <h3>{a.title}</h3>
          <p>{a.summary}</p>
          <button onClick={() => setSelected(a)}>Leer más</button>
        </div>
      ))}
    </div>
  );
}

export default ArticleFeed;
