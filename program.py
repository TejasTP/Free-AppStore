from flask import *
from flask_sqlalchemy import *
import json

def PostJson(json_object: dict, status: int = 200) -> Response:
    return make_response(jsonify(json_object), 200)

def GetJson() -> dict:
    return json.loads(request.get_data().decode('utf-8'))