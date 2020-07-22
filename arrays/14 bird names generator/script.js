(() => {
    const birds = [
        {name: "seagull", num: 1},
        {name: "raven", num: 3},
        {name: "chickadee", num: 2},
        {name: "owl", num: 4},
        {name: "buzzard", num: 8},
        {name: "pigeon", num: 1},
        {name: "magpie", num: 3},
        {name: "vulture", num: 2},
        {name: "falcon", num: 1},
        {name: "robin", num: 2},
        {name: "dove", num: 1},
        {name: "crow", num: 5},
    ];
    const adjectives = new Set([
        "gray",
        "hoopoe",
        "singing",
        "howling",
        "perched",
        "tall",
        "small",
        "blue",
        "panting",
        "tangent",
        "sported",
    ]);
    document.getElementById("run").addEventListener("click", function(){
    let bird = [];
    let adjective = [];
    
    let arrAdjective = Array.from(adjectives);

    bird.push(birds[Math.floor(Math.random() * birds.length)]);
    adjective.push(
      arrAdjective[Math.floor(Math.random() * arrAdjective.length)]
    );
    console.log(bird);
    console.log(adjective);

    if (bird[0].num == 1) {
      document.getElementById("target").innerHTML =
        "A" + " " + adjective + " " + bird[0].name;
    } else {
      document.getElementById("target").innerHTML =
        "A few" + " " + adjective + " " + bird[0].name + "s";
    }
})
  })();