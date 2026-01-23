import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAnalysisStore } from "../store/analysisDataStore";

const ArchitecturePage = () => {
    const { projectId } = useParams();
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const { diagramUrl, setDiagramUrl } = useAnalysisStore();

    useEffect(() => {
        if (!diagramUrl) {
            axios
                .get(`${BASE_URL}/getC4Diagram/${projectId}`)
                .then(res => {
                    setDiagramUrl(res.data.data[0]);
                })
                .catch(err => {
                    console.error("Failed to fetch architecture diagram", err);
                });
        }
    }, [projectId]);

    return (
        <div className="min-h-screen bg-gray-50 p-10">
            <h1 className="text-3xl font-bold mb-6">
                Architecture Diagram
            </h1>

            {!diagramUrl ? (
                <p className="text-gray-500">Loading architecture diagram...</p>
            ) : (
                <img
                    src={diagramUrl}
                    alt="Architecture Diagram"
                    className="rounded-xl shadow-lg max-w-full"
                />
            )}
        </div>
    );
};

export default ArchitecturePage;
