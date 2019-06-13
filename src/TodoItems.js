import React, { Component } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons'

class TodoItems extends Component {
  constructor() {
    super();

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return (
      <ListItem key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        <ListItemText primary={item.text} />
        <ListItemSecondaryAction>
          <IconButton color="primary" onClick={() => this.props.deleteItem(item.key)}>
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }

  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return <List className="theList">{listItems}</List>
  }
}

export default TodoItems