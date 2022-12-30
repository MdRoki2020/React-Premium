import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mobile',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Laptop',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Drone',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'watch',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Bike',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Cicle',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Car',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function App() {
  
    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    );
}
