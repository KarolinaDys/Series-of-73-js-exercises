(function() {

    function one (x) {
        return document.getElementById(x);
    }

    var textWrapper = one("target");
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    for (i = 0; i < document.getElementsByClassName("letter").length; i++) {
        document.getElementsByClassName("letter")[i].style = "opacity:0"
    }

    let time = 100
    let a = 0
    iterate();
    function iterate() {
        document.getElementsByClassName("letter")[a].style = "opacity:1", time
        a += 1;
        time = 50 + Math.pow(Math.random()*1,2) ;
        if (a < document.getElementsByClassName("letter").length) {
            setTimeout(iterate, time)
        };
    }

})();