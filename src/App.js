import {useEffect, useState} from "react";

export default function App() {
	const [cats, setCats] = useState([]);
	const url = `https://api.thecatapi.com/v1/images/search?limit=10`;
	const api_key = "72eb923a-6495-4792-821c-9f163794b194"

	useEffect(() => {
		const setCats = async () => {
			try {
				const response = await fetch(url,{headers: {'x-api-key': api_key}});

				if(!response.ok){
					throw new Error(response.statusText);
				}
				
				const data = await response.json();
				setCats(data);
			} catch (err){
				console.log(err.message);
			}
		}

		
	}, [])

	console.log(cats)

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

			<div id="basket">
				<div className="basketCat">
					<img src="" />

					<p>Name</p>
					<p>Price</p>
				</div>
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
			</div>

			<footer>
				<p>Made by:</p>
				<p>Thomas - Kurtus - Zac</p>
			</footer>
		</div>
	);
}