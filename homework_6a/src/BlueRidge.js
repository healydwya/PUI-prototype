import './BlueRidge.scss';

function BlueRidge() {
    return (
        <div className="blueridge-page">
            <div class="page-body">
                {/*         <!-- Steps to show current page status and site structure --> */}
                <div class="steps">
                    <span> <a href="product-browsing.html"> Categories </a> </span>
                    <span> {'>'} </span>
                    <span> Adventures </span>
                    <span> {'>'} </span>
                    <span> Blue Ridge Mountains </span>
                </div>
                {/*         <!-- Grid of photos  --> */}
                <div class="photo-grid">
                    <div class="row">
                        <div class="grid-item">
                            <img alt="waterfall" src="Assets/waterfall.jpeg"></img>
                            <span> Waterfall Hikes </span>
                        </div>
                        <div class="grid-item">
                            <img alt="appalachian trail" src="Assets/at.JPG"></img>
                            <span> Day on the Appalachian Trail </span>
                        </div>
                        <div class="grid-item">
                            <img alt="hike with a view" src="Assets/views.jpeg"></img>
                            <span> Trails with a View </span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="grid-item">
                            <img alt="lifejacket" src="Assets/lifejacket3.jpeg"></img>
                            <span> Paddling on the French Broad </span>
                        </div>
                        <div class="grid-item">
                            <img alt="bridge" src="Assets/bridge.JPG"></img>
                            <span> Pet-friendly Bridges </span>
                        </div>
                        <div class="grid-item">
                            <img alt="puppy getting a hug" src="Assets/noelle.JPG"></img>
                            <span> Wilderness Areas </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlueRidge;
