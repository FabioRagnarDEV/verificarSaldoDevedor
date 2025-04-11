// Evento de clique para o botão "Calcular"  
document.getElementById('btnCalcular').addEventListener('click', function () {  
    // Selecionando todos os campos obrigatórios  
    const inputs = document.querySelectorAll('input[required]');  
    let allValid = true; // Variável para controlar se todos os campos estão preenchidos  

    // Validação dos campos obrigatórios  
    inputs.forEach(input => {  
        if (!input.value.trim()) { // Verifica se o campo está vazio  
            input.style.borderColor = 'red'; // Destaca o campo em vermelho  
            allValid = false; // Marca que nem todos os campos estão válidos  
        } else {  
            input.style.borderColor = ''; // Restaura a cor do campo caso esteja preenchido  
        }  
    });  

    // Se algum campo obrigatório não estiver preenchido, exibe um alerta e interrompe o cálculo  
    if (!allValid) {  
        showCustomAlert('Por favor, preencha todos os campos obrigatórios marcados com *.');  
        return;  
    }  

    // Se todos os campos estiverem válidos, chama a função de cálculo  
    calcular();  
});  

// Função para calcular o saldo devedor  
function calcular() {  
    document.getElementById('result').textContent = "Calculando..."; // Define uma mensagem temporária  

    // Usando setTimeout para simular o tempo de processamento  
    setTimeout(() => {  
        // Obtendo valores dos campos de entrada   
        const fundoComum = parseFloat(document.getElementById('fundoComum').value) || 0;  
        const taxaAdministrativa = parseFloat(document.getElementById('taxaAdministrativa').value) || 0;  
        const fundoReserva = parseFloat(document.getElementById('fundoReserva').value) || 0;  
        const taxaAdesao = parseFloat(document.getElementById('pagoTaxaAdmAt').value) || 0;  

        const pagoFundoComum = parseFloat(document.getElementById('pagoFundoComum').value) || 0;  
        const pagoTaxaAdministrativa = parseFloat(document.getElementById('pagoTaxaAdministrativa').value) || 0;  
        const pagoFundoReserva = parseFloat(document.getElementById('pagoFundoReserva').value) || 0;  
        const pagoTaxaAdesao = parseFloat(document.getElementById('pagoTaxaAdmAt').value) || 0;  

        // Cálculo do total inicial e total pago  
        const totalInicial = fundoComum + taxaAdministrativa + fundoReserva + taxaAdesao;  
        const totalPago = pagoFundoComum + pagoTaxaAdministrativa + pagoFundoReserva + pagoTaxaAdesao;  

        // Cálculo do saldo devedor  
        const saldoDevedor = totalInicial - totalPago;  

        // Exibir o resultado formatado  
        const resultado = `O percentual restante do saldo devedor é de ${saldoDevedor.toFixed(4)}%`;  
        document.getElementById('result').textContent = resultado;  

        // Exibe a caixa de confirmação  
        document.getElementById('confirmationBox').style.display = 'block';  
    }, 700);  
}  

// Função para exibir um alerta personalizado  
function showCustomAlert(message) {  
    document.getElementById('customAlertMessage').textContent = message;  
    document.getElementById('customAlert').style.display = 'flex';  
}  

// Evento de click para o botão "OK" no alerta  
document.getElementById('customAlertOK').addEventListener('click', function () {  
    document.getElementById('customAlert').style.display = 'none';  
});  

// Evento de clique para o botão "Sim"
document.getElementById('btnSim').addEventListener('click', function () {
    showCustomAlert('Ótimo! Informação registrada como compatível com o sistema.');
    document.getElementById('confirmationBox').style.display = 'none';
});

// Evento de clique para o botão "Não"
document.getElementById('btnNao').addEventListener('click', function () {
    showCustomAlert('Por favor, considere solicitar ajuda a seu lider imediato para maiores detalhes ou abrir caso ao departamento de ajuste.');
    document.getElementById('confirmationBox').style.display = 'none';
});

// Função para zerar os campos e resultados  
function zerar() {  
    document.querySelectorAll('.input-group input').forEach(input => input.value = '');  
    document.getElementById('result').textContent = '';  
    document.getElementById('confirmationBox').style.display = 'none';  
}  
