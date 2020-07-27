(function() {

    document.getElementById("slider").addEventListener("input",function(){
        document.getElementById("target").innerText = "0"+document.getElementById("slider").value
    });

})();