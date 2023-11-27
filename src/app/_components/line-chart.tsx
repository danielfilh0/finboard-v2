'use client'

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
}

interface BarChartProps {
  labels: string[]
  data: number[]
}

export function LineChart({ labels, data }: BarChartProps) {
  const barChartData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data,
        borderColor: 'black',
        backgroundColor: 'black',
      },
    ],
  }

  return <Line options={options} data={barChartData} />
}
