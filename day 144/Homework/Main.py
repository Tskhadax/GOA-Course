from flask import Flask, render_template, json, jsonify

app = Flask(__name__)
@app.route('/')
def landing_page():
    return render_template('index.html')

@app.route('/Find_a_worker')
def find_a_worker_page():
    return render_template('workers.html')

@app.route('/api_all_user')
def get_users():
    with open('all_users.json') as file:
        users = json.load(file)
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)