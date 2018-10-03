import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddButtonSecondary from './AddButtonSecondary';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: 'auto',
    width: '80%',
    padding: '10px', 
  },
});

class FilledTextFields extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="title-textarea"
          label="Enter new title"
          placeholder="Title"
          onChange={this.props.titleOnChange}
          onKeyPress={(ev) => {
            if (ev.ctrlKey && ev.key === 'Enter') {
                this.props.addHandler
            }
          }}
          value={this.props.titleValue}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="todo-textarea"
          label="Enter new todo"
          placeholder="ToDo"
          onChange={this.props.toDoOnChange}
          onKeyPress={(ev) => {
            if (ev.ctrlKey && ev.key === 'Enter') {
              this.props.addHandler
            }
          }}
          value={this.props.toDoValue}
          className={classes.textField}
          margin="normal"
          helperText="Press Ctrl+Enter to add new ToDo"
        />
        <AddButtonSecondary addHandler={this.props.addHandler} />
      </form>
    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);