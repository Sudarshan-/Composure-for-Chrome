function select_login_button() {
    var button = jQuery(".login-button");

    if (button.length < 1) {
        // doing this for older sites without the button class name
        button = jQuery("td.button-left").closest("table");
    }

    return button;
}

function complete_form(form) {
    jQuery(form).attr("action");
}

function setloadingimage() {
    jQuery("#composure_loading_img").attr("src", chrome.extension.getURL('ajax-loader.gif'));
}

function setunloadingimage(img) {
    jQuery("#composure_loading_img").attr("src", chrome.extension.getURL('logo.png'));
}


/**
 * Using ajax, login using supplied credentials. On success, login 
 * using the standard BigMachines method
 */
function show_help() {
    alert("What is This?\n\n" +
        "Clicking \"Log in with Composure\" will log you into BigMachines, and also allow " +
        "your Composure account to access the history of this application.\n\n" +
        "After logging in, you will be able to browse through this site's history, " +
        "and also record and share your own changes.");
}

function attach_listeners() {

    jQuery("#composure_help").click(show_help);

}

function drawlogin() {

    var content = "<div id='login_wrapper'><div id='composure_errors'></div><img style='float:right;' id='composure_loading_img' src='" + chrome.extension.getURL('composure.png') + "'><table onclick=\"javascript:bmSubmitForm('/commerce/display_company_profile.jsp', document.loginform , validate_form_login);bmCancelBubble(event)\" cellspacing='0' cellpadding='0' class='plain-button' id='composure_login_button'> <tbody><tr> <td class='button-left'><img src='/img/button10.gif' class='button-left'></td> <td nowrap='true' class='button-middle'><div style='margin:0px 0px 1px 0px;'> <a href='#' id='composure_login' name='composure_login' class='button-text'>Log in with Composure</a></div></td>  	<td class='button-right'><img src='/img/button10.gif' class='button-right'></td> </tr> </tbody></table><div><a href='#' id='composure_help'>What is This?</a></div><br><div>Standard Login:</div></div>";

    var button = select_login_button();
    if (button.length < 1) {
        //br_utils.reportError("Error creating joint login form.");

    } else {
        jQuery(button).before(content);
        var original = jQuery("input[name='psword']");
        var replacement = jQuery('<input type="password" maxlength="30" size="21" name="psword" id="psword" class="form-input">');
        replacement.attr("value", original.attr("value"));
        original.before(replacement).remove();
        attach_listeners();
    }

}

//console.log(window.location.href);
windowlocation = window.location.href;
if (document.getElementsByClassName('login-fields') && (document.getElementById('login_wrapper') == undefined || document.getElementById('login_wrapper') == "undefined") && (windowlocation.indexOf('/commerce/display_company_profile.jsp') != -1)) {
    drawlogin();
}
