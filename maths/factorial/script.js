(function() {
   
    document.getElementById("run").addEventListener("click", function() {
        
        let num = Number(document.getElementById("number").value);

        function factorialize(num) {
            if (num < 0) 
                  return -1;
            else if (num == 0) 
                return 1;
            else {
                return (num * factorialize(num - 1));
            }
          }
           
          factorialize(num);
          alert  (factorialize(num))
});

})();