FROM python:3.8-alpine
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN python -m pip install --upgrade pip
RUN python -m venv venv
RUN source venv/bin/activate
RUN apt-get install gcc
RUN pip install -r requirements.txt
CMD ["python", "manage.py", "runserver"]