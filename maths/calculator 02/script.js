(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let opOne = Number(document.getElementById("op-one").value);
    let  opTwo = Number(document.getElementById("op-two").value);
    const performOperation = operation => {
        // perform the operation
        addition = opOne + opTwo;
        substraction = opOne - opTwo;
        multiplication = opOne * opTwo;
        division = opOne / opTwo;

    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();