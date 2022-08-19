import {useEffect, useState} from "react";
import {fetchCat,cat} from "./comps/RandomCat.js"
let randomImg1 = Math.floor(Math.random()*64)
let randomImg2 = Math.floor(Math.random()*64)
let randomImg3 = Math.floor(Math.random()*64)
let randomImg4 = Math.floor(Math.random()*64)
let randomImg5 = Math.floor(Math.random()*64)
export default function App() {
	const [storedCat,setCat] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() =>{

fetchCat(setCat,setError);

},[] );


	return (
		<div id="content">
			<nav>
				<div id="topBar">
					<div id="logo">
						<h1>Cats 4 Life</h1>
						<img src="" />
					</div>
					{storedCat.map((cat,index) => {
						if(index == randomImg1){
						return(
							<div key = {index}>
							<img src={(cat.img)} />
						   <h1>{cat.name}</h1>
						   <p>{cat.sex}</p>
						   <p>{cat.breed}</p>
						   <p>{cat.location}</p>
						   <p>{cat.age}</p>
						   <p>£{cat.price}</p>
						   <p>{cat.basket}</p>
						   <p>{cat.adjectives}</p>
						   <p>{cat.description}</p>
						   </div>
						)
						}
					})}
					
				</div>

				<div id="tagsList">
					<button>{cat.age}</button>
					<button>test</button>
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
