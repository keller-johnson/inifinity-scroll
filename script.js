const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

//unsplash API
const count = 10;
const apiKey = "guudGZn5Tz4ppMxQqwyiqrEZlZGBHJY0nrpo_qTbniM";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//helper function to set attribues on DOM elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttributes(key, attributes[key]);
  }
}

//create elements for Link & photos, add to dom
function displayPhotos() {
  //Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // create <a> to link to Unsplash
    const item = document.createElement("a");
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blank");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    //create <img> for photo
    const img = document.createElement("img");
    // img.setAttribute("src", photo.url.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // put <img> inside <a> then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);
    displayPhotos();
  } catch (error) {
    //catch error here
  }
}

//On Load
getPhotos();
