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
  req.send(param_str);
}

/* From W3Schools */
function setCookie(cname, cvalue, exdays) {
   var d = new Date();
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
   var expires = "expires="+ d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/* From W3Schools */
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
