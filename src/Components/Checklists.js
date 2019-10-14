import React from 'react';
import Checklist from './Checklist';
var api = require('../api-functions');

class Checklists extends React.Component {

    state = {
        checkLists: [],
    }

    componentDidMount() {
        api.getCheckLists(this.props.cardId)
            .then((res) => {
                this.setState({
                    checkLists: res,
                })
            })
    }

    displayCheckLists = () => {
        return this.state.checkLists.map((checklist) => (<Checklist details={checklist} key={checklist.id} />));
    }

    render() {
        return (<>
            {this.displayCheckLists()}
        </>);
    }

};

export default Checklists;