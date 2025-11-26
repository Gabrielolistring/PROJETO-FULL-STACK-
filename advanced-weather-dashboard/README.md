⛈️ Advanced Weather Dashboard
(Python Flask + JavaScript ES6+)

Um projeto Full-Stack contendo:

Back-end em Python/Flask funcionando como API Proxy para proteger a chave da OpenWeatherMap.

Front-end em HTML/CSS/JavaScript, consumindo dados limpos e padronizados, exibidos em um dashboard moderno e responsivo.

✨ Funcionalidades
🔧 Back-end (Python/Flask)

Proxy seguro para ocultar a chave API da OpenWeatherMap (usando .env).

Padronização e tratamento de erros das respostas JSON.

Suporte a CORS para permitir a comunicação com o Front-end.

Organização simples e clara, focada em segurança e boas práticas.

🖥️ Front-end (HTML/CSS/JS)

Interface limpa e responsiva.

Busca de cidades com requisições assíncronas usando fetch + async/await.

Exibição organizada de:

Temperatura

Umidade

Velocidade do vento

Ícone do clima (OpenWeatherMap)

🛠️ Como Executar Localmente
📌 Pré-requisitos

Python 3 instalado

pip instalado

1. Clonar o Repositório
git clone https://github.com/SEU_USUARIO/advanced-weather-dashboard.git
cd advanced-weather-dashboard

2. Configurar a Chave API Secreta

Crie uma conta no OpenWeatherMap e obtenha sua API key.

Crie um arquivo chamado .env na raiz do projeto.

Adicione sua chave nesse formato:

# .env
OPENWEATHER_API_KEY="SUA_CHAVE_AQUI"


Substitua "SUA_CHAVE_AQUI" pela sua chave real.

3. Configurar e Iniciar o Back-end

O servidor Flask rodará em:
👉 http://127.0.0.1:5000

Criar ambiente virtual:
python -m venv venv

Ativar o ambiente:

Windows (PowerShell):

& ".\venv\Scripts\activate"


Linux/macOS:

source venv/bin/activate

Instalar dependências:
pip install Flask python-dotenv requests flask-cors

Iniciar o servidor:
python app.py

4. Abrir o Front-end

Basta abrir o arquivo:

index.html


Use “Clique com o botão direito → Abrir com…” no seu navegador.

Com o Flask rodando, utilize o campo de busca e veja o dashboard em ação.

⚙️ Tecnologias Utilizadas

Python 3

Flask

dotenv

Requests

Flask-CORS

HTML5 / CSS3

JavaScript ES6+

JavaScript (ES6+): Lógica e consumo de API no Front-end.

HTML5 & CSS3: Estrutura e estilização.
