# from flask import Flask, jsonify, render_template
# import json
# import os

# app = Flask(__name__)
# @app.route('/')
# def main():
#     return render_template('index.html')

# @app.route('/tasks')
# def get_tasks():
#     file_path = os.path.join(os.path.dirname(__file__), 'All.json')
#     with open(file_path, 'r') as f:
#         tasks = json.load(f)
#     return jsonify(tasks)

# if __name__ == '__main__':
#     app.run(debug=True)