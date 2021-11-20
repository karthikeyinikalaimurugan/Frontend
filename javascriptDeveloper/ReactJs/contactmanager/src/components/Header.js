import React from "react";

class Header extends React.Component {
    render() {
        const {title} = this.props; 
        return (
            <header>
                <h1>{title}</h1>
            </header>
        )
    }
}
export default Header;