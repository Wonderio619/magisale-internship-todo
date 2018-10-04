import React, {Component} from 'react';
import './ToDo.css';
import Logo from './assets/logo.png';
import ToDoItem from './components/ToDoItem';
import AppBar from './components/AppBar';
import Popover from './components/Popover';
import {connect} from 'react-redux';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
			title: '',
            todo: '',
        };
    };

    componentDidUpdate() {
        console.log(this.props.list);
    }
    
    createNewToDoItem = () => {
        if (this.state.title !== '' & this.state.todo !== '') {
            this.props.createTodoItem(this.state.title, this.state.todo);
            this.setState({ title: '', todo: '' });
        }
    };

    handleTitleInput = e => {
        this.setState({
            title: e.target.value,
        });
    };

    handleTodoInput = e => {
        this.setState({
            todo: e.target.value,
        });
    };

    editItem = (i, updTitle, updToDo) => {
        let arr = this.props.list;
        arr[i].title = updTitle;
        arr[i].todo = updToDo;
        this.setState({ updateList: true });
    };

    deleteItem = indexToDelete => {
        this.props.deleteTodoItem(indexToDelete);
    };

    idGenerator() {
        var S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }

    eachToDo = (item, i) => {
        return <ToDoItem
            key={this.idGenerator()}
            title={item.title}
            todo={item.todo}
            deleteItem={this.deleteItem.bind(this, i)}
            editItem={this.editItem.bind(this, i)}
        />
    };

    render() {
        const { list } = this.props;
        return (
            <div className="ToDo">
                <img className="Logo" src={Logo} alt="React logo" />
                <AppBar />
                <div className="ToDo-Container">

                    <div className="ToDo-Content">
                        {list.map(this.eachToDo)}
                    </div>

                    <div>
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

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTodoItem: id => {
            dispatch({ type: "DELETE_TODO", id: id });
        },
        createTodoItem: (title, todo) => {
            dispatch({ type: "CREATE_TODO", title: title, todo: todo });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);