import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="card-header h1 text-center text-white bg-danger">{this.props.heading}</div>
        );
    }
}

export default Header;