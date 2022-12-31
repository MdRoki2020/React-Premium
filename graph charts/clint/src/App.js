import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import { AreaChart,BarChart,Line,LineChart, Bar, XAxis,Area, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';


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
        <Fragment>
          <div className='container'>
        <div className='row my-5'>


          <div className='col-md-3'>
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
          </div>


          <div className='col-md-3'>
              <ResponsiveContainer width="100%" height="100%">
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
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
              </ResponsiveContainer>
          </div>


          <div className='col-md-3'>
              <ResponsiveContainer>
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
              </ResponsiveContainer>
          </div>


          <div className='col-md-3'>

          <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

          </div>
        </div>
      </div>

        </Fragment>
    );
}
