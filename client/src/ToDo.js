import React, {Component} from 'react';
import './ToDo.css';
import Logo from './assets/logo.png';
import ToDoItem from './components/ToDoItem';
import AppBar from './components/AppBar';
import Popover from './components/Popover';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
					title: 'Cup cleaning',
                    todo: "Wash and take away the Kurzhiy's cup from WC"
                },
                {
					title: 'Smoking rollton',
                    todo: 'Do some rollton and cigarettes'
                },
				{
					title: 'Curious dream',
					todo: 'Build a time machine'
				}
            ],
			title: '',
            todo: '',
        };
    };
    
    createNewToDoItem = () => {
        if (this.state.title !== '' & this.state.todo !== '') {
            this.setState(({ list, title, todo }) => ({
                list: [
                    ...list,
                    {
                        title,
                        todo
                    }
                ],
                title: '',
                todo: ''
            }));
        }
    };

    handleTitleInput = e => {
      this.setState({
        title: e.target.value,
      });
    };

    handleTodoInput = e => {
        this.setState({
         todo: e.target.value
      });
    };

    deleteItem = indexToDelete => {
        this.setState(({ list }) => ({
          list: list.filter((toDo, index) => index !== indexToDelete)
      }));
    };

    editItem = (i, updTitle, updToDo) => {
        let arr = this.state.list;
        arr[i].title = updTitle;
        arr[i].todo = updToDo;
        this.setState ({list: arr});
    };

    eachToDo = (item, i) => {
        return <ToDoItem
                    key={i}
                    title={item.title}
                    todo={item.todo}
                    deleteItem={this.deleteItem.bind(this, i)}
                    editItem={this.editItem.bind(this, i)}
                />
      };

    render() {
        return (
            <div className="ToDo">
                <img className="Logo" src={Logo} alt="React logo"/>
                <AppBar />
                <div className="ToDo-Container">

                    <div className="ToDo-Content">
                        {this.state.list.map(this.eachToDo)}
                    </div>

                    <div>
                        {/* <AddToDoFields
                            toDoValue={this.state.todo}
                            titleValue={this.state.title}
                            titleOnChange={this.handleTitleInput}
                            toDoOnChange={this.handleTodoInput}
                        /> */}
                       {/* <AddButton addHandler={this.createNewToDoItem} /> */}
                       <Popover 
                            toDoValue={this.state.todo}
                            titleValue={this.state.title}
                            titleOnChange={this.handleTitleInput}
                            toDoOnChange={this.handleTodoInput}
                            addHandler={this.createNewToDoItem}
                       />
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDo;