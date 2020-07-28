(function() {

    // your code here
    
function update(){
document.getElementById('target').innerHTML = 
document.getElementById('part-one').innerHTML 
+ document.getElementById('part-two').innerHTML 
+ document.getElementById('part-three').innerHTML 
+ document.getElementById('part-four').innerHTML
};

document.getElementById('part-one').addEventListener("click", function(){
   document.getElementById('part-one').innerHTML = (Number(document.getElementById('part-one').innerHTML)+ Math.round((00) + 1));
   update();
}) ;

document.getElementById('part-two').addEventListener("click", function(){
    document.getElementById('part-two').innerHTML = (Number(document.getElementById('part-two').innerHTML) +Math.round(00 + 1) );
    update();
    }) ;
document.getElementById('part-three').addEventListener("click", function(){
    document.getElementById('part-three').innerHTML = (Number(document.getElementById('part-three').innerHTML)+ Math.round(00 +1));
    update();
        }) ;
document.getElementById('part-four').addEventListener("click", function(){
    document.getElementById('part-four').innerHTML = (Number(document.getElementById('part-four').innerHTML)+Math.round (00 +1));
    update();
            })             


})();
