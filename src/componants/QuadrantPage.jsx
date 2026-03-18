// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useAnalysisStore } from "../store/analysisDataStore";
// import QuadrantChart from "./QuadrantChart";
// const QuadrantPage = () => {
//     const { projectId } = useParams();
//     const BASE_URL = import.meta.env.VITE_API_BASE_URL;

//     const { quadrantData, setQuadrantData } = useAnalysisStore();

//     useEffect(() => {
//         if (!quadrantData) {
//             axios
//                 .get(`${BASE_URL}/getQuadrantChart/${projectId}`)
//                 .then(res => {
//                     setQuadrantData(res.data.data);
//                 })
//                 .catch(err => {
//                     console.error("Failed to fetch quadrant chart", err);
//                 });
//         }
//     }, [projectId]);

//     console.log(quadrantData)

//     return (
//         <div className="min-h-screen bg-gray-50 p-10">
//             <h1 className="text-3xl font-bold mb-6">
//                 Quadrant / Scatter Chart
//             </h1>

//             {!quadrantData ? (
//                 <p className="text-gray-500">Loading quadrant chart...</p>
//             ) : (
//                 <QuadrantChart quadrantData={quadrantData} />
//             )}
//         </div>
//     );
// };

// export default QuadrantPage;

// QuadrantPage.jsx
// QuadrantPage.jsx
// QuadrantPage.jsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAnalysisStore } from "../store/analysisDataStore";
import QuadrantChart from "./QuadrantChart";

const QuadrantPage = () => {
    const { projectId } = useParams();
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const { quadrantData, setQuadrantData } = useAnalysisStore();

    useEffect(() => {
        if (!quadrantData) {
            axios
                .get(`${BASE_URL}/getQuadrantChart/${projectId}`)
                .then(res => setQuadrantData(res.data.data))
                .catch(err => console.error("Failed to fetch quadrant chart", err));
        }
    }, [projectId]);

    return (
        <div className="min-h-screen bg-[#e1e5f2] p-10">
            <h1 className="text-3xl font-bold text-[#022b3a] mb-6">
                Code Quality vs Business Logic
            </h1>

            {!quadrantData ? (
                <p className="text-[#1f7a8c]">Loading quadrant chart...</p>
            ) : (
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Instructions Panel */}
                    <div className="bg-[#ffffff] rounded-2xl shadow-lg p-6 lg:w-1/3">
                        <h2 className="text-xl font-semibold text-[#022b3a] mb-2">
                            How to Read This Chart
                        </h2>
                        <ul className="list-disc list-inside text-[#022b3a] space-y-1 mb-4">
                            <li>Each dot = one file in the repository</li>
                            <li>X-axis = Code Quality (clean code, readability, structure)</li>
                            <li>Y-axis = Business Logic (correctness and strength of implementation)</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-[#022b3a] mb-2">Quadrants Meaning</h3>
                        <ul className="list-disc list-inside text-[#022b3a] space-y-1">
                            <li>
                                <span className="font-bold">Top Right (High X, High Y):</span> Best files (clean + strong logic)
                            </li>
                            <li>
                                <span className="font-bold">Top Left (Low X, High Y):</span> Logic is good but code quality needs improvement
                            </li>
                            <li>
                                <span className="font-bold">Bottom Right (High X, Low Y):</span> Clean code but weak or incomplete logic
                            </li>
                            <li>
                                <span className="font-bold">Bottom Left (Low X, Low Y):</span> Needs major improvement
                            </li>
                        </ul>

                        <p className="text-[#1f7a8c] mt-4">
                            Tip: Hover on a point to see the file name and its scores.
                        </p>
                    </div>

                    {/* Chart Panel */}
                    <div className="bg-[#ffffff] rounded-2xl shadow-lg p-6 flex-1">
                        <QuadrantChart quadrantData={quadrantData} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuadrantPage;