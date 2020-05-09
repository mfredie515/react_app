import React from 'react';
import './style.css';

class TodoTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            title: '',
            description: '',
            location: '',
            task: {
                title: '',
                description: '',
                location: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState( {
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        this.state.task.title = this.state.title;
        this.state.task.location = this.state.location;
        this.state.task.description = this.state.description;

        this.props.addItem(this.state.task);
    }


    render() {
        return (
            <form className="popup_form" onSubmit={this.handleSubmit} >
                <section className="popup_section">
                    <div className="popup_div">
                        <label for="title">Title:</label> 
                        <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />  
                    </div>
                    <div className="popup_div">
                        <label for="description">Description:</label>
                        <textarea id="description" name="description" value={this.state.description} onChange={this.handleChange} />                        
                    </div>
                    <div className="popup_div">
                        <label for="location">Location:</label>
                        <input type="text" id="location" name="location" value={this.state.location} onChange={this.handleChange} />
                    </div>
                    <div className="popup_div">
                        <button type="submit">Submit</button>
                    </div>                    
                </section>
            </form>
        );
    }
}

export default TodoTask;