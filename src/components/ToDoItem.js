import React, {Component} from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
    render() {
        return (
            <div className="ToDoItem">
                <p className="ToDoItem-Text">{this.props.title}</p>
                <p className="ToDoItem-Text">{this.props.todo}</p>
                <button className="ToDoItem-Edit"onClick={this.props.deleteItem}>&#x270D;</button>
                <button className="ToDoItem-Delete" onClick={this.props.deleteItem}>-</button>
            </div>
        );
    }
}

export default ToDoItem;
