(() => {
    function myCallbackFuntion(error, articles) {
        articles.forEach(element => {
            console.log(element.id);
        });
    } 

    document.getElementById("run").onclick = () => {
        window.lib.getPosts(myCallbackFuntion);
        
    };

})();