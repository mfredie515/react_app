import React from 'react';
import './style.css';
import TodoTask from './TodoTask';
import Task from './Task';
import TodoItems from './TodoItems';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            showPopup: false,
            tasks: [] 
        };

        // this.addItem = this.showForm.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    componentDidMount() {
        fetch("https://mattfrederickwebapi.azurewebsites.net/api/todotask")
            .then(res => res.ok ? res.text() : Promise.reject())
            .then(
                (result) => {
                    this.setState({
                        tasks: JSON.parse(result)
                    });
                },
                (error) => {
                    this.setState({
                        tasks: []
                    });
                }
            );
    }

    showForm() {
        this.setState({ showPopup: !this.state.showPopup });
    }

    addItem(childdata) {
        this.setState(state => {
            const tasks = state.tasks.concat(childdata);

            return {
                tasks,
                showPopup: false
            };
        });
    }

    removeItem(task) {
        const newTasks = this.state.tasks.filter(t => t.title != task.title);

        this.setState({ showPopup: false, tasks: newTasks})
    }
    
    render() {
        return (
            <section>
                <h1>Todo Task List</h1>
                <div className="task_list">
                    {/* <Task title="Title" location="Location" description="Description" /> */}
                    <TodoItems items={this.state.tasks} removeItem={this.removeItem} />
                </div>
                <button type="button" onClick={this.showForm.bind(this)}>Add Item</button>

                { this.state.showPopup ? <TodoTask addItem={this.addItem.bind(this)} /> : null }
            </section>
        );
    }
}

export default TodoList;