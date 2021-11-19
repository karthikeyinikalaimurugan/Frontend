import React from "react";

class About extends React.Component {
    constructor(props){
        super(props);
        console.log('entering constructor');
    }
    // static getDerivedStateFromProps(props) {
    //     console.log('enter getDerivedStsteFromProps', props);       // whenever props are modified from parent
    // }
    shouldComponentUpdate() {
        console.log('enter should update');
        return true;                     // false - render method will not call/rerender , props/state modifited
    }
    render() {
        console.log('enter render');
        return(
            <div>
                <h1>About Page!
                {this.props.companyName}</h1>
            </div>
        );
    }
    componentDidMount() {
        console.log('enter did mount');                // only once for a component - first time.
        document.getElementsByTagName('h1')[0].style.background = "red";
    }
    componentDidUpdate() {
        console.log('enter did update');              
    }
    componentWillUnmount() {
        console.log('enter unmount');
    }
}
export default About;