import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: "Sales",
            data: [12, 19, 3, 5, 2, 3, 6],
            fill: false,
            borderColor: "#005a98"
    
        },
        {
            label: "National Average",
            data: [3, 1, 7, 4, 12, 10, 4],
            fill: false,
            borderColor: "#005a98"
        }
    ],
};

const LineChart = () => {
    return <Line options={options} data={data} />;
}

export default LineChart;