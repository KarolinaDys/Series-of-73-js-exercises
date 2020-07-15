(function() {

    document.getElementById("run").addEventListener("click",function(){
        let year = document.getElementById("year").value;
        let theNumberOfDays = 0 ;
        
    
         for (let months = 0; months < 12; months++){
            let date = new Date (year,months,13);
            if (date.getDay() == 5){
                theNumberOfDays++;
            }
        }
        alert(theNumberOfDays) 
    
    })
})();