console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function renderImg(json) {
    const imgs = json.message
    const imgContainer = document.getElementById("dog-image-container")
    imgs.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        imgContainer.appendChild(img) 
    });
}

function fetchImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImg(json))
}

