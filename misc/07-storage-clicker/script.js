(function() {

    // your code here
    counter = Number(localStorage.getItem("counter"))
    document.getElementById('target').innerHTML = counter;

    document.getElementById('increment').addEventListener("click", function(){
        counter += 1;
        document.getElementById('target').innerHTML = counter;
        localStorage.setItem("counter", counter)
    })

})();