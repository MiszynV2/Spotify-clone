import "./App.css";
import ArtistInfo from "./components/ArtistInfo";
import Cookie from "./components/Cookie";
import Footer from "./components/Footer";
import Header from "./components/Head";
import MusicList from "./components/MusicList";
import Case from "./sources/phonecase1.png";

function App() {
  return (
    <div className="App">
      <img src={Case} alt="phonecase" className="PhoneCaseImage" />
      <div className="appWrapper">
        <Header />
        <ArtistInfo />
        <MusicList />
        <Cookie />
        <Footer />
      </div>
    </div>
  );
}

export default App;
