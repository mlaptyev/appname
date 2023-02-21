from flask import Flask, render_template, request, jsonify
from task_manager import TaskManager

app = Flask(__name__)
task_manager = TaskManager()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_task', methods=['POST'])
def add_task():
    task_description = request.form['task_description']
    task_manager.add_task(task_description)
    tasks = task_manager.get_tasks()
    return jsonify(tasks)

@app.route('/tasks')
def tasks():
    tasks = task_manager.get_tasks()
    return jsonify(tasks)

if __name__ == '__main__':
    app.run()
