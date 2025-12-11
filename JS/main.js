function clean(num) {
    return Number(num.toFixed(10)).toString(); 
}

function calculateHorner() {
    const coeffsInput = document.getElementById("coeffs");
    const xInput = document.getElementById("xValue");
    const resultBox = document.getElementById("resultBox");

    const coeffs = coeffsInput.value.split(",").map(c => parseFloat(c.trim()));
    const x = parseFloat(xInput.value);

    if (coeffs.some(isNaN) || isNaN(x)) {
        resultBox.innerHTML = "⚠️ Please enter valid numbers.";
        return;
    }

    let steps = "";
    let n = coeffs.length - 1;

    let P = coeffs[0];
    steps += `P_${n} = a_${n} = ${clean(P)}<br>`;

    for (let i = 1; i < coeffs.length; i++) {
        let prevIndex = n - (i - 1);
        let curIndex = n - i;

        steps += `P_${curIndex} = P_${prevIndex} * x + a_${curIndex} = `
               + `(${clean(P)}) * (${clean(x)}) + (${clean(coeffs[i])}) = `;

        P = P * x + coeffs[i];

        steps += `${clean(P)}<br>`;
    }

    resultBox.innerHTML = steps;
}
// let a = 10 ;
// let b = 5 ;
// console.log(a,b);

// [a,b ]= [b, a];
// console.log(a,b);