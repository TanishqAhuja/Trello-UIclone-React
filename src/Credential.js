const getCredential = (function () {
    // Instance stores a reference to the Singleton
    var instance;
    function init() {
        // Singleton
        // Private methods and variables
        var privateVariable = {
            "key": "c047d0f934322e9752fecd89febe8468",
            "token": "391c8176285ee6d0c62a5dddc33419c94c44ddcb37ba1a1f210bb041761051ab"
        }
        return {
            // Public methods and variables
            set: function (key, token) {
                privateVariable = { key, token }
                return privateVariable
            },
            get: function () {
                return privateVariable;
            }
        };
    };
    return {
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

// console.log(credentials)
// var credentials = {
//     "key": "c047d0f934322e9752fecd89febe8468",
//     "token": "391c8176285ee6d0c62a5dddc33419c94c44ddcb37ba1a1f210bb041761051ab"
// }

module.exports = {
    getCredential,
}
