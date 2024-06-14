// Lista de doações simuladas
var donations = [
    { type: 'sache', amount: 50 },
    { type: 'ração', amount: 100 },
    { type: 'produtos de higiene', amount: 75 },
    { type: 'medicamentos', amount: 75 }
];

// Calcula o total de doações usando o método reduce para somar todas as quantidades
var total = donations.reduce((total, donation) => total + donation.amount, 0);

// Seleciona o elemento do termômetro de doações no HTML usando seu ID
var donationProgress = document.getElementById('donation-progress');

// Cria um novo elemento de progresso
var progress = document.createElement('progress');

// Define o valor inicial do progresso como 0
progress.value = 0;

// Define o valor máximo do progresso como o total de doações
progress.max = total;

// Adiciona o elemento de progresso ao termômetro de doações no HTML
donationProgress.appendChild(progress);

// Variável para controlar se o progresso está aumentando ou diminuindo
var increasing = true;

// Função que é executada a cada 500 milissegundos
setInterval(function() {
    // Se o progresso estiver aumentando
    if (increasing) {
        // Aumenta o valor do progresso em 10
        progress.value += 10;

        // Se o valor do progresso for maior ou igual ao total, começa a diminuir
        if (progress.value >= total) {
            increasing = false;
        }
    } else {
        // Diminui o valor do progresso em 10
        progress.value -= 10;

        // Se o valor do progresso for menor ou igual a 0, começa a aumentar
        if (progress.value <= 0) {
            increasing = true;
        }
    }
}, 500);

// Função para adicionar uma doação
function addDonation(event) {
    // Previne o comportamento padrão do formulário
    event.preventDefault();

    // Obtém o tipo e a quantidade da doação do formulário
    var type = document.getElementById('name').value;
    var amount = Number(document.getElementById('amount').value);

    // Adiciona a nova doação à lista
    donations.push({ type: type, amount: amount });

    // Recalcula o total
    total = donations.reduce((total, donation) => total + donation.amount, 0);

    // Atualiza o valor máximo do progresso
    progress.max = total;
}