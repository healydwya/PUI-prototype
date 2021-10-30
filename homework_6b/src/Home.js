import './Home.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div className="page-body home">
      <Link to="/blueridge" className="link-body">
        <img className="cover-img" src="Assets/cover-img.JPG" alt="girl with dog"></img>
        <button className="home-button" type="text"> <span> Explore </span> our Blue Ridge Mountain Guidebook </button>
      </Link>
    </div>
  );
}

export default Home;
