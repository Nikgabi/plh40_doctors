var modeButtons = document.querySelectorAll(".mode");
var text1= document.querySelector("#textme1");
var text2= document.querySelector("#textme2");
var ruleButtons = document.querySelectorAll(".rule");

setupModeButtons();
setupRuleButtons();



function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			modeButtons[3].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "HOME") {
				window.location.href="https://ygeiafirst.net";
			}
			
			else if (this.textContent === "DOCTORS") {
				window.location.href="index.html";
			}
			else if (this.textContent === "ΙΑΤΡΙΚΑ ΑΡΘΡΑ") {
				window.location.href="https://blog.ygeiafirst.net";
			}
			
			else {
				window.location.href="https://bibliography.ygeiafirst.net";
			}
			
		});
	}
}


function setupRuleButtons(){
	for(var i = 0; i < ruleButtons.length; i++){
		ruleButtons[i].addEventListener("click", function(){
			ruleButtons[0].classList.remove("selected");
			ruleButtons[1].classList.remove("selected");
			ruleButtons[2].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "ΟΡΟΙ") {
				var link = document.createElement("a");
				link.href = "rules.pdf";
				link.target = "_blank";
				link.click();
			}
			else if (this.textContent === "ΠΟΛΙΤΙΚΗ ΑΠΟΡΡΗΤΟΥ") {
				var link = document.createElement("a");
				link.href = "policy.pdf";
				link.target = "_blank";
				link.click();
			}
			else {
				var link = document.createElement("a");
				link.href = "instructions.pdf";
				link.target = "_blank";
				link.click();
			}
			
		});
	}
}