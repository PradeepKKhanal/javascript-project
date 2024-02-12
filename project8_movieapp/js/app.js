const form = document.querySelector("form");
const input = document.querySelector("input");
let currentPage = 1;
let lastPage;
let trendingPage=1;
const trendingUrl=`https://api.themoviedb.org/3/trending/movie/day?language=en-US`
const searchUrl=`https://api.themoviedb.org/3/search/movie?query=`

form.addEventListener("submit", (e) => {
	if(input.value){
			e.preventDefault();
	clear()
	let url=searchUrl+`${input.value}&page=${currentPage}`
	loadMovie(url);
	}

});

function loadMovie(url) {
	// const url = `https://api.themoviedb.org/3/search/movie?query=${moviename}&page=${page}`;

	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWQ5MWFkMmNhZTY5NjFiYjhhMGZlNDg4NDA0NjMwNSIsInN1YiI6IjY1MTNlYTdlOWI4NjE2MDBlMjRlMTRmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1JbKXtox-3BlcUuo8NoSoNdvT_9K438OcT0aG0lgGjY",
		},
	};
	// console.log(url)
	fetch(url, options)
		.then((response) => {
			// console.log(response);
			return response.json();
		})
		.then((data) => {
			console.log(data);
			lastPage = data.total_pages;
			const movieLists = data.results;
			// console.log(movieLists);
			const movieDisplay = document.querySelector(".movie-display");
			movieLists.forEach((movieList) => {
				const movieBox = document.createElement("div");
				movieBox.classList.add("movie-box");
				movieBox.innerHTML = `          
               <div class="movie-info">
                   <div class="movie-title">${movieList.title} <span>${movieList.vote_average}</span> </div>
                   <div class="movie-overview"> <p>Overview:</p>${movieList.overview}</div>
           </div>`;
				movieDisplay.appendChild(movieBox);
				if (movieList.poster_path) {
					movieBox.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movieList.poster_path})`;
				}
			});
			const otherPart = document.createElement("div");
			otherPart.classList.add("other-part");
			const section = document.querySelector("section");
			otherPart.innerHTML = `
        <div class="prev-part">Previous</div>
        <div class="next-part">Next</div>`;
			section.appendChild(otherPart);
			// page++;

			const previousButton = document.querySelector(".prev-part");
		
			// console.log(previousButton);
			const nextButton = document.querySelector(".next-part");
			// console.log(nextButton)
			previousButton.addEventListener("click", () => {
		
				loadPreviousPage();
			});

			nextButton.addEventListener("click", () => {
			
				loadNextPage();
			});
		})
		.catch((err) => console.error(err));
}

;

function loadNextPage() {
	if (currentPage < lastPage) {

		clear()
		currentPage++;
		// console.log("hello");
		let url;
		if(input.value===""){
			if(trendingPage<lastPage){
				trendingPage++
				url=trendingUrl+`&page=${trendingPage}`
			}
		}
		else{
			 url=searchUrl+`${input.value}&page=${currentPage}`
		}
		
		loadMovie(url);
	}
}

function loadPreviousPage() {
	if (currentPage > 1) {
	
		clear()
		currentPage--;
		let url;
		
		if(input.value===""){
			if(trendingPage>1){
				trendingPage--
			url=trendingUrl+`&page=${trendingPage}`
			}
			
		}
		else{
			url=searchUrl+`${input.value}&page=${currentPage}`
		}
		
		loadMovie(url);
	}
}



function clear(){
	const movieDisplay= document.querySelector(".movie-display");

	while(movieDisplay.firstChild){
		movieDisplay.removeChild(movieDisplay.firstChild);
	}
	while(document.querySelector(".other-part")){
		document.querySelector(".other-part").remove()
	}
}

const cross=document.querySelector("form i")
cross.addEventListener("click",()=>{
	input.value=""
	clear();
	loadMovie(trendingUrl);
})


loadMovie(trendingUrl);
