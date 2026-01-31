import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Forecast from "./components/Forecast";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main />
      <Forecast />
    </div>
  );
}
