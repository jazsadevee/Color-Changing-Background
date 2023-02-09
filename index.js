// let index = 0;

// function changeColors() {
//   let colors = ["red", "blue", "yellow", "green", "purple", "orange"]

//   document.getElementsByTagName("body")[0].style.background = colors[index++];

//   if (index > colors.length - 1)
//     index = 0;
// }


let index = 0

function changeColor() {
  let colors = ["red", "blue", "white", "black", "yellow", "purple", "green", "pink"]
  console.log(changeColor);
  
  document.getElementsByTagName("body")[0].style.background = colors[index++];
  
  if (index > colors.length - 1)
    index = 0;
}
