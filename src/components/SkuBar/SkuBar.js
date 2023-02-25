import { Tooltip } from '@mui/material';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import data from '../data.json';

const SkuBar = () => {
    return (
        <BarChart width={500} height={350} data={data.data} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart >
    )
}

export default SkuBar;