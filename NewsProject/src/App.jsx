import Headers from "./components/Headers";
import Contents from "./components/Contents";
import "./app.css";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="container">
        <Headers />
        <Contents />
      </div>
      <Footer />
    </>
  );
}

export default App;
