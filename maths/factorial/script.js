(function() {
   
    document.getElementById("run").addEventListener("click", function() {
        
        let num = Number(document.getElementById("number").value);
        let result="";
          result = (num * (num - 1));
           
        alert (result)
});

})();