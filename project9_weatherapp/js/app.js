const key = "98130ce2418042bf909132257232909";

const baseURL = "http://api.weatherapi.com/v1";

const currentURL = `/current.json?key=${key}`;
const autoCompleteURL = `/search.json?key=${key}`;
const query = `&q=canada`;

// const url = baseURL + currentURL + query;

function loadCurrentWeather(url) {
	let weatherData;
	fetch(url)
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((data) => {
			console.log(data);
			showWeather(data);
		})
		.catch((error) => {
			console.log(error);
			const section = document.querySelector("section");
			section.insertAdjacentHTML(
				"beforeend",
				`<p style="color:red;margin-top:10px; font-size:10px">The location could not found !</p>`
			);
		});
	// console.log(weatherData)
	// return weatherData;
}
function showWeather(data) {
	const section = document.querySelector("section");
	const weatherDisplay = document.createElement("div");
	weatherDisplay.classList.add("weather-display");
	weatherDisplay.innerHTML = ` <div class="temperature">
        <div class="temparature-image">
            <img src="${data.current.condition.icon}" alt="">
        </div>
        <div class="temperature-value">
            ${data.current.temp_c} °C
        </div>

    </div>
    <div class="temperature-info">
        ${data.current.condition.text}
    </div>`;
	section.appendChild(weatherDisplay);
}

function clear() {
	const section = document.querySelector("section");
	const weatherDisplay = document.querySelector(".weather-display");
	if (weatherDisplay) {
		weatherDisplay.remove();
	}
	console.dir(section.lastElementChild);
	if (section.lastElementChild.localName === "p") {
		section.lastElementChild.remove();
	}
}
// loadCurrentWeather(url)

const form = document.querySelector("form");
const input = document.querySelector("input");
function formSubmit(){
	const suggestDisplay=document.querySelector(".suggest-display");
	suggestDisplay.style.display="none"
	clear();
	if (input.value) {
		const query = `&q=${input.value}`;

		const url = baseURL + currentURL + query;
		loadCurrentWeather(url);
	}
}
form.addEventListener("submit", (e) => {
	e.preventDefault();
	formSubmit()
	// const suggestDisplay=document.querySelector(".suggest-display");
	// suggestDisplay.style.display="none"
	// clear();
	// if (input.value) {
	// 	const query = `&q=${input.value}`;

	// 	const url = baseURL + currentURL + query;
	// 	loadCurrentWeather(url);
	// }
});

input.addEventListener("keyup", (e) => {
	// clear()
	console.log(e.key);
	console.log(input.value);
	if (e.key != "Enter" && input.value!=="") {
		clear()
		const url = baseURL + autoCompleteURL + `&q=${input.value}`;
		fetch(url)
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => {
				console.log(data[0]);
				const suggestDisplay=document.querySelector(".suggest-display");

				if(data[0]==undefined){
					suggestDisplay.style.display="none"
				}
				else{
					suggestDisplay.style.display="block"
					suggestDisplay.innerHTML="";
				}
                // const suggestDisplay=document.querySelector(".suggest-display");
				
                
				data.forEach((i) => {
					// console.log(i.name + "," + i.country);
                    suggestDisplay.insertAdjacentHTML("beforeend",`<div>${i.name},${i.country}</div>`)
                    // (i.name + "," + i.country)
				});
				// suggestDisplay.addEventListener("click",(e)=>{
				// 	input.value=e.target.textContent
				// 	console.log(input.value)
				// 	// form.submit()
				// 	formSubmit()
				// 	suggestDisplay.stopPropagation()

				// })
			});
	}
});

// function showSuggestion(name){
//     suggestDisplay=document.querySelector(".suggest-display");
//     // suggestDisplay.classList.add("suggest-display")
//     suggestDisplay.insertAdjacentHTML("beforeend","<div>${name}</div>")
// }

suggestDisplay=document.querySelector(".suggest-display");
suggestDisplay.addEventListener("click",(e)=>{
	input.value=e.target.textContent
	console.log(input.value)
	// form.submit()
	formSubmit()
	suggestDisplay.stopPropagation()

})