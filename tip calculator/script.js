function calcularPropina() {
    var total = document.getElementById('total').value;
    var percentage = document.getElementById('percentage').value;
    var propina = (total * percentage) / 100;
    var totalPagar = parseFloat(total) + parseFloat(propina);

    document.getElementById('propina').textContent = propina.toFixed(2);
    document.getElementById('totalPagar').textContent = totalPagar.toFixed(2);
}