import React from "react";

class Home extends React.Component {
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
        return(
            <div>
                Home Page!
            </div>
        );
    }
    componentDidMount() {
        console.log('enter did mount');                // only once for a component - first time.
    }
    componentDidUpdate() {
        console.log('enter did update');              
    }
    componentWillUnmount() {
        console.log('enter unmount');
    }
}
export default Home;