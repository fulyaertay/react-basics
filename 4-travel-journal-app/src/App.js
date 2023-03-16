import "./App.css";
import Header from "./components/Header";
import Places from "./components/Places";
import Footer from "./components/Footer"
import data from "./data";
function App() {
  const places = data.map((item) => {
    return <Places key={item.id} item={item}></Places>;
  });
  return (
    <div className="App">
      <Header />
      {places}
      <Footer/>
    </div>
  );
}

export default App;
