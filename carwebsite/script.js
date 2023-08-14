// Moving Cars
(async () => {
	const root = document.documentElement;
	const range = 5;
	const num1 = Math.floor(Math.random() * range) + 1;
	const num2 = Math.floor(Math.random() * range) + 1 + num1;
	const num3 = Math.floor(Math.random() * range) + 1 + num2;
	const num4 = Math.floor(Math.random() * range) + 1 + num3;
	const num5 = Math.floor(Math.random() * range) + 1 + num4;
	root.style.setProperty("--L7", num1 + "s");
	root.style.setProperty("--L8", num2 + "s");
	root.style.setProperty("--L9", num3 + "s");
	root.style.setProperty("--L10", num4 + "s");
	root.style.setProperty("--L11", num5 + "s");

	//Search
	const searchBox = document.getElementById("carInput");
	let arrayOfCars = await (await fetch("../cars.json")).json();
	function searching() {
		let autoComplete = arrayOfCars.filter((cars) => cars.name.toLowerCase().replaceAll(" ", "").includes(searchBox.value.toLowerCase().replaceAll(" ", "")));
		let autoCompleteHTML = "";
		for (let i = 0; i < 20; ++i) {
			if (autoComplete[i]) autoCompleteHTML += `<li class="carAutoComplete"><a href="./cars/?car=${autoComplete[i].name}">${autoComplete[i].name}</a></li>`;
		}
		document.getElementById("autoComplete").innerHTML = autoCompleteHTML;
	}
	searchBox.addEventListener("focusin", () => {
		searching();
	});
	searchBox.addEventListener("input", () => {
		searching();
	});
})();


// Chat
const chatBox = document.getElementsByTagName("iframe")[0];
chatBox.style.display = "none";
function toggleChat() {
	chatBox.style.display = chatBox.style.display == "none" ? (chatBox.style.display = "block") : (chatBox.style.display = "none");
}