import { Tooltip } from '@mui/material'
import React from 'react'
import {
  Bar,
  BarChart as BarChartRechart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis
} from 'recharts'
import data from './data.json'

const BarChart = () => {
  return (
    <BarChartRechart
      width={500}
      height={350}
      data={data.data}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey='pv'
        fill='#8884d8'
      />
      <Bar
        dataKey='uv'
        fill='#82ca9d'
      />
    </BarChartRechart>
  )
}

export default BarChart
