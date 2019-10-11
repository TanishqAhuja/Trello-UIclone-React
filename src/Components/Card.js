import React from 'react';
// var api = require('../api-functions');

class Card extends React.Component {

    deleteCard = () => {
        this.props.delFunc(this.props.details.id);
    }

    render() {
        return (
            <div className="d-inline-block w-100 card card-body my-3">
                <button onClick={this.deleteCard} className="close ">x</button>
                <span>{this.props.details.name}</span>
            </div>
        );
    };

};

export default Card;