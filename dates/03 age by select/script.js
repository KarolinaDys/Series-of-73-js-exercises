(function() {

    // your code here

    
        
        document.getElementById("run").addEventListener("click", function(){
            var dobDay = document.getElementById("dob-day").value;
            var dobMonth = document.getElementById("dob-month").value;
            var  dobYear = document.getElementById("dob-year").value;

            var date1 = new Date();
            var date2 = new Date(dobYear);
            var y1 = date1.getFullYear(); 
            var y2 = date2.getFullYear(); 
            var age = y1 - y2;          
            alert("Age : " + age + " birth data : "+ dobDay +"/" + dobMonth + "/"+ dobYear );
        });

})();