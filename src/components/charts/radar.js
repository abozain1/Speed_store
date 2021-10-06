import React from "react";

import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

const Radar = () => {
 
  const data = [
    {
      data: {
        1: 0.88,
        2: 0.44,
        4: 0.44,
        6: 0.44,
        8: 0.88,
        10: 0.44,
        12: 0.44,
        14: 0.44,
        16: 0.44,
        18: 0.88,
        20: 0.44,
        22: 0.44,
        
      },
      meta: { color: "rgb(199,227,235)" },
    },
    {
      data: {
        1: 0.22,
        2: 0.33,
        4: 0.88,
        6: 0.33,
        8: 0.44,
        10: 0.55,
        12: 0.88,
        14: 0.44,
        16: 0.33,
        18: 0.44,
        20: 0.88,
        22: 0.44,
        
      },
      meta: { color: "rgb(159,221,227)" },
    },
  ];

  const captions = {
    // columns
    1: "24:00",
    2: "02:00",
    4: "04:00",
    6: "06:00",
    8: "08:00",
    10: "10:00",
    12: "12:00",
    14: "14:00",
    16: "16:00",
    18: "18:00",
    20: "20:00",
    22: "22:00",
    
  };

  return (
    <div>
      <RadarChart captions={captions} data={data} size={150} />
    </div>
  );
};

export default Radar;
