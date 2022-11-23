const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

//unsplash API
const count = 10;
const apiKey = "guudGZn5Tz4ppMxQqwyiqrEZlZGBHJY0nrpo_qTbniM";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
  //run function for each object in photosArray
  photosArray.forEach((photo) => {
    //create <a> to link to unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    //Create <img> for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    //put the <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    //catch error here
  }
}

//On Load
getPhotos();
