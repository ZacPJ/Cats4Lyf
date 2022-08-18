import {useEffect, useState} from "react";

export default function App() {
	

	return (
		<div id="content">
			<nav>
				<div id="topBar">
					<div id="logo">
						<h1>Cats 4 Life</h1>
						<img src="" />
					</div>

					<img src="" />
				</div>

				<div id="tagsList">
					<button>Floofy 15</button>
					<button>Cute 5</button>
					<button>Grumpy 1</button>
				</div>
			</nav>

			<div id="content">
				<div id="postHolder">
					<div className="catPost">
						<img />

						<div className="tags">
							<button>${tag[0]}</button>
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
			</div>

			<footer>
				<p>Made by:</p>
				<p>Thomas - Kurtus - Zac</p>
			</footer>
		</div>
	);
}