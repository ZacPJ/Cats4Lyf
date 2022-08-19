import {useEffect, useState} from "react";
import {fetchCat,cat} from "./comps/RandomCat.js"
import logo from "./imgs/paw_v1.png";
let randomImg1 = Math.floor(Math.random()*64)
let randomImg2 = Math.floor(Math.random()*64)
let randomImg3 = Math.floor(Math.random()*64)
let randomImg4 = Math.floor(Math.random()*64)
let randomImg5 = Math.floor(Math.random()*64)
export default function App() {
	const [storedCat,setCat] = useState([]);
    const [error, setError] = useState(null)
	const [toggle, setToggle] = useState(true);
    useEffect(() =>{

fetchCat(setCat,setError);

},[] );


	return (
		<div id="mainWrapper">
		<nav id="topBarMain">
			<div>
				<div id="topBar">
					<div id="logo">	<h1>Cats 4 Life</h1></div>
					<div id="logo">	<img src={logo} alt="Logo" id="logoImg" /></div>
				</div> {/*topBar close*/}
				<div id="basketImg" onClick={() => setToggle(!toggle)}></div>
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
				</nav>
				<div id="tagsList">
					<button>{cat.age}</button>
					<button>test</button>
					<button>Grumpy 1</button>
				</div>



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
			</div>   {/* Main wrapper close */}
		

			<footer>
				<p>Made by:</p>
				<p>Thomas - Kurtis - Zac</p>

			</footer>
		</div>
	);
}
