(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thersday", "Friday", "Saturday"];
    const months =["January" , "February" , "March", "April" , "May", "June", "July", "Augustus", "September" , "October" ,"November", "Decembe"] 
    document.getElementById("target").innerHTML = days[now.getDay()] + " " + now.getDate()+ "/" +
     months[now.getMonth()] + "/" + now.getFullYear() + " , " + now.getHours() + "h" + now.getMinutes() + "."+ now.getSeconds()+ "sec";


})();