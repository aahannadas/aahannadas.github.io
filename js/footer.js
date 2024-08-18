fetch("/assets/footer.html")
	.then(res => res.text())
	.then(text => {
		let oldElem = document.querySelector("script#replace_with_footer");
		let newElem = document.createElement("footer");
		newElem.className = "py-5"; // bg-dark
		newElem.innerHTML = text;
		oldElem.parentNode.replaceChild(newElem, oldElem);
	});