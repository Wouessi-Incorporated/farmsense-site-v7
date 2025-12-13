export default function TechnologyAIPage() {
  return (
    <div>
      <section className="section">
        <h2>Technology & Artificial Intelligence</h2>
        <p className="section-lead">
          FARMSENSE combines computer vision, behavioural AI, acoustic analysis, environmental sensing,
          micro-lab diagnostics and a hybrid edge–cloud architecture to deliver real-time and predictive
          intelligence for livestock systems.
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>Computer vision & sound</h3>
            <p>
              Cameras and microphones continuously analyse movement, posture, sound patterns and grouping
              behaviour to detect early signs of stress or disease.
            </p>
          </div>
          <div className="card">
            <h3>Environmental & micro-lab data</h3>
            <p>
              Sensors for temperature, humidity, ammonia, CO₂ and water quality, combined with on-site
              micro-lab tests, feed a central AI engine that scores risk and recommends actions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}