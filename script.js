let elements = document.getElementsByClassName ('slide');
let skizb = 0;
let verj = 4;
for(let i=4;i<elements.length;i++){
  elements[i].style.display = 'none';
}

function tertel(n) {
  skizb+=n;
  verj+=n;

  if (verj>elements.length) {
      if(verj-(elements.length-1)<4){
          for(let i = 0; i<elements.length ; i++){
            elements[i].style.display = "none";
          }
          for(let j = skizb; j<elements.length; j++){
            elements[j].style.display = 'flex';
          }
          for(let l = 0; l < verj-(elements.length); l++){
            elements[l].style.display = "flex";
          }
      }else{
          skizb = 0;
          verj = 4;
          for(let i = 0; i < elements.length ; i++){
            elements[i].style.display = "none";
          }
          for(let j = skizb; j < verj; j++){
            elements[j].style.display = 'flex';
          }
      }
  }else if(skizb < 0){
          if (skizb < -4) {
              skizb = elements.length+skizb;
              verj = elements.length-1;
              for(let q = 0; q<elements.length; q++){
                elements[q].style.display = 'none';
              }
              for(let e = skizb; e < verj; e++){
                elements[e].style.display = 'flex';
              }
          }else{
              for(let q = 0; q<elements.length; q++){
                elements[q].style.display = 'none';
              }
              for(let w = 0; w < verj; w++){
                elements[w].style.display = 'flex';
              }
              for(let w = (elements.length)+skizb; w<(elements.length); w++){
                elements[w].style.display = 'flex';
              }
          }
      }
  else{
      for(let i = 0; i<elements.length ; i++){
        elements[i].style.display = "none";
      }
      for(let j = skizb; j<verj; j++){
        elements[j].style.display = 'flex';
      }
  } 
}



// const sliderContainer = document.querySelector('.slider-container');
// const images = [
//   'img1.jpg',
//   'img2.jpg',
//   'img3.jpg',
//   'img4.jpg'
// ];

// const numImages = images.length;
// const numRepeats = 4; 


// const allImages = [];
// for (let i = 0; i < numImages; i++) {
//   for (let j = 0; j < numRepeats; j++) {
//     allImages.push(images[i]);
//   }
// }


// for (let i = 0; i < allImages.length; i++) {
//   const slide = document.createElement('div');
//   slide.classList.add('slide');
//   const image = document.createElement('img');
//   image.src = allImages[i];
//   slide.appendChild(image);
//   sliderContainer.appendChild(slide);
// }


// const updatedSlides = document.querySelectorAll('.slide');
// const numUpdatedSlides = updatedSlides.length;

// let currentIndex = 0;

//  function showNextSlide() {
//   updatedSlides[currentIndex].style.display = 'none';
//   currentIndex = (currentIndex + 1) % numUpdatedSlides;
//   updatedSlides[currentIndex].style.display = 'block';
//  }

// setInterval(showNextSlide, 2000);







