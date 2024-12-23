// When user tries to visit the website they are on
const funText = ["{-_-}", "//\\(oo)/\\\\", "¯\\_(ツ)_/¯", "┻━┻︵ \\(°□°)/ ︵ ┻━┻ ", "(☞ﾟ∀ﾟ)☞", "(ง •̀_•́)ง", "ಠ_ಠ", "(╭ರ_•́)"];
const websiteLink = document.getElementById("this-website-link");
const websiteLinkFooter = document.getElementById("this-website-footer");

websiteLinkFooter.addEventListener("click", myWebsiteLink);

function myWebsiteLink() {
    let innerHTML = websiteLink.innerHTML;

    if (innerHTML == "Visit Website") {
        let index = Math.floor(Math.random() * funText.length);
        websiteLink.innerHTML = funText[index];
        websiteLinkFooter.onclick = inverseMyWebsiteLink; 
    } 
    else {
        websiteLink.innerHTML = "Visit Website"
    }
}    

// Unavailable button
var unavailableButtons = document.querySelectorAll(".unavailable");

for (i = 0; i < unavailableButtons.length; i++) {
    unavailableButtons[i].addEventListener("click", unavailableButton);
}

function unavailableButton(event) {
    var target = event.currentTarget;
    var innerHTML = target.innerHTML;

    target.innerHTML = "Unavailable :C";
    target.removeEventListener("click", unavailableButton);
    setTimeout(revertUnavailableButton, 1000, event.currentTarget, innerHTML);
}

function revertUnavailableButton(target, original) {
    target.innerHTML = original;
    target.addEventListener("click", unavailableButton);
}