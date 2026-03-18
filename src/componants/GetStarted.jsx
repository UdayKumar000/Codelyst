import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const GetStarted = () => {
    const navigate = useNavigate();
    const [repoUrl, setRepoUrl] = useState('')
    const [projectId, setProjectId] = useState('')
    const [loading, setLoading] = useState(false)
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    async function requestForVideo(request) {
        return await axios.post(BASE_URL + "/clone", request, { withCredentials: false });
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
            const { project_id } = response.data?.data[0];
            setProjectId(project_id);
            alert("Video generation started");
            navigate(`/project/${project_id}`);
        } catch (error) {
            if (error.response) {
                alert(error.response.data?.message || "Invalid repository or bad request");
            } else if (error.request) {
                alert("Server not reachable. Please try again later.");
            } else {
                alert("Something went wrong.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* <Navbar /> */}

            <div className="pt-12 bg-[#ffffffff] min-h-screen">

                {/* HERO SECTION */}
                <section className="relative bg-[#1f7a8cff] text-white py-20 px-6 text-center overflow-hidden">
                {/* Decorative floating circles */}
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#bfdbf7ff] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#e1e5f2ff] rounded-full opacity-20 animate-pulse"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
                    <span className="text-[#bfdbf7ff]">You Are Just One Step Ahead</span> <br />
                    See Your <span className="text-[#e1e5f2ff] font-semibold">GitHub Projects</span> in a Whole New Way
                    </h1>

                    <p className="text-base md:text-lg max-w-3xl mx-auto text-[#ffffffff]">
                    Paste a <span className="font-semibold text-[#bfdbf7ff]">GitHub repository link</span> and let AI 
                    <span className="font-semibold text-[#e1e5f2ff]"> visualize, analyze,</span> and 
                    <span className="font-semibold text-[#bfdbf7ff]"> explain your project </span>
                    — no boring code reading required.
                    </p>
                </div>
                </section>

                {/* EXAMPLES */}
                <section className="max-w-5xl mx-auto px-6 mt-10">
                    <div className="bg-[#ffffffff] rounded-xl p-6 shadow-sm border">
                        <h2 className="text-2xl font-semibold mb-4 text-[#022b3aff]">
                            Examples
                        </h2>

                        <p className="text-[#022b3aff] mb-6">
                            Look at these previously analyzed public repositories to get an idea of how the platform works.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4">
                            <button
                                onClick={() => navigate(`project/5`)}
                                className="border border-[#1f7a8cff] text-[#1f7a8cff] hover:bg-[#bfdbf7ff] font-medium px-6 py-3 rounded-lg transition"
                            >
                                Example Repo 1
                            </button>
                            <button
                                onClick={() => navigate(`project/2`)}
                                className="border border-[#1f7a8cff] text-[#1f7a8cff] hover:bg-[#bfdbf7ff] font-medium px-6 py-3 rounded-lg transition"
                            >
                                Example Repo 2
                            </button>
                            <button
                                onClick={() => navigate(`project/3`)}
                                className="border border-[#1f7a8cff] text-[#1f7a8cff] hover:bg-[#bfdbf7ff] font-medium px-6 py-3 rounded-lg transition"
                            >
                                Example Repo 3
                            </button>
                        </div>
                    </div>
                </section>

                {/* INPUT */}
                <section className="max-w-5xl mx-auto px-6 mt-12">
                    <div className="p-8 bg-[#e1e5f2ff] rounded-xl shadow">
                        <h2 className="text-2xl font-semibold mb-4 text-[#022b3aff]">
                            Analyze GitHub Repository
                        </h2>

                        <p className="text-[#022b3aff] mb-6">
                            Enter a public GitHub repository URL below to generate architecture diagrams, charts, and an AI explainer video.
                        </p>

                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2 text-[#022b3aff]">
                                GitHub Repository URL
                            </label>
                            <div className="flex items-center border border-[#1f7a8cff] rounded-lg px-3 py-3 focus-within:ring-2 focus-within:ring-[#1f7a8cff]">
                                <input
                                    type="text"
                                    placeholder="https://github.com/username/repository"
                                    className="w-full outline-none text-[#022b3aff]"
                                    value={repoUrl}
                                    onChange={(e) => setRepoUrl(e.target.value)}
                                />
                            </div>
                            <p className="text-xs text-[#022b3aff] mt-2">
                                Only public GitHub repositories are supported
                            </p>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="bg-[#1f7a8cff] hover:bg-[#022b3aff] text-[#ffffffff] font-semibold px-8 py-3 rounded-lg transition disabled:opacity-60"
                        >
                            {loading ? 'Analyzing Repository...' : 'Submit Repository'}
                        </button>
                    </div>
                </section>

                {/* WHAT HAPPENS NEXT */}
                <section className="max-w-6xl mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold mb-12 text-center text-[#022b3aff]">
                        What Happens After You Submit
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <i className="ri-git-repository-line text-4xl text-[#1f7a8cff] mb-3"></i>
                            <h4 className="font-semibold mb-2 text-[#022b3aff]">Repository Analysis</h4>
                            <p className="text-[#022b3aff]">The system securely clones and scans the project.</p>
                        </div>

                        <div>
                            <i className="ri-brain-line text-4xl text-[#1f7a8cff] mb-3"></i>
                            <h4 className="font-semibold mb-2 text-[#022b3aff]">AI Understanding</h4>
                            <p className="text-[#022b3aff]">AI understands structure, flow, and design patterns.</p>
                        </div>

                        <div>
                            <i className="ri-bar-chart-2-line text-4xl text-[#1f7a8cff] mb-3"></i>
                            <h4 className="font-semibold mb-2 text-[#022b3aff]">Insights & Charts</h4>
                            <p className="text-[#022b3aff]">Architecture, quadrant, and radar charts are generated.</p>
                        </div>

                        <div>
                            <i className="ri-video-line text-4xl text-[#1f7a8cff] mb-3"></i>
                            <h4 className="font-semibold mb-2 text-[#022b3aff]">Explainer Video</h4>
                            <p className="text-[#022b3aff]">An AI avatar explains the project in a short video.</p>
                        </div>
                    </div>
                </section>

                {/* MOTIVATIONAL STRIP */}
                <section className="py-12 px-6" style={{ backgroundColor: "#bfdbf7ff" }}>
                    <div className="max-w-4xl mx-auto text-center text-[#022b3aff]">
                        <h3 className="text-2xl font-bold mb-4">
                            One URL. Complete Understanding.
                        </h3>
                        <p>
                            Whether you are a student, faculty member, developer, or open-source contributor,
                            this platform helps you understand projects faster — without manual code reading.
                        </p>
                    </div>
                </section>

            </div>
        </>
    )
}

export default GetStarted;