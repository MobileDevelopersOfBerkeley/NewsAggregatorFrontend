// Util functions for JavaScript code
"use strict";

var apiServerUrl = "https://newsnowapi.herokuapp.com/";

/* Sends a post request to url using params.
 *
 * :param str url: Where to send the post request.
 * :param JSON params: Key, value pairs of the parameters.
 * :param func callback: Function that is called on the object
 * returned by the request.
 */
function post(url, params, callback) {
  var req = new XMLHttpRequest();
  var param_list = [];
  for (var key in params) {
    param_list.push(key + "=" + params[key]);
  }
  var param_str = param_list.join("&");

  req.open("POST", url, true);
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
        var response = JSON.parse(req.responseText);
        callback(response);
    }
  };

  req.send(params);
}
