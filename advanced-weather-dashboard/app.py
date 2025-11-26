from flask import Flask, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import requests

# 1. CONFIGURAÇÃO BÁSICA E SEGURANÇA
load_dotenv()
API_KEY = os.getenv("OPENWEATHER_API_KEY")

app = Flask(__name__)
# Habilita o CORS
CORS(app) 

BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

# ENDPOINT PRINCIPAL (O PROXY)
@app.route('/api/weather/<city>', methods=['GET'])
def get_weather(city):
    
    params = {
        'q': city,
        'appid': API_KEY,
        'units': 'metric',
        'lang': 'pt'
    }

    try:
        response = requests.get(BASE_URL, params=params)
        data = response.json()
        
        # Tratamento de Erros da API Externa
        if response.status_code != 200:
            return jsonify({
                "error": data.get("message", "Erro desconhecido")
            }), response.status_code

        # Limpeza e Padronização do JSON
        cleaned_data = {
            "city": data.get("name"),
            "country": data.get("sys").get("country"),
            "temp": round(data["main"]["temp"]),
            "temp_min": round(data["main"]["temp_min"]),
            "temp_max": round(data["main"]["temp_max"]),
            "description": data["weather"][0]["description"].capitalize(),
            "icon": data["weather"][0]["icon"],
            "humidity": data["main"]["humidity"],
            "wind_speed": round(data["wind"]["speed"] * 3.6),
        }
        
        return jsonify(cleaned_data)

    except requests.exceptions.RequestException:
        return jsonify({"error": "Erro de conexão."}), 500

if __name__ == '__main__':
    app.run(debug=True)