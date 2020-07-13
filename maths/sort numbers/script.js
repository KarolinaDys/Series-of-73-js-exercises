(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {
       numberArray = new Array (2, 4, 14, 10, 90, 23, 16)
        function compareNumbers(a, b) {
            return a - b
         }  
         alert("Sorted " + numberArray.sort(compareNumbers))
    });
    
})();