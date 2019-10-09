// var Credentials = require('../Credential');

var key = 'c047d0f934322e9752fecd89febe8468';
var token = '391c8176285ee6d0c62a5dddc33419c94c44ddcb37ba1a1f210bb041761051ab';

async function fetchUtil(setUrl, setMethod) {
    let reasponse = await fetch(setUrl, { method: setMethod });
    let data = await reasponse.json();
    return data;
};

function getMemberInfo() {
    let setUrl = `https://api.trello.com/1/members/me/?key=${key}&token=${token}`;
    return fetchUtil(setUrl, "GET");
}

function getBoard(id) {
    let setUrl = `https://api.trello.com/1/boards/${id}?card_pluginData=false&customFields=false&pluginData=false&organization=false&organization_pluginData=false&myPrefs=false&tags=false&key=${key}&token=${token}`;
    return fetchUtil(setUrl, "GET");
}

module.exports = {
    getMemberInfo,
    getBoard,
}

