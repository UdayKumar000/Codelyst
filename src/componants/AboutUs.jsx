const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start" style={{ backgroundColor: "#bfdbf7ff" }}>
      <section
        className="w-full text-center py-20 px-6"
        style={{ backgroundColor: "#1f7a8cff", color: "#ffffffff" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We provide clear visual insights of any GitHub repository, generating
          architecture diagrams, code quality charts, and AI-powered explainer
          videos — without reading the entire codebase.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6" style={{ color: "#022b3aff" }}>
          Our Mission
        </h2>
        <p className="text-lg text-[#022b3aff] mb-6">
          To help developers, students, and teams quickly understand projects
          by providing visual explanations and analytics of codebases.
        </p>

        <h2 className="text-3xl font-bold mb-6" style={{ color: "#022b3aff" }}>
          Who We Serve
        </h2>
        <ul className="list-disc list-inside space-y-2 text-[#022b3aff] text-lg">
          <li>Students & Freshers – Understand project structure and quality</li>
          <li>Faculty – Evaluate GitHub projects efficiently</li>
          <li>Open Source Contributors – Quick insights on large repos</li>
          <li>Developers & Teams – Faster onboarding to unfamiliar codebases</li>
        </ul>
      </section>

      <footer
        className="w-full py-6 text-center"
        style={{ backgroundColor: "#e1e5f2ff", color: "#022b3aff" }}
      >
        &copy; 2026 ProjectInsights. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutUs;