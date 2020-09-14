import React from 'react';

import './ContentPage.css';

export default function ContentPage(props) {
    return (
        <div id ="special" className="container mt-4">
            <div className="row m-1">
                <h1>{props.title}</h1>
            </div>
            <div className="row m-1 mb-3">
                <span>{props.displayName}</span>
            </div>
            
            
            <img className="content-image m-1" src="https://images.unsplash.com/photo-1563805042-7684c019e1cb"/>
            <p className="content-text m-1 my-5">
                {props.description}
            </p>
            <h2 className="m-1">Artefacts</h2>
            <div className="m-1 my-5">
                Nothing to see here
            </div>
            <h2 className="m-1">Comments</h2>
            <div className="m-1 my-5">
                Be the first to comment.
            </div>

        </div>
    )
}