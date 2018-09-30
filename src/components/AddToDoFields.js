import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: 'auto',
    width: '60%',
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
          value={this.props.titleValue}
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="todo-textarea"
          label="Enter new todo"
          placeholder="ToDo"
          onChange={this.props.toDoOnChange}
          value={this.props.toDoValue}
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
      </form>
    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);