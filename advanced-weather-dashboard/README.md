# ⛈️ Advanced Weather Dashboard (Python Flask + JavaScript ES6+)

Este é um projeto Full-Stack que demonstra a construção de uma **API segura em Python (Flask)** para funcionar como um proxy (intermediário) para a API externa do OpenWeatherMap, protegendo a chave de acesso. O Front-end em **JavaScript** consome o dado limpo e padronizado e exibe um dashboard interativo.

## ✨ Funcionalidades

* **Back-end (Python/Flask):**
    * Proxy de API para ocultar a chave secreta da OpenWeatherMap (usando `.env`).
    * Tratamento de erros e padronização da resposta JSON.
    * Suporte a CORS (Cross-Origin Resource Sharing) para comunicação com o Front-end.
* **Front-end (HTML/CSS/JS):**
    * Interface responsiva para busca de cidades.
    * Uso de `async/await` e `fetch` para comunicação assíncrona com o Back-end.
    * Exibição organizada de temperatura, umidade, velocidade do vento e ícone do clima.

---

## 🛠️ Como Executar Localmente

**Pré-requisitos**

Você precisa ter o **Python 3** e o **pip** instalados em seu sistema.

## 1. Clonar o Repositório

Abra seu terminal e clone este projeto:

```bash
git clone [https://github.com/SEU_USUARIO/advanced-weather-dashboard.git](https://github.com/SEU_USUARIO/advanced-weather-dashboard.git)
cd advanced-weather-dashboard
---
## 2. Configurar a Chave API Secreta
Este passo é crucial para o Back-end funcionar.

Crie uma conta na OpenWeatherMap e obtenha uma chave API gratuita.

Crie um arquivo chamado .env na pasta raiz do projeto.

Adicione sua chave API dentro deste arquivo, seguindo o formato:

Ini, TOML

# .env
OPENWEATHER_API_KEY="SUA_CHAVE_AQUI"
(Substitua "SUA_CHAVE_AQUI" pela chave que você obteve.)
---
## 3. Configurar e Iniciar o Back-end
O Back-end rodará em http://127.0.0.1:5000.

Bash

# Crie o ambiente virtual (venv)
python -m venv venv

# Ative o ambiente virtual (Windows PowerShell)
& ".\venv\Scripts\activate" 
# Ou se for Linux/macOS:
# source venv/bin/activate

# Instale as dependências necessárias
pip install Flask python-dotenv requests flask-cors

# Inicie o servidor Flask
python app.py
Deixe o servidor rodando no terminal.

---

## 4. Abrir o Front-end
Abra o arquivo index.html no seu navegador de preferência (clique com o botão direito -> Abrir com...).

Com o servidor Flask rodando em segundo plano, utilize o formulário de busca na página para testar a aplicação.

⚙️ Tecnologias Utilizadas
Python: Linguagem principal do Back-end.

Flask: Micro-framework para criação da API.

JavaScript (ES6+): Lógica e consumo de API no Front-end.

HTML5 & CSS3: Estrutura e estilização.
