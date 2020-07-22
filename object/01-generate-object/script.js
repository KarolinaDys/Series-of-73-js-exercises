(() => {
    document.getElementById("run").addEventListener("click",function(){
        let object={};
        object.lastname = 'Dys';
        object.firstname = 'Karolina';
        object.age = '32';
        object.city ='Lublin';
        object.country = 'Poland';
        console.log(object);
    })
})();