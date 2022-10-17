import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };
   formatCount() {
        const {value} = this.state;
        return (
            value === 0 ? "zero" : value
        )
    }
    // style = {
    //     fontSize: 20,
    //     fontWeight: "bold"
    // }
    // style={this.style}
    // Inline
    // style={{fontSize: 20, fontWeight: "bold"}}
    //Dynamic class rendering
    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    incrementHandler = () => {
        this.setState({value: this.state.value + 1})
    }
    render() {
        console.log('props', this.props)
        return (
            <div>
                <span className={this.getBadgeClass()} >{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={this.incrementHandler}>Increment</button>
            </div>
        );
    }
}
 
export default Counter;