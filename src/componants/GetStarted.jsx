import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
    const navigate = useNavigate();
    const [repoUrl, setRepoUrl] = useState('')
    const [projectId, setProjectId] = useState('')
    const [loading, setLoading] = useState(false)
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    async function requestForVideo(request) {
        console.log(request);
        return await axios.post(BASE_URL + "/clone", request);
    }

    const handleSubmit = async () => {
        if (!repoUrl) {
            alert("Please enter a GitHub repository URL");
            return;
        }

        const request = { repoUrl };
        setLoading(true);

        try {
            const response = await requestForVideo(request);

            console.log(response.data?.data);

            // Axios auto-parses JSON
            const { project_id, video_id } = response.data?.data[0];

            setProjectId(project_id);

            alert("Video generation started");

            navigate(`/project/${project_id}`);

        } catch (error) {

            // 🔴 BACKEND SENT ERROR RESPONSE
            if (error.response) {
                console.error("Backend error:", error.response);

                alert(
                    error.response.data?.message ||
                    "Invalid repository or bad request"
                );

                // 🔴 NO RESPONSE (SERVER DOWN / CORS)
            } else if (error.request) {
                alert("Server not reachable. Please try again later.");

                // 🔴 OTHER ERROR
            } else {
                alert("Something went wrong.");
            }

        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-gray-50">

            {/* TOP HERO */}
            <section className="bg-blue-900 text-white py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        You Are Just One Step Ahead
                    </h1>
                    <p className="text-lg text-blue-100 max-w-3xl">
                        You are only one step ahead to see all the project insights.
                        Paste a GitHub repository link and let AI break down the entire project
                        into visuals, explanations, and quality metrics —
                        without reading the whole codebase.
                    </p>
                </div>
            </section>

            {/* INPUT SECTION */}
            <section className="max-w-5xl mx-auto px-6 mt-12">
                <div className="p-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        Analyze GitHub Repository
                    </h2>

                    <p className="text-gray-600 mb-6">
                        Enter a public GitHub repository URL below to generate
                        architecture diagrams, charts, and an AI explainer video.
                    </p>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">
                            GitHub Repository URL
                        </label>
                        <div className="flex items-center border rounded-lg px-3 py-3 focus-within:ring-2 focus-within:ring-blue-700">
                            <i className="ri-github-fill text-xl mr-3 text-gray-600"></i>
                            <input
                                type="text"
                                placeholder="https://github.com/username/repository"
                                className="w-full outline-none text-gray-800"
                                value={repoUrl}
                                onChange={(e) => setRepoUrl(e.target.value)}
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            Only public GitHub repositories are supported
                        </p>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition disabled:opacity-60"
                    >
                        {loading ? 'Analyzing Repository...' : 'Submit Repository'}
                    </button>
                </div>
            </section>

            {/* WHAT HAPPENS NEXT */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    What Happens After You Submit
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <i className="ri-git-repository-line text-4xl text-blue-700 mb-3"></i>
                        <h4 className="font-semibold mb-2">Repository Analysis</h4>
                        <p className="text-gray-600">
                            The system securely clones and scans the project.
                        </p>
                    </div>

                    <div>
                        <i className="ri-brain-line text-4xl text-blue-700 mb-3"></i>
                        <h4 className="font-semibold mb-2">AI Understanding</h4>
                        <p className="text-gray-600">
                            AI understands structure, flow, and design patterns.
                        </p>
                    </div>

                    <div>
                        <i className="ri-bar-chart-2-line text-4xl text-blue-700 mb-3"></i>
                        <h4 className="font-semibold mb-2">Insights & Charts</h4>
                        <p className="text-gray-600">
                            Architecture, quadrant, and radar charts are generated.
                        </p>
                    </div>

                    <div>
                        <i className="ri-video-line text-4xl text-blue-700 mb-3"></i>
                        <h4 className="font-semibold mb-2">Explainer Video</h4>
                        <p className="text-gray-600">
                            An AI avatar explains the project in a short video.
                        </p>
                    </div>
                </div>
            </section>

            {/* MOTIVATIONAL STRIP */}
            <section className="bg-blue-50 py-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-4">
                        One URL. Complete Understanding.
                    </h3>
                    <p className="text-gray-700">
                        Whether you are a student, faculty member, developer, or open-source contributor,
                        this platform helps you understand projects faster — without manual code reading.
                    </p>
                </div>
            </section>

        </div>
    )
}

export default GetStarted
