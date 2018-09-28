import React, {Component} from 'react';
import './ToDoItem.css';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import SaveButton from './SaveButton';

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
            <EditButton editHandler={this.edit} />
            <DeleteButton deleteHandler={this.props.deleteItem} />
            {/* <button className="ToDoItem-Button" id="editbtn" onClick={this.edit}>&#x270D;</button> */}
            {/* <button className="ToDoItem-Button" id="delbtn" onClick={this.props.deleteItem}>&minus;</button> */}
        </div>
        );
      };

      renderEdit = () => {
        return (
          <div className="ToDoItem">
            <textarea ref="newTitle" defaultValue={this.props.title}></textarea>
            <textarea ref="newToDo" defaultValue={this.props.todo}></textarea>
            <SaveButton saveHandler={this.save} />
            {/* <button onClick={this.save} className="ToDoItem-Button" id="savebtn">&#128190;</button> */}
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