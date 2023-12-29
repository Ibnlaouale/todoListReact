// ./components/PieChart.js

import React from "react"; // Import the necessary library such as React for now.

import Chart from "chart.js/auto"; // Import the Chart.js library.

import { Pie } from "react-chartjs-2"; // In the react-chartjs-2 library, import the Pie component.

// Define an array of labels.
const labels = ['Terminé', 'Encours', 'Nouveau'];

// Defined an object.
const data = {
  labels: labels,
  datasets: [
    {
      label: "Tasks",
      backgroundColor: ['#61DAFB', '#00FFCC', '#086171'],
      data: [20, 30, 45],
    },
  ],
};

const PieChart = () => {
  return (
    <div>
        <h1 style={{textAlign:'center', color:'#6aa7aa'}}>Statut</h1>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
