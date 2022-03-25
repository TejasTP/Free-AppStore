import json
import os
from flask import *
from flask_sqlalchemy import *

app = Flask(__name__)

@app.route('/')
def index():
    return 'omg wow'

if __name__ == "__main__" and 'HEROKU' not in os.environ:
    app.run(debug=True)