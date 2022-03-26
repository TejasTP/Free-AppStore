from program import *
import os

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def index():
    return render_template('index.html')

if __name__ == "__main__" and 'HEROKU' not in os.environ:
    app.run(debug=True)