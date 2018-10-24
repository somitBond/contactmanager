import React, {Component} from 'react';
//import UUID from 'uuid';
import {Consumer} from "../../context";
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {

    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        console.log(this.state);

        const { name, email, phone } = this.state;

        // Check for errors
        if(name ===''){
            this.setState({errors: { name: 'Name is required'} });
            return;
        }
        if(email ===''){
            this.setState({errors: { email: 'Email is required'} });
            return;
        }
        if(phone ===''){
            this.setState({errors: { phone: 'Phone is required'} });
            return;
        }

        const newContact = {
            name,
            email,
            phone,
        }

        //Post New Data
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
        dispatch({ type: 'ADD_CONTACT', payload: res.data });

        /*axios.post('https://jsonplaceholder.typicode.com/users', newContact)
            .then(response => dispatch({ type: 'ADD_CONTACT', payload: response.data })
            );*/


        //clear state
        this.setState({
            name: "",
            email: "",
            phone: "",
        });

        this.props.history.push('/'); //redirect to home
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render(){
        const {name, email, phone, errors} = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                Add Contact
                            </div>

                            <div className="card-body">
                                <form action="" onSubmit={this.onSubmit.bind(this, dispatch)}>

                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter name..."
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        placeholder="Enter email..."
                                        value={email}
                                        type="email"
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter phone..."
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />


                                    <input type="submit" value="Add Contact" className="btn btn-success btn-block"/>
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default AddContact;