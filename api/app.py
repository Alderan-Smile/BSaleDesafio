from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

print('Content-type: text/html\r\n\r')
print("<p>hello world!</p>")
print("I can view this in my browser yay!!")