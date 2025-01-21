document.getElementById('btnCalcular').addEventListener('click', function () {
    const inputs = document.querySelectorAll('input[required]');
    let allValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            allValid = false;
        } else {
            input.style.borderColor = '';
        }
    });

    if (!allValid) {
        alert('Por favor, preencha todos os campos obrigatórios marcados com *.');
        return;
    }

    calcular();
});

function calcular() {
    const grupoCota = document.getElementById('grupoCota').value;
    const fundoComum = parseFloat(document.getElementById('fundoComum').value) || 0;
    const taxaAdministrativa = parseFloat(document.getElementById('taxaAdministrativa').value) || 0;
    const fundoReserva = parseFloat(document.getElementById('fundoReserva').value) || 0;
    const taxaAdesao = parseFloat(document.getElementById('taxaAdesao').value) || 0;

    const pagoFundoComum = parseFloat(document.getElementById('pagoFundoComum').value) || 0;
    const pagoTaxaAdministrativa = parseFloat(document.getElementById('pagoTaxaAdministrativa').value) || 0;
    const pagoFundoReserva = parseFloat(document.getElementById('pagoFundoReserva').value) || 0;
    const pagoTaxaAdesao = parseFloat(document.getElementById('pagoTaxaAdesao').value) || 0;

    const totalInicial = fundoComum + taxaAdministrativa + fundoReserva + taxaAdesao;
    const totalPago = pagoFundoComum + pagoTaxaAdministrativa + pagoFundoReserva + pagoTaxaAdesao;

    const saldoDevedor = totalInicial - totalPago;

    document.getElementById('result').textContent =
        `O percentual do saldo devedor do grupo e cota ${grupoCota} é de ${saldoDevedor.toFixed(4)}%`;
}

function zerar() {
    document.querySelectorAll('.input-group input').forEach(input => input.value = '');
    document.getElementById('result').textContent = '';
}
console.log("Desenvolvido por Fabio França (SAC Eletrônico)");