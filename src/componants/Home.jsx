import React from 'react'
import { FaBeer } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { PiGearFineBold } from "react-icons/pi";
import { MdOutlineInsights } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { TbBrandOpenSourceFilled } from "react-icons/tb";
import { PiBagFill } from "react-icons/pi";
import { SiXdadevelopers } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { IoMdVideocam } from "react-icons/io";
import { BsDiagram3Fill } from "react-icons/bs";
import { PiChartScatter } from "react-icons/pi";
import { AiOutlineRadarChart } from "react-icons/ai";

const Home = () => {
    return (
        <>
            {/* HERO SECTION */}


            <section className="bg-blue-900 text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Turn Any GitHub Repository Into Visual Insights
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-blue-100">
                    Paste a GitHub repository URL and get architecture diagrams, technical insights,
                    code quality analysis, and an AI-generated explainer video —
                    <span className="font-semibold text-white">
                        {' '}without reading the entire repository.
                    </span>
                </p>

                <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-lg transition">
                    Get Started
                </button>
            </section>

            {/* NO NEED TO READ CODE */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-md">
                    <h2 className="text-2xl font-bold mb-3">
                        No Need to Read the Entire Repository
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        This platform eliminates the need to manually go through hundreds of files.
                        From a single GitHub URL, it automatically analyzes the complete codebase,
                        understands the structure, identifies strengths and issues,
                        and presents everything in a clear and visual way.
                    </p>
                </div>
            </section>

            {/* WHAT YOU GET */}
            <section className="bg-gray-100 py-20 px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What You Will Get
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-xl font-semibold mb-3"><IoMdVideocam className='inline' /> AI Explainer Video</h3>
                        <p className="text-gray-600">
                            A short AI-generated video that explains what the project does,
                            how it works, and evaluates overall code quality.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-xl font-semibold mb-3"><BsDiagram3Fill className='inline' /> Architecture Diagram</h3>
                        <p className="text-gray-600">
                            Visual breakdown of modules, layers, services,
                            and component interactions.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-xl font-semibold mb-3"><PiChartScatter className='inline' /> Quadrant Chart</h3>
                        <p className="text-gray-600">
                            Project positioning based on complexity,
                            maintainability, scalability, and maturity.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-xl font-semibold mb-3"><AiOutlineRadarChart className='inline' /> Radar Chart</h3>
                        <p className="text-gray-600">
                            Deep technical evaluation of code quality,
                            security, performance, and production readiness.
                        </p>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                    How It Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl mb-3"><FaLink className='inline' /></div>
                        <h4 className="font-semibold mb-2">Paste GitHub URL</h4>
                        <p className="text-gray-600">
                            Enter any public GitHub repository link.
                        </p>
                    </div>

                    <div>
                        <div className="text-4xl mb-3"> <PiGearFineBold className='inline' /></div>
                        <h4 className="font-semibold mb-2">AI Analysis</h4>
                        <p className="text-gray-600">
                            The system clones and analyzes the entire codebase.
                        </p>
                    </div>

                    <div>
                        <div className="text-4xl mb-3"> <GiBrain className='inline' /></div>
                        <h4 className="font-semibold mb-2">Smart Understanding</h4>
                        <p className="text-gray-600">
                            AI understands structure, flow, and quality.
                        </p>
                    </div>

                    <div>
                        <div className="text-4xl mb-3"> <MdOutlineInsights className='inline' /></div>
                        <h4 className="font-semibold mb-2">Insights & Visuals</h4>
                        <p className="text-gray-600">
                            Videos, diagrams, and charts are generated.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHO BENEFITS */}
            <section className="bg-gray-100 py-20 px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Who Can Benefit
                </h2>

                <div className="max-w-5xl mx-auto space-y-6 text-gray-700">
                    <p>
                        <strong><PiChalkboardTeacherFill className='inline' /> College Faculty:</strong> Evaluate students’ GitHub projects quickly
                        without opening and reviewing every repository manually.
                    </p>

                    <p>
                        <strong><PiStudentFill className='inline' /> Students & Freshers:</strong> Understand where their project stands
                        in terms of code quality, security, and production readiness.
                    </p>

                    <p>
                        <strong><TbBrandOpenSourceFilled className='inline' /> Open Source Contributors:</strong> Get a quick understanding of large
                        open-source projects before starting contributions.
                    </p>

                    <p>
                        <strong><PiBagFill className='inline' /> Interview Candidates:</strong> Explain projects confidently with
                        architecture and quality insights.
                    </p>

                    <p>
                        <strong><SiXdadevelopers className='inline' /> Developers & Teams:</strong> Faster onboarding to unfamiliar or
                        legacy codebases.
                    </p>

                    <p>
                        <strong><GiTeacher className='inline' /> Trainers & Mentors:</strong> Teach real-world projects using
                        visual explanations instead of raw code.
                    </p>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-gray-900 text-gray-300 text-center py-6">
                <p>
                    Turning GitHub repositories into clear, human-understandable insights — automatically
                </p>
            </footer>
        </>
    )
}

export default Home
