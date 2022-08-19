import {useEffect, useState} from "react";
import {fetchCat} from "./comps/RandomCat.js"
import logo from "./imgs/paw_v1.png";
let randomImg = []
let randomImgTemp = 0
for (let i = 0; i!==12; i++){
	randomImgTemp = Math.floor(Math.random()*64)
	while (randomImg.includes(randomImgTemp)){
		randomImgTemp = Math.floor(Math.random()*64)
	}
	randomImg.push(randomImgTemp)
}
console.log(randomImgTemp,randomImg)

export default function App() {
	const [storedCat,setCat] = useState([]);
    const [error, setError] = useState(null)
	const [toggle, setToggle] = useState(true);
    useEffect(() =>{

fetchCat(setCat,setError);

},[] );
let catRoster = {
}
let catNum = 0
let indexStore = []
function storeRoster(price,name,index){

	console.log(index)
	if (catNum < 1||indexStore.includes(index)==false){
		indexStore.push(index)
		console.log(indexStore)
		console.log(catRoster)
		catRoster[catNum] = {index,price,name}
		catNum += 1
		calculateBasket(catNum-1)

	}
}
let total = 0
function calculateBasket (cat){
	
	total = total + catRoster[cat].price
	console.log(total)

}
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
						if(index === randomImg[1]){
						return(
							<div id = "cat1" key = {index}>
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
								<button onClick={()=> storeRoster(cat.price,cat.name,index)}>Add to Basket</button>
							</div>
						)
						}
						if(index === randomImg[2]) {
							return(
							<div id = "cat2" key = {index}>
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
								<button onClick={()=> storeRoster(cat.price,cat.name,index)}>Add to Basket</button>
							</div>
					)}
					if(index === randomImg[3]) {
						return(
						<div id = "cat3" key = {index}>
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
							<button onClick={()=> storeRoster(cat.price,cat.name,index)}>Add to Basket</button>
						</div>
				)}
				if(index === randomImg[4]) {
					return(
					<div id = "cat4" key = {index}>
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
						<button onClick={()=> storeRoster(cat.price,cat.name,index)}>Add to Basket</button>
					</div>
			)}
			if(index === randomImg[5]) {
				return(
				<div id = "cat5" key = {index}>
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
					<button onClick={()=> storeRoster(cat.price,cat.name,index)}>Add to Basket</button>
				</div>
		)}
		if(index === randomImg[6]) {
			return(
			<div id = "cat6" key = {index}>
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
				<button onClick={()=> storeRoster(cat.price,cat.name,index)}>Add to Basket</button>
			</div>
	)}
	if(index === randomImg[7]) {
		return(
		<div id = "cat7" key = {index}>
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
			<button onClick={()=> storeRoster(cat.price,cat.name,index)}>Add to Basket</button>
		</div>
)}
if(index === randomImg[8]) {
	return(
	<div id = "cat8" key = {index}>
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
		<button onClick={()=> storeRoster(cat.price,cat.name,index)}>Add to Basket</button>
	</div>
)}
if(index === randomImg[9]) {
	return(
	<div id = "cat9" key = {index}>
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
		<button onClick={()=> storeRoster(cat.price,cat.name,index)}>Add to Basket</button>
	</div>
)}
if(index === randomImg[10]) {
	return(
	<div id = "cat10" key = {index}>
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
		<button onClick={()=> storeRoster(cat.price,cat.name,index)}>Add to Basket</button>
	</div>
)}
if(index === randomImg[11]) {
	return(
	<div id = "cat11" key = {index}>
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
		<button onClick={()=> storeRoster(cat.price,cat.name,index)}>Add to Basket</button>
	</div>
)}
if(index === randomImg[0]) {
	return(
	<div id = "cat0" key = {index}>
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
		<button onClick={()=> storeRoster(cat.price,cat.name,index)}>Add to Basket</button>
	</div>
)}

					})}
					
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
