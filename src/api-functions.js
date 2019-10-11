// var Credentials = require('../Credential');

var key = 'c047d0f934322e9752fecd89febe8468';
var token = '391c8176285ee6d0c62a5dddc33419c94c44ddcb37ba1a1f210bb041761051ab';

async function fetchUtil(setUrl, setMethod) {
    let response = await fetch(setUrl, { method: setMethod });
    let data = await response.json();
    // console.log(data);
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

function addBoard(name) {
    let setUrl = `https://api.trello.com/1/boards/?name=${name}&defaultLabels=true&defaultLists=true&prefs_selfJoin=true&prefs_cardCovers=true&prefs_background=lime&key=${key}&token=${token}`;
    return fetchUtil(setUrl, "POST");
}

function deleteBoard(id) {
    let setUrl = `https://api.trello.com/1/boards/${id}?key=${key}&token=${token}`;
    return fetchUtil(setUrl, "DELETE");
}

function getLists(boardId) {
    let setUrl = `https://api.trello.com/1/boards/${boardId}/lists?key=${key}&token=${token}`;
    return fetchUtil(setUrl, "GET");
}

function addList(name) {
    let setUrl = `https://api.trello.com/1/lists?name=${name}&key=${key}&token=${token}`;
    return fetchUtil(setUrl, "POST");
}

function getCards(listId) {
    let setUrl = `https://api.trello.com/1/lists/${listId}/cards?fields=id,idList,name,idChecklists&key=${key}&token=${token}`;
    return fetchUtil(setUrl, "GET");
}

module.exports = {
    getMemberInfo,
    getBoard,
    addBoard,
    deleteBoard,
    getLists,
    addList,
    getCards,
}

