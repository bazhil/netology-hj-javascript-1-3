'use strict'

const images = [
  'https://netology-code.github.io/hj-homeworks/browser/gallery/i/breuer-building.jpg',
  'https://netology-code.github.io/hj-homeworks/browser/gallery/i/guggenheim-museum.jpg',
  'https://netology-code.github.io/hj-homeworks/browser/gallery/i/headquarters.jpg',
  'https://netology-code.github.io/hj-homeworks/browser/gallery/i/IAC.jpg',
  'https://netology-code.github.io/hj-homeworks/browser/gallery/i/new-museum.jpg'
];

const prevButton = document.getElementById('prevPhoto');

const nextButton = document.getElementById('nextPhoto');

const currentPhoto = document.getElementById('currentPhoto');

currentPhoto.src = images[0];

let i = 0;

function prevPhoto(){
  if (i <= 0 ){
    i = images.length - 1;
  } else {
    i--;
  }
  currentPhoto.src = images[i];
}

function nextPhoto(){
  if (i >= images.length - 1 ){
    i = 0;
  } else {
    i++;
  }
  currentPhoto.src = images[i];
}

prevButton.onclick = prevPhoto;
nextButton.onclick = nextPhoto;