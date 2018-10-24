import React from 'react';

export default props => {
    return(
        <React-Fragment>
            <h1 className="display-4">
                About <span className="text-danger">Contact Manager</span> {props.match.params.id}
            </h1>

            <p className="lead">Simple app to manage contact.</p>
            <p className="text-secondary">Version 1.0.0</p>
        </React-Fragment>
    );
}
