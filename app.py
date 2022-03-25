import json
import os
from flask import *
from flask_sqlalchemy import *

app = Flask(__name__)

@app.route('/')
def index():
    if 'HEROKU' in os.environ:
        return 'HEROKU'
    return 'omg wow'

if __name__ == "__main__" and 'HEROKU' not in os.environ:
    app.run(debug=True)