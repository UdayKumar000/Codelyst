import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAnalysisStore } from "../store/analysisDataStore.js";


const AnalysisPage = () => {

    const navigate = useNavigate();

    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const { projectId } = useParams();

    const [loading, setLoading] = useState(true);
    const {
        radarData,
        quadrantData,
        diagramUrl,
        setRadarData,
        setQuadrantData,
        setDiagramUrl,
        repoUrl,
        setRepoUrl
    } = useAnalysisStore();


    useEffect(() => {
        console.log("Fetching data for project ID:", projectId);

        if (!repoUrl) {
            axios.get(`${BASE_URL}/getRepoUrl/${projectId}`)
                .then(res => {
                    setRepoUrl(res.data.data[0]);
                })
                .catch(err => {
                    console.error("Failed to fetch repo URL", err);
                });
        }

        if (!radarData || !quadrantData || !diagramUrl) {
            console.log("Fetching data for project ID:", projectId);
            fetchAllData();
            console.log("data fetched")

        } else {
            console.log("Using cached Zustand data");
            setLoading(false);
        }
    }, [projectId]);

    const goToVideo = () => {
        navigate(`/analysis/${projectId}/video`);
    };

    const goToDiagram = () => {
        navigate(`/analysis/${projectId}/architecture`);
    };

    const goToQuadrant = () => {
        navigate(`/analysis/${projectId}/quadrant`);
    };

    const goToRadar = () => {
        navigate(`/analysis/${projectId}/radar`);
    };


    async function fetchAllData() {
        const results = await Promise.allSettled([
            axios.get(`${BASE_URL}/getRadarChart/${projectId}`),
            axios.get(`${BASE_URL}/getQuadrantChart/${projectId}`),
            axios.get(`${BASE_URL}/getC4Diagram/${projectId}`)
        ]);

        const [radarRes, quadrantRes, diagramRes] = results;

        console.log("Fetch results:", results);

        console.log("Radar Result:", radarRes.value?.data?.data);
        console.log("Quadrant Result:", quadrantRes.value?.data?.data);
        console.log("Diagram Result:", diagramRes.value?.data?.data);

        // // Radar
        if (radarRes.status === "fulfilled") {
            setRadarData(radarRes.value.data.data);
        } else {
            console.error("Radar failed", radarRes.reason);
        }

        // // Quadrant
        if (quadrantRes.status === "fulfilled") {
            setQuadrantData(quadrantRes.value.data.data);
        } else {
            console.error("Quadrant failed", quadrantRes.reason);
        }

        // // Diagram
        if (diagramRes.status === "fulfilled") {
            setDiagramUrl(diagramRes.value.data.data[0]);
        } else {
            console.error("Diagram failed", diagramRes.reason);
        }

        setLoading(false);
    }





    return (
        <div className="min-h-screen bg-gray-50">

            {/* TOP REPO INFO BOX */}
            <section className="max-w-6xl mx-auto px-6 pt-12">
                <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <i className="ri-github-fill text-2xl"></i>
                            GitHub Repository
                        </h2>
                        <p className="text-gray-600 mt-1">
                            {repoUrl}
                        </p>
                    </div>

                    <span className="inline-block bg-blue-100 text-blue-700 text-sm px-4 py-1 rounded-full">
                        Previously Analyzed
                    </span>
                </div>
            </section>

            {/* AI VIDEO SECTION */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <i className="ri-video-line text-blue-700"></i>
                            AI Explainer Video
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Watch how AI explains the entire project — including its purpose,
                            structure, strengths, weaknesses, and overall code quality —
                            without reading the repository.
                        </p>
                        <button
                            onClick={goToVideo}
                            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold">
                            Get the Video
                        </button>
                    </div>

                    <div className="bg-gray-200 rounded-xl h-120 flex items-center justify-center text-gray-500">
                        <img className='w-full h-full' src="https://mfsroucbgubytjzluzdt.supabase.co/storage/v1/object/public/text_files/videothumb.png" alt="" />
                    </div>

                </div>
            </section>

            {/* ARCHITECTURE DIAGRAM */}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

                    <div className="order-2 md:order-1 bg-gray-200 rounded-xl h-120 flex items-center justify-center text-gray-500">
                        <img className='w-full h-full' src="https://images.doclify.net/gleek-web/d/b41d3569-22ba-4ff3-a039-5b6bce4bd74a.png" alt="" />
                    </div>

                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <i className="ri-node-tree text-blue-700"></i>
                            Architecture Diagram
                        </h3>
                        <p className="text-gray-600 mb-6">
                            A clear visual breakdown of modules, layers, and component
                            interactions to understand how the system is designed.
                        </p>
                        <button
                            onClick={goToDiagram}
                            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold">
                            Get the Diagram
                        </button>
                    </div>

                </div>
            </section>

            {/* SCATTER / QUADRANT CHART */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <i className="ri-bubble-chart-line text-blue-700"></i>
                            Quadrant / Scatter Chart
                        </h3>
                        <p className="text-gray-600 mb-6">
                            This chart positions the project based on complexity,
                            scalability, maintainability, and maturity, helping users
                            quickly judge project health.
                        </p>
                        <button
                            onClick={goToQuadrant}
                            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold">
                            Get the Chart
                        </button>
                    </div>

                    <div className="bg-gray-200 rounded-xl h-120 flex items-center justify-center text-gray-500">
                        <img className='w-full h-full' src="https://www.outsystems.com/forge-assets/d3484848-7bab-47c2-a447-ba0b8cde70f7/screenshots/fullsize_6a85144c-266e-4cf4-bb31-990849692ca8-20241212122136.png" alt="" />
                    </div>

                </div>
            </section>

            {/* RADAR CHART */}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

                    <div className="order-2 md:order-1 bg-gray-200 rounded-xl h-120 flex items-center justify-center text-gray-500">
                        <img className='w-full h-full' src="https://mfsroucbgubytjzluzdt.supabase.co/storage/v1/object/public/text_files/radarchart.png" alt="" />
                    </div>

                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <i className="ri-radar-line text-blue-700"></i>
                            Radar Chart Analysis
                        </h3>
                        <p className="text-gray-600 mb-6">
                            A deep technical evaluation showing code quality, security,
                            performance, maintainability, and production readiness.
                        </p>
                        <button
                            onClick={goToRadar}
                            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold">
                            Get the Radar Chart
                        </button>
                    </div>

                </div>
            </section>

            {/* FOOTER NOTE  */}
            <section className="bg-blue-50 py-10 px-6">
                <p className="text-center text-gray-700 max-w-3xl mx-auto">
                    Note: The AI-generated analysis is based on the current state of
                    the codebase and may not reflect recent changes or context beyond
                    the repository content.
                </p>
            </section>

        </div>
    )
}

export default AnalysisPage
