import React from 'react';

const InputBox = (props) => {
    const {inputValue, changeHandler, clickHandler} = props
    return (
        <div>
            <label>to-do List</label>
            <br />
            <input 
              type="text"
              name="inputValue"
              value= {inputValue}
              onChange={changeHandler}
              className="custom-input"
            />
            <br />
            <button 
              className="button-input" 
              onClick={event => clickHandler(event, inputValue)}
              >
              ADD !
            </button>
          </div>
    );
};

export default InputBox;