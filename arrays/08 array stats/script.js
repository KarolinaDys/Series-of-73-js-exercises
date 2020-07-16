(function() {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

   document.getElementById("run").addEventListener("click", function(){
       if(fruits.includes("apple")){
        alert(" yes " + fruits.indexOf("apple")+ " apple ");
       }
       else{
           alert(" no " + "apple" ) 
       }
   })

})();
