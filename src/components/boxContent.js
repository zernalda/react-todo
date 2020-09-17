import React from 'react';

const BoxContent = (props) => {
    const {index, list , deleteHandler} = props
    return (
        <div>
            <div key={index + list} className="box--content">
                <p>{list}</p>
                <button onClick={() => deleteHandler(list)}>x</button>
            </div>
        </div>
    );
};

export default BoxContent;