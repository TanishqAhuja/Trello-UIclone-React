import React from 'react';
// import { Link } from 'react-router-dom';
var api = require('../api-functions');


class List extends React.Component {

    state = {
        details: [],
    }

    componentDidMount() {
        api.getCards(this.props.list.id)
            .then((res) => {
                console.log(res)
                this.setState({
                    details: this.state.details.push(res),
                });
            });
    }

    displayCards = () => {
        return this.state.details.map((card) => {
            <Card details={card}></Card>
        })
    }

    render() {
        return (<>
            <div className="card col-lg-3 p-0 mx-4">
                <div className="card-header">{this.props.list.name}</div>
                {this.displayCards()}
            </div>
            {this.state.details ?
                (
                    <></>
                )
                : (<></>)
            }
        </>);
    }
}

export default List;