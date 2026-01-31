export default function Main() {
  return (
    <main className="main">

      {/* Search */}
      <input
        type="text"
        className="search"
        placeholder="Search for cities"
      />

      {/* Current Weather (EMPTY) */}
      <section className="current">
        <div>
          <h1>--</h1>
          <p className="sub">Chance of rain: --</p>
          <h2 className="temp">--°</h2>
        </div>
        <div className="icon">--</div>
      </section>

      {/* Hourly Forecast (EMPTY) */}
      <section className="card">
        <h3>Today's Forecast</h3>
        <div className="hourly">
          {Array(6).fill(0).map((_, i) => (
            <div key={i}>
              -- <br /> -- <br /> --°
            </div>
          ))}
        </div>
      </section>

      {/* Air Conditions (EMPTY) */}
      <section className="card">
        <h3>Air Conditions</h3>
        <div className="air">
          <div>
            <span>Real Feel</span>
            <strong>--°</strong>
          </div>
          <div>
            <span>Wind</span>
            <strong>--</strong>
          </div>
          <div>
            <span>Chance of Rain</span>
            <strong>--%</strong>
          </div>
          <div>
            <span>UV Index</span>
            <strong>--</strong>
          </div>
        </div>
      </section>

    </main>
  );
}
