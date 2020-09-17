import React from 'react';

const BoxContent = (props) => {
    const {index, list , deleteHandler} = props
    return (
        <div>
            <div key={index + list} className="row box--content">
                <div className="col-8">
                    <p className="text--Content">{list}</p>
                </div>
                <div className="col-1">
                    <button className="button--content" onClick={() => deleteHandler(list)}>-</button>
                </div>
            </div>
        </div>
    );
};

export default BoxContent;