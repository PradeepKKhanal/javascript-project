// import { Octokit, App } from "https://esm.sh/octokit";

// const octokit= new Octokit({
//     auth:'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'
// })
// console.log(octokit)
// // console.log("hello")

// const users=await octokit.request("GET /users/{username}/repos",{
//     // owner:"octokit",
//     // repo:"Spoon-Knife"
//     headers: {
//         'X-GitHub-Api-Version': '2022-11-28'

//       },
//     //   since:5
//     username:"mewnew"
// })

// // console.log(users.headers.link)
// console.log(users.data)

// const userName = document.querySelector(".name");
// const userBio = document.querySelector(".bio");
// const followerNums = document.querySelector(".follower > span");
// const followingNums = document.querySelector(".following > span");
// const reposNums = document.querySelector(".repos > span");
// const imageBox = document.querySelector(".image-box");
// const reposList = document.querySelector(".repos-list");
// console.log(followingNums)
const displayBox = document.querySelector("#display-box");
// working on github api

import { Octokit, App } from "https://esm.sh/octokit";
const octokit = new Octokit({
	auth: "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",
});

// const users=await octokit.request("GET /users/{username}",{
// 	username:"mewnew"
// })
// console.log(users)

const userInput = document.querySelector("#search");

userInput.addEventListener("keydown", async (e) => {
	if (e.key === "Enter") {
		// console.log(userInput.value)
		// userName.textContent = `${userInput.value}`;
		const userNo=document.querySelector(".userNo")
		console.log(userNo)
		if(userNo){
			userNo.remove()
		}
	
		if (document.querySelector("#display-box")) {
			document.querySelector("#display-box").remove();
		}
		try{


		
		const users = await octokit.request("GET /users/{username}", {
			username: userInput.value,
		});
		if (users) {
			// displayBox.style.visibility="visible"
			const displayBox = document.createElement("div");
			displayBox.setAttribute("id", "display-box");
			displayBox.innerHTML = `  <div class="image-box">
            <!-- <img src="boy.jpg" alt=""> -->
        </div>
        <div class="info-box">
            <p class="name">name</p>
            <p class="bio">bio</p>
            <ul class="detail">
                <li class="follower"><span >234</span>Followers</li>
                <li class="following"><span>234</span>Following</li>
                <li class="repos"><span>343</span>Repos</li>
            </ul>
            <ul class="repos-list">
               
            </ul>
        </div>`;
		const repository = await octokit.request("GET /users/{username}/repos", {
			username: userInput.value,
			sort: "stars",
			per_page: 10,
		});

			const section = document.querySelector("section");
			section.append(displayBox);
			const userName = document.querySelector(".name");
			const userBio = document.querySelector(".bio");
			const followerNums = document.querySelector(".follower > span");
			const followingNums = document.querySelector(".following > span");
			const reposNums = document.querySelector(".repos > span");
			const imageBox = document.querySelector(".image-box");
			const reposList = document.querySelector(".repos-list");
			// console.log(users);
			// console.log(users.data.following);

			userName.textContent = users.data.login;

			userBio.textContent = users.data.bio;

			followerNums.textContent = users.data.followers;

			followingNums.textContent = users.data.following;

			reposNums.textContent = users.data.public_repos;

			imageBox.style.backgroundImage = `url("${users.data.avatar_url}")`;

			// const repository = await octokit.request("GET /users/{username}/repos", {
			// 	username: userInput.value,
			// 	sort: "stars",
			// 	per_page: 10,
			// });
			// console.log(repository);
			if (repository) {
				repository.data.forEach((i) => {
					reposList.insertAdjacentHTML(
						"beforeEnd",
						`<a href="${i.html_url}" class="repo" target="_blank">${i.name}</a>`
					);
				});
			}
		}
		
	}
	catch(error){
		// console.log("er")
		const section = document.querySelector("section");
		section.insertAdjacentHTML("beforeEnd",`<p style="color:red;" class="userNo">This username does not exist</p>`)
	}
userInput.value = "";
	// return users.data.repos_url
}});

// console.log(users.data.repos_url.length)
