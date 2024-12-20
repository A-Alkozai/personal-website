const funText = ["{-_-}", "//\\(oo)/\\\\", "¯\\_(ツ)_/¯", "┻━┻︵ \\(°□°)/ ︵ ┻━┻ ", "(☞ﾟ∀ﾟ)☞", "(ง •̀_•́)ง", "ಠ_ಠ", "(╭ರ_•́)"];

function myWebsiteLink() {
    let index = Math.floor(Math.random() * funText.length);
    document.getElementById("this-website-link").innerHTML = funText[index];
    document.getElementById("this-website-footer").onclick = inverseMyWebsiteLink; 
}    

function inverseMyWebsiteLink() {
    document.getElementById("this-website-link").innerHTML = "Visit Website";
    document.getElementById("this-website-footer").onclick = myWebsiteLink; 
}