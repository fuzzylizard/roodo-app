import React from 'react';
import TodoList from './TodoList'
import TodoItems from './TodoItems'
import Typography from '@material-ui/core/Typography'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {text: '', key: ''}
    }

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput(e) {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };

    this.setState({
      currentItem,
    })
    console.log(itemText);
  }

  addItem(e) {
    e.preventDefault();

    const newItem = this.state.currentItem;

    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: {text: '', key: ''},
      })
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => { return item.key !== key })

    this.setState({
      items: filteredItems,
    })

    console.log(key);
  }

  render() {
    return (
      <div className="App">
        <Typography variant="h1" align="center" gutterBottom>Todo List</Typography>
        <TodoList 
            addItem={this.addItem} 
            inputElement={this.inputElement} 
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
          />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
