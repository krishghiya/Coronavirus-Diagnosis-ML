from flask import Flask
from flask_cors import CORS
from flask import request
from joblib import load

app = Flask(__name__)
cors = CORS(app)

@app.route('/data', methods=['POST'])
def make_prediction():
    data = request.get_json()
    if request.method != 'POST' or not data:
        return "Must be a POST request and contain body"
    
    return {'prediction': 'likely',
            'confidence': 100}