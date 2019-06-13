import React, { Component } from 'react'

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
            <input 
                ref={this.props.inputElement} 
                value={this.props.currentItem.text}
                onChange={this.props.handleInput}
                placeholder="Task" 
              />
            <input type="submit" value="Add Task" />
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList
