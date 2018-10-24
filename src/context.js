import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action)=>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        case 'UPDATE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.map(
                    contact =>
                        contact.id === action.payload.id
                            ? (contact = action.payload)
                            : contact
                )
            };

        default:
            return state;
    }

};

export class Provider extends Component{
    state = {
        /*contacts: [
            {
                id: 1,
                name: 'Somit Shrestha',
                email: 'somit.shrestha@gmail.com',
                phone: '9843589998'},
            {
                id: 2,
                name: 'Jenika Shrestha',
                email: 'jenika.shrestha@gmail.com',
                phone: '9843589998'},
            {
                id: 3,
                name: 'Ayana Shrestha',
                email: 'ayana.shrestha@gmail.com',
                phone: '9843589998'},
        ],*/

        contacts: [],
        dispatch: action => this.setState(state => reducer(state, action)) //dispatch is parat of state
    }

    async componentDidMount(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({ contacts: res.data});

        /*axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => this.setState({
                contacts: response.data
            }))*/
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;