(() => {
    function myCallbackFuntion(error, persons) {
        persons.forEach(element => {
            console.log(element.id);
        });
    } 

    document.getElementById("run").onclick = () => {
       console.error( window.lib.getPersons(myCallbackFuntion));
        
    };
})();