from flask import Flask, render_template
from sqlalchemy.orm import sessionmaker, scoped_session
from models.models import Job
import os


session_factory = Job.build_engine()

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    session = scoped_session(session_factory)
    jobs = session.query(Job).all()
    return render_template('index.html', jobs=jobs)
    
@app.route('/job/<uuid>', methods=['GET'])
def details(uuid):
    session = scoped_session(session_factory)
    job = session.query(Job).get(uuid)
    return render_template('detail_page.html', job=job)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6300)
