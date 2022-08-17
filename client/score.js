let takeoutScore = 0;
let leftoversScore = 0;

export const getWinner = () => {
	if (takeoutScore === leftoversScore) document.body.innerHTML='its a tie';
	else {
		return takeoutScore > leftoversScore ? document.body.innerHTML='order out' : document.body.innerHTML='eat leftovers' ;
	}
};

export const voteTakeout = async () => {

	await fetch("https://swdestinydb.com/api/public/cards/")
		.then(response => {
			console.log("hello")
			console.log(response.json())
		})
	takeoutScore++;
};

 export const voteLeftovers = () => {
	leftoversScore++;
};