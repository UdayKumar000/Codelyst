import { create } from "zustand";

export const useAnalysisStore = create((set) => ({
    // global data
    radarData: null,
    quadrantData: null,
    diagramUrl: null,
    videoUrl: null,
    repoUrl: null,

    // setters
    setRepoUrl: (url) => set({ repoUrl: url }),
    setRadarData: (data) => set({ radarData: data }),
    setQuadrantData: (data) => set({ quadrantData: data }),
    setDiagramUrl: (url) => set({ diagramUrl: url }),
    setVideoUrl: (url) => set({ videoUrl: url }),

    // optional reset
    resetAnalysis: () =>
        set({
            radarData: null,
            quadrantData: null,
            diagramUrl: null,
            videoUrl: null,
            repoUrl: null,
        }),
}));
