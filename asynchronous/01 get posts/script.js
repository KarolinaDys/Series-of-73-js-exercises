(() => {
    // your code here
    function myCallbackFunction(error, articles) {
        if (error) {
          console.error(error)
          return
        }
        
        console.log(articles)
      }
      
      window.lib.getPosts(myCallbackFunction);
})();