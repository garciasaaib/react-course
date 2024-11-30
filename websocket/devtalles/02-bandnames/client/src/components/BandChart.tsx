import { Chart } from 'chart.js';
import React from 'react'

export const BandChart = () => {

  const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  
  if(!ctx) return null;
  else {
  
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  return (
    <canvas id="myChart"></canvas>
  )
}
