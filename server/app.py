from flask import Flask
from flask_cors import CORS
from flask import request
from joblib import load
import pandas as pd
import os

application = Flask(__name__)
cors = CORS(application)

@application.route('/', methods=['GET'])
def welcome():
    return "Hi! This is the CMPE 195B Server!"

@application.route('/data', methods=['POST'])
def make_prediction():
    data = request.get_json()
    if not data:
        return "Must contain body"
    
    return calculate_prediction(data)

def calculate_prediction(data):
    mexico = load(os.path.join(os.path.dirname(__file__), 'mexico_model.joblib'))
    brazil = load(os.path.join(os.path.dirname(__file__), 'brazil_model.joblib'))
    israel = load(os.path.join(os.path.dirname(__file__), 'israel_model.joblib'))

    mexico_cols = load(os.path.join(os.path.dirname(__file__), 'mexico_cols.joblib'))
    brazil_cols = load(os.path.join(os.path.dirname(__file__), 'brazil_cols.joblib'))
    israel_cols = load(os.path.join(os.path.dirname(__file__), 'israel_cols.joblib'))

    mexico_df = pd.DataFrame.from_dict({k: [v] for k,v in data.items() if k in mexico_cols})
    
    brazil_df = pd.DataFrame.from_dict({k: [v] for k,v in data.items() if k in brazil_cols})
    brazil_df['Race_Black'] = data['Race'] == 'Black'
    brazil_df['Race_Hispanic/Latino'] = data['Race'] == 'Hispanic/Latino'
    brazil_df['Race_White'] = data['Race'] == 'White'

    israel_df = pd.DataFrame.from_dict({k: [v] for k,v in data.items() if k in israel_cols})
    israel_df['Age above 60'] = data['Age'] >= 60

    mexico_pred = mexico.predict_proba(mexico_df)[0]
    brazil_pred = brazil.predict_proba(brazil_df)[0]
    israel_pred = israel.predict_proba(israel_df)[0]

    mexico_class, mexico_score = max(enumerate(mexico_pred), key=lambda t: t[1])
    brazil_class, brazil_score = max(enumerate(brazil_pred), key=lambda t: t[1])
    israel_class, israel_score = max(enumerate(israel_pred), key=lambda t: t[1])

    score = ((mexico_class * mexico_score) + \
            (brazil_class * brazil_score) + \
            (israel_class * israel_score)) / 3

    return {
        "prediction": "likely" if score > 0.5 else "unlikely",
        "confidence": round(1-score if score < 0.5 else score, 2) 
    }
    