import React, {Component} from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        }
      };

      edit = () => {
        this.setState ({editMode: true});
      };
      
      save = () => {
        let updTitle = this.refs.newTitle.value;
        let updToDo = this.refs.newToDo.value;
        this.props.editItem (updTitle, updToDo);
        
        this.setState ({
          editMode: false})
      };

      renderNormal = () => {
        return (
            <div className="ToDoItem">
            <p className="ToDoItem-Text">{this.props.title}</p>
            <p className="ToDoItem-Text">{this.props.todo}</p>
            <button className="ToDoItem-Edit" onClick={this.edit}>&#x270D;</button>
            <button className="ToDoItem-Delete" onClick={this.props.deleteItem}>-</button>
        </div>
        );
      };

      renderEdit = () => {
        return (
          <div className="ToDoItem">
            <textarea ref="newTitle" defaultValue={this.props.title}></textarea>
            <textarea ref="newToDo" defaultValue={this.props.todo}></textarea>
            <button onClick={this.save} className="ToDoItem-Save">&#128190;</button>
          </div>
        );
      };

      render() {
        if (this.state.editMode) {
          return this.renderEdit ();
        } else {
          return this.renderNormal ();
        }
      }
}

export default ToDoItem;