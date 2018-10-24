import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTpes from 'prop-types';

import {Consumer} from "../../context";
import axios from 'axios';

import '../../App.css';

class Contact extends Component {
    state = {
        showContactInfo: false
    }

    onShowClick = e => {
        this.setState({showContactInfo: !this.state.showContactInfo})
    }

    onDeleteClick = async (id, dispatch) =>{
        try {
            const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({type:'DELETE_CONTACT', payload: id});

        } catch (e){
            dispatch({type:'DELETE_CONTACT', payload: id});

        }


        /*axios.delete()
            .then( response => dispatch({type:'DELETE_CONTACT', payload: id})
            );*/
    }

    render(){
        const {id, name,email,phone} = this.props.contact;
        const {showContactInfo} = this.state;

        return (
            <Consumer>
                {value => {
                    const dispatch = value.dispatch;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}
                                <i
                                    onClick={this.onShowClick}
                                   className="fas fa-sort-down"
                                   style={{cursor: 'pointer'}}></i>

                                <i
                                    onClick={this.onDeleteClick.bind(this, id, dispatch )}
                                    className="fas fa-times"
                                    style={{float: 'right', cursor: 'pointer', color: 'red'}}></i>

                                <Link to={`contact/edit/${id}`}>
                                    <i
                                        className="fas fa-pencil-alt"
                                        style={{cursor: 'pointer', color: 'black', float: 'right', marginRight: '10px'}}></i>
                                </Link>

                            </h4>
                            {showContactInfo ? (<ul className="list-group">
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul>) : null}
                        </div>
                    )}}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTpes.object.isRequired,
}

/*Contact.propTypes = {
    name: PropTpes.string.isRequired,
    email: PropTpes.string.isRequired,
    phone: PropTpes.string.isRequired
}*/

export default Contact;