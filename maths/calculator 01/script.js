(function() {
    // to get the value of an input: document.getElementById("element-id").value

 let opOne = Number(document.getElementById("op-one").value);
let  opTwo = Number(document.getElementById("op-two").value);
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let opOne = Number(document.getElementById("op-one").value);
        let  opTwo = Number(document.getElementById("op-two").value);
        let result = opOne + opTwo ;
        alert (result)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let opOne = Number(document.getElementById("op-one").value);
        let  opTwo = Number(document.getElementById("op-two").value);  
        let result = opOne - opTwo ;
        alert (result)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let opOne = Number(document.getElementById("op-one").value);
        let  opTwo = Number(document.getElementById("op-two").value);
        let result = opOne * opTwo ;
        alert (result)
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let opOne = Number(document.getElementById("op-one").value);
        let  opTwo = Number(document.getElementById("op-two").value);
        let result = opOne / opTwo ;
        alert (result)
    });
})();