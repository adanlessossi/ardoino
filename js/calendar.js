/*global Ardoino _config*/

var Ardoino = window.Ardoino || {};
Ardoino.map = Ardoino.map || {};

(function calendarScopeWrapper($) {
    var authToken;
    Ardoino.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
        } else {
            window.location.href = '/signin.html';
        }
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = '/signin.html';
    });

    function requestCalendar() {
        $.ajax({
            method: 'GET',
            url: _config.api.invokeUrl + '/calendar',
            headers: {
                Authorization: authToken
            },
            data: JSON.stringify({}),
            contentType: 'application/json',
            success: completeRequest,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error requesting the Ardoino calendar: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when requesting your calendar:\n' + jqXHR.responseText);
            }
        });
    }

    function completeRequest(result) {
        console.log('Response received from API: ', result);
    }
}(jQuery));