import React, { Component } from 'react'
import { TextField, Button} from '@material-ui/core'

class TodoList extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.inputElement !== prevProps.inputElement) {
      this.props.inputElement.current.focus();
    }
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <TextField 
                name="todo"
                label="Todo Item"
                ref={this.props.inputElement} 
                value={this.props.currentItem.text}
                onChange={this.props.handleInput}
                placeholder="Task" 
              />
            <Button type="submit" color="primary" variant="contained">Submit</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList
