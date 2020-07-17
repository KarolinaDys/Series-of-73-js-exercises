(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
document.getElementById("run").addEventListener("click" , function(){
    console.log(people.size)
    if(people.has("Alexandre") == true ){
    console.log("Alexandre is on the list")
}
    else{
        console.log("Alexandre isn't on the list")
    }
    

})
   
})();