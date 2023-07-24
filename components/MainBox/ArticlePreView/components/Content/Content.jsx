import React from 'react';


function Content({content}) {
    return (
        <div className="chat-content">
          <div className="container-xxl mt-4">
            <p>{content}</p>
          </div>
        </div>
    );
}

export default Content;