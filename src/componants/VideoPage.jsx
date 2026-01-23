import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAnalysisStore } from "../store/analysisDataStore";

const VideoPage = () => {
    const { projectId } = useParams();
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const {
        videoUrl,
        setVideoUrl
    } = useAnalysisStore();

    useEffect(() => {
        if (!videoUrl) {
            axios
                .get(`${BASE_URL}/getExplainerVideo/${projectId}`)
                .then(res => {
                    // assuming backend returns a video URL
                    console.log("this is the video url");
                    console.log(res.data.data[0].data.video_url)
                    setVideoUrl(res.data.data[0].data.video_url);
                })
                .catch(err => {
                    console.error("Failed to fetch explainer video", err);
                });
        }
    }, [projectId, videoUrl]);

    return (

        <div className="min-h-screen bg-gray-50 px-10 py-12">
            <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <i className="ri-video-line text-blue-700"></i>
                AI Explainer Video
            </h1>

            {!videoUrl ? (
                <p className="text-gray-500">Generating AI explainer video...</p>
            ) : (
                <div className="bg-black rounded-xl overflow-hidden shadow-lg max-w-4xl">
                    <video
                        src={videoUrl}
                        controls
                        className="w-full h-auto"
                    />
                </div>
            )}
        </div>
    );
};

export default VideoPage;
