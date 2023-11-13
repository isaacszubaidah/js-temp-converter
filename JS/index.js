document.getElementById("convertBtn").addEventListener("click", function () {
    let celsius = parseFloat(document.getElementById("celsius").value);
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    let errorSpan = document.getElementById("error");

    if (!isNaN(celsius)) {
        let f = (celsius * 9 / 5) + 32;
        document.getElementById("fahrenheit").value = f.toFixed(2);
        document.getElementById("result").innerHTML = celsius + "°C is " + f.toFixed(2) + "°F";
        errorSpan.innerHTML = "";
    } else if (!isNaN(fahrenheit)) {
        let c = (fahrenheit - 32) * 5 / 9;
        document.getElementById("celsius").value = c.toFixed(2);
        document.getElementById("result").innerHTML = fahrenheit + "°F is " + c.toFixed(2) + "°C";
        errorSpan.innerHTML = "";
    } else {
        errorSpan.innerHTML = "Please enter a valid temperature.";
    }
});


document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("celsius").style.border = "1px solid #ccc";
    document.getElementById("fahrenheit").style.border = "1px solid #ccc";
});
