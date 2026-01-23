import {
    Chart as ChartJS,
    RadarController,
    LineElement,
    PointElement,
    RadialLinearScale,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadarController,
    LineElement,
    PointElement,
    RadialLinearScale,
    Filler,
    Tooltip,
    Legend,
);




function RadarChart({ data }) {

    const radarData = {
        labels: [
            'Code Quality',
            'Architecture',
            'Reliability',
            'Performance',
            'Security',
            'Testability',
        ],
        datasets: [{
            label: 'Project Analytics',
            data: data.data,
            fill: true,
            tension: 0.4,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    };

    return (
        <>
            <div style={{ height: '70vh', width: '70vw' }}  >
                <Radar data={radarData} />
            </div>
        </>
    );
}

export default RadarChart;
