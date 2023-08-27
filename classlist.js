document.querySelector(".footer").addEventListener("dblclick",function name(params) {
  var a=  this.classList.add("footer1","footer2","footer3");
  console.log(a);
})


document.querySelector(".footer").addEventListener("click",function name(params) {
//   var a=  this.classList.remove("footer");
//   var a = document.getElementById("footer").classList.length;
//   var a = document.getElementById("footer").classList.toggle("footer3");
  var a = document.getElementById("footer").classList.contains("footer");
  console.log(a);
})
