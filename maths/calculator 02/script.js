(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let number_1 = document.getElementById('op-one');
    let number_2 = document.getElementById('op-two');

    const performOperation = operation => {
        // perform the operation
        let total = 0;
        switch (operation) {
            case 'addition':
                total = parseInt(number_1.value) + parseInt(number_2.value);
                break;
            case 'substraction':
                total = parseInt(number_1.value) - parseInt(number_2.value);
                break;
            case 'multiplication':
                total = parseInt(number_1.value) * parseInt(number_2.value);
                break;
            case 'division':
                total = parseInt(number_1.value) / parseInt(number_2.value);
                total = Math.round((total + Number.EPSILON) * 100) / 100;
                break;
            default:
            // code block
        }
        alert(total);
    };
    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();