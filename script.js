document.getElementById("calc-btn").onclick = function () {
    let IntV = document.getElementById("int-input").value.toString();
    if (IntV != "") {
        let terms_array = [];
        let temp_IntV = IntV;
        for (var i = 0; i < Math.ceil(IntV.length/3); i++) {
            terms_array.push(temp_IntV.slice(-3));
            temp_IntV = temp_IntV.slice(0, temp_IntV.length - 3);
        }
        console.log(terms_array);
        let equations = terms_array[0];
        document.getElementById("result-div").innerHTML += equations + " = " + eval(equations);
        for (var i = 1; i < terms_array.length; i++) {
            equations = equations + " + " + terms_array[i];
            document.getElementById("result-div").innerHTML += "<br>" + equations + " = " + eval(equations);
        }
    }
};