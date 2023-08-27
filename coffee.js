// var element;
// // element = document.all[33];
// // element = document.head;
// // element = document.URL;
// // element = document.domain;
// element = document.getElementsByTagName("li");
// console.log(element)


document.getElementById('demo').innerHTML = "<h1>wow</h1>"
// document.getElementById('demo').setAttribute("style","border:5px dotted yellow");
// another way to write
document.getElementById('demo').removeAttribute("style");
document.getElementById('demo').removeAttribute("class");

 var element = document.getElementById('demo').getAttribute("class");
console.log(element)