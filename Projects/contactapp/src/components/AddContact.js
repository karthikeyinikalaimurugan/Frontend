import React from 'react'

class AddContact extends React.Component {
    state = {
        name: "",
        number: "",
        email: "",
    };
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" && this.state.number === ""){
            alert('Name and Number fields are mandatory!');
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",number:"",email:""});
        // console.log('addcontact', this.props);
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="main">
                <h2>Add Contact</h2>
                <form className="form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={(e)=>{this.setState({name: e.target.value})}}
                        />
                    </div>
                    <div className="field">
                        <label>Number</label>
                        <input
                        type="number"
                        name="number"
                        placeholder="Number"
                        value={this.state.number}
                        onChange={(e)=>{this.setState({number: e.target.value})}}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e)=>{this.setState({email: e.target.value})}}
                        />
                    </div>
                    <button className="button">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;