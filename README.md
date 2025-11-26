Este projeto realizei para estudar mais sobre APIs e como elas funcionam.

## ✨ Funcionalidades
**🔧 Back-end (Python/Flask)**

Proxy seguro para ocultar a chave API da OpenWeatherMap (usando .env).

Padronização e tratamento de erros das respostas JSON.

Suporte a CORS para permitir a comunicação com o Front-end.

Organização simples e clara, focada em segurança e boas práticas.

**🖥️ Front-end (HTML/CSS/JS)**

Interface limpa e responsiva.
Busca de cidades com requisições assíncronas usando fetch + async/await.

Exibição organizada de:

Temperatura

Umidade

Velocidade do vento

Ícone do clima (OpenWeatherMap)

## 🛠️ Como Executar Localmente
**📌 Pré-requisitos**

Python 3 instalado

**`pip instalado`**

**1. Clonar o Repositório**

**`git clone https://github.com/SEU_USUARIO/PROJETO-FULL-STACK-.git`**     
**`cd advanced-weather-dashboard`**

**2. Configurar a Chave API Secreta**

Crie um arquivo .env na raiz do projeto e adicione:
**`OPENWEATHER_API_KEY="SUA_CHAVE_AQUI"`**

Essa chave api você consegue criando uma conta no site https://openweathermap.org/

**3. Configurar e Iniciar o Back-end**

**`python -m venv venv`**    

Ativar:

Windows:
**`& ".\venv\Scripts\activate"`**

linux/macOS:

**`source venv/bin/activate`**

Instalar dependências:

**`pip install Flask python-dotenv requests flask-cors`**

Iniciar:

**`python app.py`**

**4. Abrir o Front-end**

Abra o arquivo:

index.html

## ⚙️ Tecnologias Utilizadas

**Python**

**Flask**

**Requests**

**Dotenv**

**Flask-CORS**

**HTML**

**CSS**

**JavaScript ES6+**




