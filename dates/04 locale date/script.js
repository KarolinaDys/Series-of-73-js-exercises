(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thersday", "Friday", "Saturday"];
    document.getElementById("target").innerHTML = days[now.getDay()] + " " + now.getDate()+ "/" +
     (now.getMonth()+1) + "/" + now.getFullYear() + " , " + now.getHours() + "h" + now.getMinutes() + "."+ now.getSeconds()+ "sec";


})();