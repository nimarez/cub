from flask import Flask
from flask import jsonify
from flask_cors import CORS
import markovify
from nltk.tokenize import word_tokenize

app = Flask(__name__)
CORS(app)

def build_text():
    CONF_DIR = "/Users/nima_r/Desktop/Confessions/all"
    s = 1368
    n = 2454

    cc = [] # cleaned confessions
    for i in range(s, n + 1):
        with open(CONF_DIR + f"/{i}.txt") as f:
            post = f.read()
            if post:
                cc.append(post)

    print(f"Number of Confessions: {len(cc)}" + "\n")
    huge_text = ''
    for conf in cc:
        huge_text += conf + " "

    huge_text = huge_text.replace("\n", " ")

    with open('huge_text.txt', 'w') as f:
        f.write(huge_text)

    return huge_text

def generate_confession():
    f = open('huge_text.txt', 'r')
    if not f:
        huge_text = build_text()
    else:
        huge_text = f.read()
        f.close()
    # Build the model.
    model1 = markovify.Text(huge_text, state_size=4)

    confessions = [];
    for i in range(4):
        confessions.append(model1.make_sentence())
    return " ".join(confessions)

@app.route('/api')
def return_confession():
    return jsonify({"text": generate_confession()})
