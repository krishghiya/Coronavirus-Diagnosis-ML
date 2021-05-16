FROM python:3

COPY *.joblib app.py requirements.txt ./

RUN pip install -r requirements.txt

ENTRYPOINT [ "python", "-m"]
CMD [ "flask", "run", "--host=0.0.0.0"]

EXPOSE 5000