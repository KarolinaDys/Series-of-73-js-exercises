(function() {

    // your code here
    function $(x) {return document.getElementById(x);}
    function update() {$('target').innerText = String(
        '+' + $('part-one').value 
        + ('00'+($('part-two').value)).substr(-2,2)
        + ('00'+($('part-three').value)).substr(-2,2)
        + ('00'+($('part-four').value)).substr(-2,2) )};

    rolls = ['part-one', 'part-two', 'part-three','part-four']
    setInterval(repeater,40);
    function repeater () {rolls.forEach(tick)};
    function tick (item) 
    {   x = item;
        if (x != 0) {
        $(x).value =Number($(x).value) + 1;
        if ($(x).value > Number($(x).getAttribute('data-max'))) {$(x).value = $(x).getAttribute('data-min')}
        if ($(x).value < Number($(x).getAttribute('data-min'))) {$(x).value = $(x).getAttribute('data-min')}
        update();}
    };

    document.getElementById('fix-part-one').onclick = () => {rolls[0] = 0}
    document.getElementById('fix-part-two').onclick = () => {rolls[1] = 0}
    document.getElementById('fix-part-three').onclick = () => {rolls[2] = 0}
    document.getElementById('fix-part-four').onclick = () => {rolls[3] = 0}


})();