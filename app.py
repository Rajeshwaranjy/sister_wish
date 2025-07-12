from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/wish')
def wish():
    return render_template("wish.html")

@app.route('/message')
def message():
    return render_template("message.html")

if __name__ == "__main__":
    app.run(debug=True)
