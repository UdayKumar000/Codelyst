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
                .then(res => {
                    setQuadrantData(res.data.data);
                })
                .catch(err => {
                    console.error("Failed to fetch quadrant chart", err);
                });
        }
    }, [projectId]);

    console.log(quadrantData)

    return (
        <div className="min-h-screen bg-gray-50 p-10">
            <h1 className="text-3xl font-bold mb-6">
                Quadrant / Scatter Chart
            </h1>

            {!quadrantData ? (
                <p className="text-gray-500">Loading quadrant chart...</p>
            ) : (
                <QuadrantChart quadrantData={quadrantData} />
            )}
        </div>
    );
};

export default QuadrantPage;
