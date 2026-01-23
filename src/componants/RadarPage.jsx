import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Radar } from 'react-chartjs-2';

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
                .then(res => {
                    setRadarData(res.data.data);
                })
                .catch(err => {
                    console.error("Failed to fetch radar chart", err);
                });
        }
    }, [projectId]);



    return (
        <div className="min-h-screen bg-gray-50 p-10">
            <h1 className="text-3xl font-bold mb-6">
                Radar Chart Analysis
            </h1>

            {!radarData ? (
                <p className="text-gray-500">Loading radar chart...</p>
            ) : (
                <RadarChart data={radarData[0]} />
            )}
        </div>
    );
};

export default RadarPage;
