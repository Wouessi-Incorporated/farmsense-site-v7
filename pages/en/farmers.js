export default function FarmersPage() {
  return (
    <div>
      <section className="section">
        <h2>Designed for livestock farmers</h2>
        <p className="section-lead">
          FARMSENSE was designed from the field, not from a lab. Every feature responds to a real problem
          experienced by poultry, cattle, small ruminant and aquaculture farmers: late disease detection,
          heat stress, lack of night monitoring, poor water quality and absence of veterinary support.
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>Early disease detection</h3>
            <p>
              Computer vision, sound analysis and environmental data combine to detect anomalies 48–120 hours
              before visible symptoms, so farmers can act earlier and avoid major losses.
            </p>
          </div>
          <div className="card">
            <h3>Lower mortality, higher income</h3>
            <p>
              By reducing preventable losses and improving feed efficiency, FARMSENSE helps farmers stabilize
              production, reduce stress and secure long-term revenue.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}