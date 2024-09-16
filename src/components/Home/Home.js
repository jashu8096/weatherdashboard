import WeatherCard from "../WeatherCard/WeatherCard";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-box">
        <span className="span">Entert city name : </span>
        <input type="search" className="input" />

        <div>
          <WeatherCard />
        </div>
      </div>
    </>
  );
}

export default Home;
