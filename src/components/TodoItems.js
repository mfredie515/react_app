import React from 'react';
import Task from './Task';

class TodoItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            update: false
        };

        this.createTask = this.createTask.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    createTask(task) {
        return <Task removeItem={this.removeItem} title={task.title} location={task.location} description={task.description} />;
    }

    removeItem(task) {
        this.props.removeItem(task);

        this.setState({ update: !this.state.update });
    }

    render() {
        var items = this.props.items;
        //var tasks = items.map(this.createTask);        
        var tasks = items.map((task) => (
            <li key={task.title}>
               {this.createTask(task)}
            </li>));
        
        return (
            <ul>
                {tasks}
            </ul>
        );
    }
}

export default TodoItems;