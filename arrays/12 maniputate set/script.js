(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);
document.getElementById("run").addEventListener("click", function (){
    fruits.add("bannana");
    fruits.add("kiwi");
    fruits.delete("apple")
console.log(fruits)
})
    
})();