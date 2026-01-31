export default function Forecast() {
  return (
    <aside className="forecast">
      <h3>7-Day Forecast</h3>

      {Array(7).fill(0).map((_, i) => (
        <div className="day" key={i}>
          -- <span>-- / --</span>
        </div>
      ))}
    </aside>
  );
}
