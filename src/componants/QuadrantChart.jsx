import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Scatter } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    annotationPlugin,
    ChartDataLabels
);



function setColors(data) {
    data.forEach(element => {
        element.pointRadius = 8;

        switch (element.label) {
            case 'Controllers':
                element.backgroundColor = 'green';
                break;
            case 'Services':
                element.backgroundColor = 'blue';
                break;
            case 'Repositories':
                element.backgroundColor = 'red';
                break;
            case 'Utils':
                element.backgroundColor = 'black';
                break;
            case 'Middlewares':
                element.backgroundColor = 'yellow';
                break;
            case 'Configurations':
                element.backgroundColor = 'purple';
                break;
            case 'Models':
                element.backgroundColor = 'orange';
                break;
            case 'Testa':
                element.backgroundColor = 'pink';
                break;
            default:
                break;
        }
    });
}




// const data = {
//     datasets: [
//         {
//             label: 'Controllers',
//             data: [
//                 { x: 75, y: 80, label: 'Project A' },
//                 { x: 40, y: 70, label: 'Project B' },
//                 { x: 30, y: 25, label: 'Project C' }],
//             backgroundColor: 'green',
//             pointRadius: 8
//         },
//         {
//             label: 'Services',
//             data: [{ x: 75, y: 80 }, { x: 40, y: 90 }, { x: 60, y: 30 }, { x: 20, y: 40 }],
//             backgroundColor: 'blue',
//             pointRadius: 8
//         },
//         {
//             label: 'Repositories',
//             data: [{ x: 75, y: 80 }, { x: 40, y: 60 }, { x: 85, y: 30 }, { x: 25, y: 10 }],
//             backgroundColor: 'red',
//             pointRadius: 8
//         },
//         {
//             label: 'Utils',
//             data: [{ x: 75, y: 80 }, { x: 40, y: 58 }, { x: 60, y: 98 }, { x: 20, y: 25 }],
//             backgroundColor: 'black',
//             pointRadius: 8
//         },
//         {
//             label: 'Middlewares',
//             data: [{ x: 75, y: 80 }, { x: 78, y: 90 }, { x: 69, y: 30 }, { x: 20, y: 55 }],
//             backgroundColor: 'yellow',
//             pointRadius: 8
//         },
//         {
//             label: 'Configurations',
//             data: [{ x: 75, y: 80 }, { x: 45, y: 90 }, { x: 60, y: 24 }, { x: 20, y: 78 }],
//             backgroundColor: 'purple',
//             pointRadius: 8
//         },
//         {
//             label: 'Models',
//             data: [{ x: 75, y: 80 }, { x: 40, y: 60 }, { x: 85, y: 30 }, { x: 25, y: 10 }],
//             backgroundColor: 'orange',
//             pointRadius: 8
//         },
//         {
//             label: 'Tests',
//             data: [{ x: 75, y: 20 }, { x: 40, y: 11 }, { x: 85, y: 12 }, { x: 25, y: 10 }],
//             backgroundColor: 'pink',
//             pointRadius: 8
//         },

//     ]
// };

const options = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
        x: {
            min: 0,
            max: 100,
            title: {
                display: true,
                text: 'Code Quality'
            }
        },
        y: {
            min: 0,
            max: 100,
            title: {
                display: true,
                text: 'Business Logic'
            }
        }
    },

    plugins: {
        datalabels: {
            formatter: (value) => value.label, // 🔑 label per point
            align: 'top',
            anchor: 'end',
            font: {
                size: 12,
                weight: 'bold'
            }
        },
        annotation: {
            annotations: {

                verticalLine: {
                    type: 'line',
                    xMin: 50,
                    xMax: 50,
                    borderColor: 'gray',
                    borderWidth: 2
                },
                horizontalLine: {
                    type: 'line',
                    yMin: 50,
                    yMax: 50,
                    borderColor: 'gray',
                    borderWidth: 2
                },

                // Quadrant labels
                q1: {
                    type: 'label',
                    xValue: 75,
                    yValue: 98,
                    content: ['Production Ready'],
                    font: { size: 12 }
                },
                q2: {
                    type: 'label',
                    xValue: 25,
                    yValue: 98,
                    content: ['Good Logic, Poor Code'],
                    font: { size: 12 }
                },
                q3: {
                    type: 'label',
                    xValue: 25,
                    yValue: 48,
                    content: ['Needs Improvement'],
                    font: { size: 12 }
                },
                q4: {
                    type: 'label',
                    xValue: 75,
                    yValue: 48,
                    content: ['Clean Code, Weak Logic'],
                    font: { size: 12 }
                }
            }
        }
    }
};

function QuadrantChart({ quadrantData }) {
    setColors(quadrantData);
    const data = {
        datasets: quadrantData
    }


    return (
        <>

            <div style={{ height: '70vh' }} >
                <Scatter data={data} options={options} />
            </div >

        </>
    );
}

export default QuadrantChart;
