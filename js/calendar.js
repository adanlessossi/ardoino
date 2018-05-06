/*global Ardoino _config*/

var Ardoino = window.Ardoino || {};

(function calendarScopeWrapper($) {
    var authToken;
    Ardoino.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
        } else {
            window.location.href = 'signin.html#signin';
        }
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = 'signin.html#signin';
    });
}(jQuery));