import React from 'react';
// import { Link } from 'react-router-dom';
import Card from './Card';
var api = require('../api-functions');

class List extends React.Component {

    state = {
        cards: [],
        cardName: '',
        style: {
            "maxHeight": "79vh",
            "minHeight": "79vh",
        },
        showModal: false
    }

    // addCardModalRef = React.createRef();

    // componentDidMount() {
    //     this.addCardModalRef.current.modal()
    // }

    setName = (e) => {
        this.setState({
            cardName: e.target.value,
        })
    }

    componentDidMount() {
        api.getCards(this.props.list.id)
            .then((res) => {
                this.setState({
                    cards: res,
                })
            });
    }

    deleteCard = (cardId) => {
        api.deleteCard(cardId)
            .then(() => {
                this.setState({
                    cards: this.state.cards.filter((card) => (card.id !== cardId)),
                })
            })
            .then(() => (console.log(this.state)))

    }

    displayCards = () => {
        return this.state.cards.map((card) => (<Card details={card} delFunc={this.deleteCard} key={card.id} />));
    }

    addCard = (e) => {
        e.preventDefault();
        api.addCard(this.props.list.id, this.state.cardName)
            .then((res) => {
                var newCard = {
                    "id": res.id,
                    "name": res.name,
                    "idList": res.idList,
                    "idChecklists": res.idChecklists,
                };
                this.setState({
                    cards: [newCard, ...this.state.cards],
                })
            })
    }

    render() {
        return (<>
            <div style={this.state.style} className="card col-lg-3 p-0 mx-4" >
                <div className="card-header">
                    <button className="btn float-right btn-info ml-2"
                        data-toggle="modal" data-target="#addCard">＋</button>
                    {this.props.list.name}
                </div>
                <div className="card-body overflow-auto py-2">
                    {
                        (this.state.cards) ? (this.displayCards()) : (<></>)
                    }
                </div>
            </div>

            <div ref={this.addCardModalRef} className="modal fade" id="addCard" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addCardLabel">Add New Card</h5>
                            <span className="btn close" data-dismiss="modal">x</span>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.addCard}>
                                <div className="input-group">
                                    <input type="text" onChange={this.setName} className="form-control" id="recipient-name" placeholder="Name" autoFocus />
                                    <span className="input-group-btn">
                                        <button onClick={this.addCard} className="btn btn-info" type="submit" data-dismiss="modal">＋</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> </>
        );
    }
}

export default List;