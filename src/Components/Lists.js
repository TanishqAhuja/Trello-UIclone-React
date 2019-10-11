import React from 'react';
import List from './List';
import Header from './Header';

var api = require('../api-functions');

class Lists extends React.Component {

    state = {
        boardId: this.props.match.params.id,
        lists: [],
    }

    componentDidMount() {
        api.getLists(this.state.boardId)
            .then((res) => {
                this.setState({
                    lists: [...res],
                });
            });
    }

    displayLists = () => {
        return this.state.lists.map((list) => (
            <List list={list} key={list.id} />
        ));
    }

    addlist = (listName) => {
        api.addlist(listName)
            .then((res) => {
                this.setState({
                    lists: [...this.state.lists, res["id"]],
                });
            })
    }

    render() {
        return (
            <>
                <Header func={this.addList} item='List' color='primary'></Header>
                <div className="d-flex flex-row overflow-auto mt-4 b-0">
                    {this.displayLists()}
                </div>
            </>
        );
    }
}

export default Lists;