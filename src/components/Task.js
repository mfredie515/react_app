import React from 'react';
import './style.css';

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            location: props.location,
            description: props.description,
            update: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.state.title = this.state.title;
        this.state.location = this.state.location;
        this.state.description = this.state.description;

        this.props.removeItem(this.state);

        this.setState({ update: !this.state.update });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="task_div">
                    <div>
                        <input type="text" value={this.state.title} readOnly/>
                        <input type="text" value={this.state.location} readOnly/>
                    </div>               
                    <div>
                        <textarea value={this.state.description} readOnly/>
                    </div>    
                    <div>
                        <button type="submit">Delete</button>
                    </div>            
                </div>
            </form>
        );
    }
}

export default Task;