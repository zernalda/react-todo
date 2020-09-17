import React, { Component } from 'react';
import './box.css';
import './App.css';
import BoxContent from './components/boxContent';
import InputBox from './components/inputBox';

class App extends Component {
  state = {
    todoList: [],
    inputValue: ""
  }

  changeHandler = (event) => {
    const { value } = event.target;
    this.setState({
      inputValue: value
    });
  }

  clickHandler = (event, value ) => {
    event.preventDefault();
    const {todoList} = this.state
    this.setState({
      // copy nilai sebelum nilai sekarang dan tambahkan dengan value
      todoList: [...todoList, value],
      inputValue: ""
    });
  }


  clickDeleteHandler = nilaiList => {
    //implement "filter" method
    const newTodoList = this.state.todoList.filter(list => {
      // console.log("nilai list setelah return" + nilaiList , list);
      return list !== nilaiList
    })

    this.setState({
      todoList: newTodoList
    })
  }

  render() {
    const valueTodo = this.state.todoList;
    const {inputValue} = this.state
    return (
      <div className="container App">
        <header className="App-header">
          <InputBox 
            inputValue={inputValue} 
            changeHandler={this.changeHandler} 
            clickHandler={this.clickHandler}
          />
          
          {valueTodo.length > 0 ?
          <div className="box--container">
            {this.state.todoList.map((list, index) => {
              return (
                <BoxContent 
                  list={list} 
                  index={index} 
                  deleteHandler={this.clickDeleteHandler} 
                />
              ); 
            })}
          </div>
          :
          <div className="nothingToDo">
            nothig to do
          </div>
          } 
          
        </header>
      </div>
    );
  }
}

export default App;