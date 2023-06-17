import React, { useEffect, useState } from 'react';

const Card = ({ title, image }) => (
  <div>
    <h2>{title}</h2>
    <img src={image} alt={title} />
  </div>
);

const Chart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div>
      {data.map(recipe => (
        <Card key={recipe.id} title={recipe.title} image={recipe.image} />
      ))}
    </div>
  );
};

export default Chart;