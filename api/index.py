from flask import Flask
import requests
from flask import Flask, jsonify, request
app = Flask(__name__)
import os

api_key = os.getenv('API_KEY')

def create_submission(code, language_id):
    url = "https://judge0-ce.p.rapidapi.com/submissions"
    headers = {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        "Content-Type": "application/json",
    }
    payload = {
        "source_code": code,
        "language_id": language_id
    }
    response = requests.post(url, json=payload, headers=headers)
    print("Create Submission Response:", response.json())  # Added logging
    return response.json()

def get_submission_result(token):
    url = f"https://judge0-ce.p.rapidapi.com/submissions/{token}"
    headers = {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    }
    response = requests.get(url, headers=headers)
    print("Get Submission Result Response:", response.json())  # Added logging
    return response.json()

@app.route("/api")
def run_code():
    return "<h1>Hello</h1>"


if __name__ == "__main__":
    app.run(debug=True)
