(function() {
    let age = prompt("How old are you?", " 30 " );
    let gender = prompt ("Gender?", " women ");
    let town = prompt ("Town?", " gent ");
    if (confirm(age + gender + town + " Confirm? ")) {
        alert("thank you");
    } else {
            alert(  prompt("How old are you?", " 30 " ) + prompt ("Gender?", " women ") + prompt ("Town", " gent"));
        
    }
})();