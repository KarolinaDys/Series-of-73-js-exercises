(function() {

    var fruits = [
        "apple",
        "peer",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarine",
        "durian",
        "peach",
        "grape",
        "cherry",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", function (){
        fruits.forEach(function(el) {
            console.log(el.toUpperCase());
        });
    })
})();