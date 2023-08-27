var element ;
// document.getElementById("footer").onclick = about;
// function about() {
//     document.getElementById("footer").style.background = "pink";
    
// }

// **************second mothod add listener method  *********************
// document.getElementById("footer").addEventListener("click",footer);
// function footer(params) {
//     document.getElementById("footer").style.background = "yellow";
// this.style.color = "black";
// }

// document.getElementById("footer").addEventListener("dblclick",function () {
//     this.style.border= "10px dotted red";
//     this.style.background= "tan";
// },true);


// ***********************query selector method *************************
document.querySelector(".about").addEventListener("click",function () {
  this.style.background= "green";
})
// document.querySelector(".about").removeEventListener("click",function () {
//   this.style.background= "green";
// })