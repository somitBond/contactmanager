import React, {Component} from 'react';


//this is uncontroll component
// cause this is used props instate of state
class AddContact extends Component {

    /*state = {
        name: "",
        email: "",
        phone: "",
    }*/

    constructor(props){
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmit = e => {
        e.preventDefault();
        //console.log(this.state);
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }
        console.log(contact);
        //debugger;
    }

    /*onChange = e => this.setState({ [e.target.name]: e.target.value });*/

    static defaultProps = {
        name: 'Somit Shrestha',
        email: 'somit.shrestha@gmail.com',
        phone: '0000000000'
    }

    render(){
        //const {name, email, phone} = this.state;
        const {name, email, phone} = this.props;
        return (

            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                </div>

                <div className="card-body">
                    <form action="" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control from-control-lg"
                                placeholder="Enter Name..."
                                defaultValue={name}
                                ref={this.nameInput}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email" name="email"
                                className="form-control from-control-lg"
                                placeholder="Enter Email..."
                                defaultValue={email}
                                ref={this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control from-control-lg"
                                placeholder="Enter Phone..."
                                defaultValue={phone}
                                ref={this.phoneInput}
                            />
                        </div>
                        <input type="submit" className="btn btn-success btn-block"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;