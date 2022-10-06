function calcular() {
    var cantidad = document.getElementById("cantidad").value;
    var color = document.getElementById("color").value;

    parseInt(cantidad)

    var total = cantidad * 400000

    document.getElementById("total").innerHTML = total.toLocaleString();
    document.getElementById("resultado-cantidad").innerHTML = cantidad;
    document.getElementById('resultado-color').style.backgroundColor = color
}

