export default function ProductsKitsPage() {
  return (
    <div>
      <section className="section">
        <h2>FARMSENSE Kits & Modules</h2>
        <p className="section-lead">
          FARMSENSE offers modular kits for small farms, commercial operations, cooperatives and national
          programmes. Each kit combines AI, sensors and connectivity adapted to the local context.
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>Starter Kit</h3>
            <p>
              Ideal for small poultry or mixed farms. Includes one AI camera, core environmental sensors and
              access to the mobile app, SMS and USSD interface.
            </p>
          </div>
          <div className="card">
            <h3>Farmer Pro & Enterprise Kits</h3>
            <p>
              For larger farms and cooperatives: multi-camera setups, extended sensor networks, micro-lab
              modules and full analytics dashboards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}