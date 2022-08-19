import {useState} from "react";

export default function App() {
	const [toggle, setToggle] = useState(true);

	return (
		<div id="content">
			<nav>
				<div id="topBar">
					<div id="logo">
						<h1>Cats 4 Life</h1>
						<img src="" alt="" />
					</div>

					<img src="" alt="" />
					<button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide content' : 'Show Content'}</button>
				</div>

				<div id="tagsList">
					<button>Floofy 15</button>
					<button>Cute 5</button>
					<button>Grumpy 1</button>
				</div>
			</nav>

			{toggle ? (<div id="basket">
				<div className="basketCat">
					<img src="" alt="" />

					<p>Name</p>
					<p>Price</p>
				</div>
			</div>) : ("")}
			

			<div id="content">
				<div id="postHolder">
					<div className="catPost">
						<img src="" alt="" />

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
								<img src="" alt="" className="addCart" />
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