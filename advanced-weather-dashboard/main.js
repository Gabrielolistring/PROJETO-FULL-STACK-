// main.js

// URL base do seu Back-end em Python (Flask)
// O Flask está rodando na porta 5000.
const BACKEND_URL = 'http://127.0.0.1:5000/api/weather/';

// 1. Selecionar Elementos do DOM (Document Object Model)
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const dashboard = document.getElementById('weather-dashboard');
const errorMessage = document.getElementById('error-message');

// Elementos de exibição de dados
const cityNameEl = document.getElementById('city-name');
const tempEl = document.getElementById('temperature');
const descEl = document.getElementById('description');
const iconEl = document.getElementById('weather-icon');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind-speed');
const tempRangeEl = document.getElementById('temp-range');


// 2. Função Assíncrona para Buscar o Clima
async function fetchWeather(city) {
    // Esconde o dashboard e a mensagem de erro antes de cada busca
    dashboard.classList.add('hidden');
    errorMessage.classList.add('hidden');

    try {
        // Codifica a cidade para lidar com espaços e acentos (ex: "São Paulo")
        const url = BACKEND_URL + encodeURIComponent(city);
        
        // Faz a requisição para o seu Back-end Python
        const response = await fetch(url);
        
        // Converte a resposta para JSON
        const data = await response.json();

        if (response.status !== 200) {
            // Se o status NÃO for 200 (OK), trata como erro (404, 500, etc.)
            throw new Error(data.error || 'Erro desconhecido ao buscar dados.');
        }

        // Se deu tudo certo (status 200)
        displayWeather(data);

    } catch (error) {
        // Trata erros de rede ou erros retornados pelo Back-end (404, 500)
        console.error('Erro:', error.message);
        displayError(`Erro ao buscar: ${city}. Verifique o nome da cidade ou a chave API.`);
    }
}

// 3. Função para Exibir os Dados na Tela
function displayWeather(data) {
    cityNameEl.textContent = `${data.city}, ${data.country}`;
    tempEl.innerHTML = `${data.temp}°C`;
    descEl.textContent = data.description;
    humidityEl.textContent = `${data.humidity}%`;
    windEl.textContent = `${data.wind_speed} km/h`;
    tempRangeEl.textContent = `${data.temp_max}°C / ${data.temp_min}°C`;

    // Constrói a URL do ícone (OpenWeatherMap)
    iconEl.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
    iconEl.alt = data.description;
    
    // Mostra o dashboard e esconde o erro
    dashboard.classList.remove('hidden');
}

// 4. Função para Exibir Erros
function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    dashboard.classList.add('hidden');
}

// 5. Listener para o Formulário de Pesquisa
searchForm.addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário (que recarregaria a página)
    event.preventDefault(); 
    
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
        // Limpa o input após a busca
        cityInput.value = ''; 
    }
});