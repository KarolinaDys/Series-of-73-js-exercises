(function() {

    document.getElementById("run").addEventListener("click", function() {
        const min = 1;
        const max = 21;
        
const result =  Math.floor(Math.random() * (max-min+1) + min)
let squere = Math.pow(result, 2)
 alert (" random number from 1 to 21 = "+ result + " squared = " + squere);
    });

})();