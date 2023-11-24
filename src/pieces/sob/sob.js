let photoIndex = 0
let images = [
    "things.jpg",
    "Origin5.jpg"
]

function retourPagePrincipale(){
    window.location.href = "../../pagePrincipale.html"
}

function precedanteImage(){
    photoIndex -= 1
    if(photoIndex < 0){
        photoIndex = images.length - 1
    }

    let galImg = document.getElementById("galerieImg")
    galImg.style.backgroundImage = "url(./imageSob/" + images[photoIndex] + ")"
}

function prochaineImage(){
    photoIndex += 1
    if(photoIndex >= images.length){
        photoIndex = 0
    }

    let galImg = document.getElementById("galerieImg")
    galImg.animate([{opacity: 0}, {opacity: 1}], {duration: 500, iterations: 1})
    galImg.style.backgroundImage = "url(./imageSob/" + images[photoIndex] + ")"
}