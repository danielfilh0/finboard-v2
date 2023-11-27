'use client'

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  indexAxis: 'y' as const,
  elements: {},
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

export function BarChart({ labels, data }: BarChartProps) {
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

  return <Bar options={options} data={barChartData} />
}
