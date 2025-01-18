function calcular() {
    // Coleta os dados
    const nomeColaborador = document.getElementById('nomeColaborador').value.trim();
    const fundoComum = parseFloat(document.getElementById('fundoComum').value) || 0;
    const taxaAdministrativa = parseFloat(document.getElementById('taxaAdministrativa').value) || 0;
    const fundoReserva = parseFloat(document.getElementById('fundoReserva').value) || 0;
    const taxaAdesao = parseFloat(document.getElementById('taxaAdesao').value) || 0;

    const pagoFundoComum = parseFloat(document.getElementById('pagoFundoComum').value) || 0;
    const pagoTaxaAdministrativa = parseFloat(document.getElementById('pagoTaxaAdministrativa').value) || 0;
    const pagoFundoReserva = parseFloat(document.getElementById('pagoFundoReserva').value) || 0;
    const pagoTaxaAdesao = parseFloat(document.getElementById('pagoTaxaAdesao').value) || 0;

    // Calcula os totais
    const totalInicial = fundoComum + taxaAdministrativa + fundoReserva + taxaAdesao;
    const totalPago = pagoFundoComum + pagoTaxaAdministrativa + pagoFundoReserva + pagoTaxaAdesao;
    const saldoDevedor = totalInicial - totalPago;

    // Verifica se o nome foi inserido
    if (!nomeColaborador) {
        document.getElementById('result').textContent = 'Por favor, insira o nome do colaborador.';
        return;
    }

    // Exibe o resultado com o nome do colaborador
    document.getElementById('result').textContent = 
        `${nomeColaborador}, o percentual do saldo devedor é de ${saldoDevedor.toFixed(4)}%`;
}

function zerar() {
    // Limpa os campos de entrada
    document.querySelectorAll('.input-group input').forEach(input => input.value = '');
    document.getElementById('result').textContent = '';
}
