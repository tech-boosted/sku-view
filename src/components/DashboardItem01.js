import React from 'react';
import BarChart from './Charts/BarChart';

const data = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Direct',
        data: [
          800, 1600, 900, 1300, 1950, 1700,
        ],
        backgroundColor: "#3b82f6",
        hoverBackgroundColor: "#60a5fa",
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'Indirect',
        data: [
          4900, 2600, 5350, 4800, 5200, 4800,
        ],
        backgroundColor: "#6366f1",
        hoverBackgroundColor: "#4f46e5",
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

const DashboardItem01 = () => {
    return(
        <BarChart data={data} width={595} height={248} />
    )
}

export default DashboardItem01;