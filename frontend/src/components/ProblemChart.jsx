import React from 'react';
import { Bar } from 'react-chartjs-2';
import {

Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from 'chart.js';

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

const ProblemChart = ({ data, title }) => {
// Example data structure if not provided
const defaultData = {
    labels: ['Math', 'Science', 'English', 'History'],
    datasets: [
        {
            label: 'Problems Solved',
            data: [12, 19, 7, 14],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
        },
    ],
};

const chartData = data || defaultData;

const options = {
    responsive: true,
    plugins: {
        legend: { position: 'top' },
        title: {
            display: !!title,
            text: title || 'Problems Solved by Subject',
        },
    },
};

return (
    <div>
        <Bar data={chartData} options={options} />
    </div>
);
};

export default ProblemChart;