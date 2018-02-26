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

    // Register click handler for #request button
    $(function onDocReady() {

        Ardoino.authToken.then(function updateAuthMessage(token) {
            if (token) {
                displayUpdate('You are authenticated. Click to see your <a href="#authTokenModal" data-toggle="modal">auth token</a>.');
                $('.authToken').text(token);
            }
        });

        if (!_config.api.invokeUrl) {
            $('#noApiMessage').show();
        }
    });

    function displayUpdate(text) {
        $('#updates').append($('<li>' + text + '</li>'));
    }
}(jQuery));