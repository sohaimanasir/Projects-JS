let string = "";
let justEvaluated = false;  
let buttons = document.querySelectorAll('.button');
let input = document.querySelector('input');

Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {

        let value = e.target.innerHTML;

        if (value == "=") {
            string = String(string);
            if (string == "") return;

            string = string.replace(/[+−×÷]$/, "");

            string = string.replace(/×/g, '*');
            string = string.replace(/÷/g, '/');
            string = string.replace(/−/g, '-');

            string = string.replace(/(\d+\.?\d*)%/g, '($1/100)');

            try {
                let result = eval(string);

                if (!isFinite(result)) {
                    throw "Math error";
                }

                    result = parseFloat(result.toPrecision(12));

                string = String(result);
                input.value = string;
                justEvaluated = true;
            } catch (error) {
                string = "";
                input.value = "Error";
            }

        } else if (value == "AC") {
            string = "";
            input.value = string;
            justEvaluated = false;

        } else if (value == "⌫") {
            string = String(string);

            // NEW: if the end looks like (−5) from the ± button, turn it back into 5
            let signed = string.match(/\(−(\d+\.?\d*)\)$/);
            if (signed) {
                string = string.slice(0, signed.index) + signed[1];
            } else {
                string = string.slice(0, -1);
            }
            input.value = string;

        } else if (value == "±") {

            let signed = string.match(/\(−(\d+\.?\d*)\)$/);
            let lastNumber = string.match(/(\d+\.?\d*)$/);

            if (signed) {
                string = string.slice(0, signed.index) + signed[1];
            } else if (lastNumber) {
                string = string.slice(0, lastNumber.index) + "(−" + lastNumber[1] + ")";
            }
            input.value = string;

        } else {
            // NEW: after a result, typing a number starts a fresh calculation
            // (but pressing + − × ÷ keeps using the result)
            let isNumberButton = "0123456789.".includes(value);
            if (justEvaluated && isNumberButton) {
                string = "";
            }
            justEvaluated = false;

            string = String(string) + value;
            input.value = string;
        }

    });
});


document.addEventListener('keydown', (e) => {
    let key = e.key;
    let buttonValue;

    if ("0123456789.".includes(key) && key.length === 1) {
        buttonValue = key;
    } else if (key === "+") {
        buttonValue = "+";
    } else if (key === "-") {
        buttonValue = "−";
    } else if (key === "*") {
        buttonValue = "×";
    } else if (key === "/") {
        buttonValue = "÷";
    } else if (key === "%") {
        buttonValue = "%";
    } else if (key === "Enter" || key === "=") {
        buttonValue = "=";
    } else if (key === "Backspace") {
        buttonValue = "⌫";
    } else if (key === "Escape") {
        buttonValue = "AC";
    } else {
        return;
    }

    e.preventDefault();

    let button = Array.from(buttons).find((btn) =>
        btn.textContent.trim() === buttonValue
    );

    if (button) {
        button.click();
    }
});
