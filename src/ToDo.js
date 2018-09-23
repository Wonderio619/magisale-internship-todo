import React, {Component} from 'react';
import './ToDo.css';
import ToDoItem from './components/ToDoItem';
import Logo from './assets/logo.png';

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
            todo: ''
        };
    };
    
    createNewToDoItem = () => {
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
    };

    handleKeyPress = e => {
        if (e.target.value !== '') {
          if (e.key === 'Enter') {
            this.createNewToDoItem();
          }
        
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

    editItem = (updTitle, updToDo, i) => {
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
                <h1 className="ToDo-Header">MAGISOFT REACT INTERNSHIP TODO</h1>
                <div className="ToDo-Container">

                    <div className="ToDo-Content">
                        {this.state.list.map(this.eachToDo)}
                    </div>

                    <div>
                       <input type="text" placeholder="Enter new title" value={this.state.title} onChange={this.handleTitleInput} onKeyPress={this.handleKeyPress}/>
                       <input type="text" placeholder="Enter new todo" value={this.state.todo} onChange={this.handleTodoInput} onKeyPress={this.handleKeyPress}/>
                       <button className="ToDo-Add" onClick={this.createNewToDoItem}>+</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default ToDo;
