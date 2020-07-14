(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var date=new Date(); 
    var day=date.getHours();
    
    if(day<=18) {
        document.getElementById("target").innerHTML = "Hello"; // Komunikat wyświetlany do godziny 12:00

    } else {
        document.getElementById("target").innerHTML = "Good evening"; // Komunikat wyświetlany po godzinie 18:00
    }
})();