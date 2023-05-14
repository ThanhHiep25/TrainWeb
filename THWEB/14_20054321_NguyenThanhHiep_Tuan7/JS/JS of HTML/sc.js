let image = new Array("../IMG/na1.jpg", "../IMG/na2.jpg");

function ranImage() {
    let random = Math.floor(Math.random() * image.length);
    setTimeout(ranImage, 3000);
    document.getElementById("idImage").src = image[random];
}

function sranImage() {
    let srandom = Math.floor(Math.random() * image.length);
    let s = srandom;
    document.getElementById("idImage").src = image[s];
}