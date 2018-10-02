import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveButton from './SaveButton'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: "61px",
  },
});

class OutlinedTextFields extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        titleBuffer: '',
        toDoBuffer: '',
       };
    }

    titleHandleOnChange = event => {
      const userInput = event.target.value;
      this.setState(
        {
          titleBuffer: userInput
        },
      );
    };

    toDoHandleOnChange = event => {
      const userInput = event.target.value;
      this.setState(
        {
          toDoBuffer: userInput
        },
      );
    };

    handleOnSave = event => {
      if (this.state.titleBuffer === '' & this.state.toDoBuffer === '') {
        this.props.onSave(this.props.defaultTitleValue, this.props.defaultToDoValue);
      } 
      else if (this.state.titleBuffer === '') {
        this.props.onSave(this.props.defaultTitleValue, this.state.toDoBuffer);
      }
      else if (this.state.toDoBuffer === '') {
        this.props.onSave(this.state.titleBuffer, this.props.defaultToDoValue);
      } else {
          event.preventDefault();
          this.props.onSave(this.state.titleBuffer, this.state.toDoBuffer);
          this.setState({ titleBuffer: '', toDoBuffer: '' });
      }
    };

    render() {
        const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-editTitle"
          label=" Edit Title"
          defaultValue={this.props.defaultTitleValue}
          className={classes.textField}
          multiline
          margin="normal"
          variant="outlined"
          onChange={this.titleHandleOnChange}
        />
        <TextField
          id="outlined-editToDO"
          label="Edit ToDo"
          defaultValue={this.props.defaultToDoValue}
          className={classes.textField}
          multiline
          margin="normal"
          variant="outlined"
          onChange={this.toDoHandleOnChange}
        />
        <SaveButton saveHandler={this.handleOnSave} />
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);