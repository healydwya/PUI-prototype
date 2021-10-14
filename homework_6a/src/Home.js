import './Home.scss';

function Home() {
  return (
    <div className="page-body home">
    <a href="blue-ridge.html" className="link-body">
      <img className="cover-img" src="Assets/cover-img.JPG" alt="girl with dog"></img>
      <button className="home-button" type="text"> <span> Explore </span> our Blue Ridge Mountain Guidebook </button>
    </a>
  </div>
  );
}

export default Home;
