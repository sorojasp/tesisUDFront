
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