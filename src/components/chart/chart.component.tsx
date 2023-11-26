import React from 'react'
import { Line, defaults } from "react-chartjs-2";


defaults.global.tooltips.enabled = true;// to appears popup with information for each point in chart
defaults.global.legend.position = 'top';


type Dataset={
  label: string,
  data: number[],
  fill: boolean,
  borderColor: string,
  tension: number
}


type Props={
  datasets:Dataset[]
  labels:string[],
}


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul', 'August'],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};
const config = {

  title: {
    display: true,
    text: 'Concentración de gases en el tiempo[ppm]'
  },
  elements: {
    point: {
      radius: 5
    }
  },
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
        },
      },
    ],

    xAxes: [

      {
        scaleLabel: {
          display: true,
          labelString: 'datetime - [YYYY-MM-DDTHH:MM:SS]'
        },

      },


    ]


  },
  legend: {
    labels: {
      fontSize: 15,
    },
  },
}


const Chart = (props:Props) => {



  return (
    <>
      <div className="chart">
        <Line data={{datasets:props.datasets,
                      labels:props.labels}}
          height={400}
          width={600}
          options={config}
        />
      </div>

    </>
  )
}


export default Chart;