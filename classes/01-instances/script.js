(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const Skitty= new Cat ("Skitty", "9");
    const Pixel = new Cat ("Pixel", "6");
    console.log (Skitty , Pixel)
})();