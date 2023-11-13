document.getElementById("convertBtn").addEventListener("click", function () {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    var errorSpan = document.getElementById("error");

    if (!isNaN(celsius)) {
        var f = (celsius * 9 / 5) + 32;
        document.getElementById("fahrenheit").value = f.toFixed(2);
        document.getElementById("result").innerHTML = celsius + "°C is " + f.toFixed(2) + "°F";
        errorSpan.innerHTML = "";
    } else if (!isNaN(fahrenheit)) {
        var c = (fahrenheit - 32) * 5 / 9;
        document.getElementById("celsius").value = c.toFixed(2);
        document.getElementById("result").innerHTML = fahrenheit + "°F is " + c.toFixed(2) + "°C";
        errorSpan.innerHTML = "";
    } else {
        errorSpan.innerHTML = "Please enter a valid temperature.";
    }
});

