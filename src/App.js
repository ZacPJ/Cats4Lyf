import {useEffect, useState} from "react";
import logo from "./imgs/paw_v1.png";



export default function App() {
	

	return (
		<div id="mainWrapper">
			<nav id="topBarMain">
				<div>
					<div id="topBar">
						<div id="logo">	<h1>Cats 4 Life</h1></div>
						<div id="logo">	<img src={logo} alt="Logo" id="logoImg" /></div>
					</div> {/*topBar close*/}

					<div id="basketImg"></div>
				</div> {/*topBarMain close*/}
			</nav>


			<div id="tagsList">
					<button>Floofy 15</button>
					<button>Cute 5</button>
					<button>Grumpy 1</button>
				</div>

			<div id="content">
				<div id="postHolder">
					<div className="catPost">
						<img />

						<div className="tags">
							<button>Floofy</button>
							<button>Cute</button>
							<button>Kitten</button>
						</div>

						<div className="catInfo">
							<div className="catAbout">
								<p></p>
							</div>

							<p></p>

							<div className="priceBar">
								<p></p>
								<img className="addCart" />
							</div>
						</div>
					</div>
				</div>
			</div>   {/* Main wrapper close */}
		

			<footer>
				<p>Made by:</p>
				<p>Thomas - Kurtis - Zac</p>

			</footer>
		</div>
	);
}