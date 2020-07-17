(function() {

    // your code here
    document.getElementById("run").addEventListener("click",function(){
        function number(min, max) {
            min = 1;
            max = 100;
            return (Math.random() * (max - min)) + min;
             
        }
    const tab =[
        document.getElementById("n-1").innerHTML = Math.round(number()),
        document.getElementById("n-2").innerHTML = Math.round(number()),
        document.getElementById("n-3").innerHTML = Math.round(number()),
        document.getElementById("n-4").innerHTML = Math.round(number()),
        document.getElementById("n-5").innerHTML = Math.round(number()),
        document.getElementById("n-6").innerHTML = Math.round(number()),
        document.getElementById("n-7").innerHTML = Math.round(number()),
        document.getElementById("n-8").innerHTML = Math.round(number()),
        document.getElementById("n-9").innerHTML = Math.round(number()),
        document.getElementById("n-10").innerHTML = Math.round(number()),
    ]
    function compareNr(a, b) {
        return a - b
    }
    document.getElementById("min").innerHTML = tab.sort(compareNr)[0];
    document.getElementById("max").innerHTML = tab.sort(compareNr)[9];
          let sum = 0;
          for (i = 0; i < tab.length; i++) {
            sum = sum + tab[i];
    
          }
          document.getElementById("sum").innerHTML = sum;    
          let result = 0;
           result = sum / tab.length
         document.getElementById("average").innerHTML = result;

    })    
})();