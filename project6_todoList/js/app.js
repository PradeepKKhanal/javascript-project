const todoInput = document.querySelector("#todo-input");
const todoBox = document.querySelector(".todo-box");
// console.log(todoBox);

todoInput.addEventListener("keydown", (e) => {
	// console.log(e.key)
	if (e.key === "Enter" && todoInput.value!=="") {
		// console.log(todoInput.value)
		if (localStorage.getItem("tasks")) {
			if (!localStorage.getItem("tasks").includes(todoInput.value)) {
				addTodoList(todoInput.value);
				todoInput.value = "";
				save();
				warning.textContent=""
			} else {
				console.log("Duplicate task");
                let warning=document.querySelector("#warning")
                warning.textContent="Don't enter the duplicate tasks"
			}
		} else {
			addTodoList(todoInput.value);
			todoInput.value = "";
			save();
			warning.textContent=""
		}

		// todoInput.value = "";
	}
});

function addTodoList(task) {
	// if (task !== "") {
		todoBox.insertAdjacentHTML(
			"beforeend",
			`<div class="todo-display">
            <p class="todo-value" style="word-wrap: break-word;
		}" data-first-click="true">${task}</p>
            <i class="fa-solid fa-x remove" ></i>
            </div>`
		);
		//    save()
	// }
}

function save() {
	const data = [];
	const allValue = document.querySelectorAll(".todo-value");
	// console.log(allValue)
	allValue.forEach((val) => {
		data.push(val.textContent);
		// console.log(val.textContent)
	});
	// console.log(data)
	if (data.length===0){
	localStorage.removeItem("tasks")
	}
	else{
	localStorage.setItem("tasks", JSON.stringify(data));
	}
}

todoBox.addEventListener("click", (e) => {
	if (
		e.target.className === "todo-value" &&
		e.target.getAttribute("data-first-click") === "true"
	) {
		console.log(e.target.getAttribute("data-first-click"));
		e.target.style.textDecoration = "line-through";
		e.target.parentElement.style.backgroundColor = " rgba(0, 0, 0, 0.223)";
		e.target.parentElement.style.color = "black";

		if (localStorage.getItem("strikedItems")) {


			let item = [...JSON.parse(localStorage.getItem("strikedItems"))];
			item.push(e.target.textContent);

			console.log(item);
		
			localStorage.setItem("strikedItems", JSON.stringify(item));
		} else {
			localStorage.setItem(
				"strikedItems",
				JSON.stringify([e.target.textContent])
			);
			console.log(e.target.getAttribute("data-first-click"), "hello");
		}
		e.target.setAttribute("data-first-click", "false");
	}
	if (e.target.className.includes("remove")) {
		
        if(localStorage.getItem("strikedItems")){
            if(JSON.parse(localStorage.getItem("strikedItems")).includes(e.target.previousElementSibling.textContent)){
                let strikedArray=JSON.parse(localStorage.getItem("strikedItems"))
                console.log(strikedArray)
                let strikedArrayNew=strikedArray.filter(v=>v!==e.target.previousElementSibling.textContent)
                console.log(strikedArrayNew)
                localStorage.setItem("strikedItems",JSON.stringify(strikedArrayNew))
            }
        }
        e.target.parentElement.remove();
		save();
	}
});


const tasksFromStorage = JSON.parse(localStorage.getItem("tasks"));
if(tasksFromStorage){
    tasksFromStorage.forEach((task) => {
	addTodoList(task);
    if (localStorage.getItem("strikedItems").includes(task)) {
		// let element=document.querySelector(".todo-value:contains('t')")
		let element = document.querySelectorAll(".todo-value");
		element.forEach((i) => {
			if (localStorage.getItem("strikedItems").includes(i.textContent)) {
				i.style.textDecoration = "line-through";
				i.parentElement.style.backgroundColor = " rgba(0, 0, 0, 0.223)";
				i.parentElement.style.color = "black";
			}
		});
	}
});
}

