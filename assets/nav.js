// This adds functionality to the navbar
// This DOES NOT inject the navbar into the webpage, that's /js/nav.js
fetch("https://api.github.com/repos/aahannadas/aahannadas.github.io/git/trees/main?recursive=1")
	.then(res => res.json())
	.then(json => {
		let text = json["tree"]
		for (i = 0; i < text.length; i++) {
			let file = text[i]
			let path = file.path;

			setInterval(() => {}, 500); // Make sure that the navbar loads before attempting to add to it

			if (path.startsWith("2024/") && path.includes(".html")) {
				let file = path.replace("2024/", "").replace(".html", "")
				if (file == "2024") continue
				document.getElementById("2024-dropdown").innerHTML += `<li><a class="dropdown-item p-3 bg-dark text-light" href="/2024/${file}">${file.toUpperCase()}</a></li>`;
				console.log(`Added ${file} to dropdown`)
			}
		}
	});