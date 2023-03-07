import React from 'react';
import {
    Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        backgroundColor: 'rgba(1,2,3,1)',
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Top Performances',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2, 3, 6],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [2, 12, 5, 9, 1, 4, 11],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const MyBarChart = () => {
    return <Bar options={options} data={data} />;
}

export default MyBarChart;