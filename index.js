function slideshowFun(images){
    
}

// Use the following data for slideshow
var movieImages = [
  "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_02_CAR_a_MULTI_LNY_WaterRabbit.jpg?scl=1&fmt=webp&wid=1440",
  "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0119_0122_D_02_CAR_b_GIFTS_2023VDay.jpg?scl=1&fmt=webp&wid=1440",
  "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_02_CAR_c_RTW_Coats.jpg?scl=1&fmt=webp&wid=1440",
  "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0119_0122_D_02_CAR_e_RTW_Denim.jpg?scl=1&fmt=webp&wid=1440",
  
]


  let tag = document.getElementById("slideshow");
window.addEventListener("load", function () {

  // add event-listeners;
  let bag = document.createElement("img");
  let i=1;
  bag.src = movieImages[0];
  setInterval(()=>{
   if(i===movieImages.length){
    i=0;
   };
   bag.src = movieImages[i];
   i++;
  }, 3000);
  tag.append(bag);
});