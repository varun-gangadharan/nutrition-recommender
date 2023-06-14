import React from 'react';
import { VegaLite } from 'react-vega';

const Chart = () => {
  const spec = {
    "width": 400,
    "height": 200,
    "data": { "url": "data/cars.json" },
    "mark": "point",
    "encoding": {
      "x": { "field": "Horsepower", "type": "quantitative" },
      "y": { "field": "Miles_per_Gallon", "type": "quantitative" },
    },
  };

  return <VegaLite spec={spec} />;
};

export default Chart;
