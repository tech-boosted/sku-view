import React from 'react';
import DoughnutChart from './Charts/DoughnutChart';

const data = {
    labels: ['United States', 'Italy', 'USA', 'Other'],
    datasets: [
        {
            label: 'Top Countries',
            data: [
                3, 13, 23, 10,
            ],
            backgroundColor: ["#6366f1", "#60a5fa", "#3730a3"],
            hoverBackgroundColor: ["#4f46e5", "#3b82f6", "#312e81"],
            hoverBorderColor: "ffffff",
        },
    ],
};

const DashboardItem02 = () => {
    return(
        <DoughnutChart
              data={data} width={389} height={260} />
    )
}

export default DashboardItem02;