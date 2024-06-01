fetch("https://api.github.com/repos/aahannadas/aahannadas.github.io/git/trees/main?recursive=1")
	.then(res => res.json())
	.then(json => {
		text = json["tree"]
		for (i = 0; i < text.length; i++) {
			file = text[i]
			path = file.path;

			if (path.startsWith("2024/") && path.includes(".html")) {
				file = path.replace("2024/", "").replace(".html", "")
				if (file == "2024" || file == ".sample") continue
				document.getElementById("websites").innerHTML += `<a class="display-5 text-light" href="/2024/${file}">${file}'s page</a><br/>`;
			}
		}
	});