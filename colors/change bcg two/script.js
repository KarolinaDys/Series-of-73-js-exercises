(function() {
document.getElementById("run").addEventListener("click", function(){
 let color = document.getElementById("color")
 document.body.style.background = color.value;
});

})();