document.getElementById("calc-btn").onclick = function () {
    let IntV = document.getElementById("int-input").value.toString();
    if (IntV != "") {
        let terms_array = [];
        for (var i = 0; i < (IntV.length/3 + IntV.length%3); i++) {
            terms_array.push(IntV.slice(-3));
            IntV = IntV.slice(0, IntV.slice(0, IntV.length - 3));
        }
    }
};