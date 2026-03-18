// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { Radar } from 'react-chartjs-2';

// import { useAnalysisStore } from "../store/analysisDataStore";
// import RadarChart from "./RadarChart";

// const RadarPage = () => {
//     const { projectId } = useParams();
//     const BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     const { radarData, setRadarData } = useAnalysisStore();

//     useEffect(() => {
//         if (!radarData) {
//             axios
//                 .get(`${BASE_URL}/getRadarChart/${projectId}`)
//                 .then(res => {
//                     setRadarData(res.data.data);
//                 })
//                 .catch(err => {
//                     console.error("Failed to fetch radar chart", err);
//                 });
//         }
//     }, [projectId]);



//     return (
//         <div className="min-h-screen bg-gray-50 p-10">
//             <h1 className="text-3xl font-bold mb-6">
//                 Radar Chart Analysis
//             </h1>

//             {!radarData ? (
//                 <p className="text-gray-500">Loading radar chart...</p>
//             ) : (
//                 <RadarChart data={radarData[0]} />
//             )}
//         </div>
//     );
// };

// export default RadarPage;
// RadarPage.jsx
// RadarPage.jsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { useAnalysisStore } from "../store/analysisDataStore";
import RadarChart from "./RadarChart";

const RadarPage = () => {
    const { projectId } = useParams();
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const { radarData, setRadarData } = useAnalysisStore();

    useEffect(() => {
        if (!radarData) {
            axios
                .get(`${BASE_URL}/getRadarChart/${projectId}`)
                .then(res => setRadarData(res.data.data))
                .catch(err => console.error("Failed to fetch radar chart", err));
        }
    }, [projectId]);

    return (
        <div className="min-h-screen bg-[#e1e5f2] p-10">
            <h1 className="text-3xl font-bold text-[#022b3a] mb-6">
                Radar Chart Analysis
            </h1>

            {!radarData ? (
                <p className="text-[#1f7a8c]">Loading radar chart...</p>
            ) : (
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Info Panel (slightly bigger) */}
                    <div className="bg-[#ffffff] rounded-2xl shadow-lg p-6 lg:w-2/5">
                        <h2 className="text-xl font-semibold text-[#022b3a] mb-2">
                            How to Read This Chart
                        </h2>

                        <ul className="list-disc list-inside text-[#022b3a] space-y-1 mb-4">
                            <li><span className="font-bold">Code Quality</span> – Cleanliness and readability of code</li>
                            <li><span className="font-bold">Architecture</span> – Project structure and modular design</li>
                            <li><span className="font-bold">Reliability</span> – Error handling and stability</li>
                            <li><span className="font-bold">Performance</span> – Efficiency and optimization</li>
                            <li><span className="font-bold">Security</span> – Safe coding practices</li>
                            <li><span className="font-bold">Testability</span> – Ease of testing the code</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-[#022b3a] mb-2">Values Range</h3>
                        <ul className="list-none text-[#022b3a] mb-4">
                            <li>🟢 60–80 → Good</li>
                            <li>🟡 30–60 → Average</li>
                            <li>🔴 &lt;30 → Needs improvement</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-[#022b3a] mb-2">Interpretation</h3>
                        <ul className="list-disc list-inside text-[#022b3a] space-y-1">
                            <li>A larger, well-balanced shape = strong project</li>
                            <li>Uneven shape = weaknesses in specific areas</li>
                            <li>Small shape = overall poor quality</li>
                        </ul>

                        <p className="text-[#1f7a8c] mt-4">
                            Tip: Look for the lowest metric — that’s your biggest improvement area.
                        </p>
                    </div>

                    {/* Chart Panel (slightly smaller) */}
                    <div className="bg-[#ffffff] rounded-2xl shadow-lg p-6 lg:w-3/5">
                        <RadarChart data={radarData[0]} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default RadarPage;