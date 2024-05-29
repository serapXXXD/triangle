FROM python:3.12

RUN mkdir /code

WORKDIR /code

COPY . .

RUN pip install -r ./requirements.txt

CMD ["gunicorn", "triangle.wsgi:application", "--bind", "0.0.0.0:8000"]