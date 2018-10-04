import React, { Component } from 'react';
import './ToDoItem.css';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EditToDoFields from './EditToDoFields';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    }
  };

  edit = () => {
    this.setState({ editMode: true });
  };

  save = (titleInput, toDoInput) => {
    let updTitle = titleInput
    let updToDo = toDoInput
    this.props.editItem(updTitle, updToDo);

    this.setState({
      editMode: false
    })
  };

  renderNormal = () => {
    return (
      <div className="ToDoItem">
        <p className="ToDoItem-Text">{this.props.title}</p>
        <p className="ToDoItem-Text">{this.props.todo}</p>
        <EditButton editHandler={this.edit} />
        <DeleteButton deleteHandler={this.props.deleteItem} />
      </div>
    );
  };

  renderEdit = () => {
    return (
      <div className="ToDoItem">
        <EditToDoFields
          defaultTitleValue={this.props.title}
          defaultToDoValue={this.props.todo}
          onSave={this.save}
        />
      </div>
    );
  };

  render() {
    if (this.state.editMode) {
      return this.renderEdit();
    } else {
      return this.renderNormal();
    }
  }
}

export default ToDoItem;