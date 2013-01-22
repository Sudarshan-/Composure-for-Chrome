function addvalues() {
    var box = jQuery("[name='attributes']").val(); // get the values from text area
    var index = box.indexOf("\n"); // get index of new line character
    while (index > 0) {
        if (jQuery("[name='tType']")[0].checked) {
            jQuery("[name='_BM_MENU_ITEM_TEXT']").val(box.substring(0, index));
            jQuery("[name='_BM_MENU_ITEM_VALUE']").val(box.substring(0, index));
        } else {
            if (box.substring(0, index).indexOf(",") > -1) {
                jQuery("[name='_BM_MENU_ITEM_TEXT']").val(box.substring(0, index).split(",")[0]);
                jQuery("[name='_BM_MENU_ITEM_VALUE']").val(box.substring(0, index).split(",")[1]);
            } else {
                jQuery("[name='_BM_MENU_ITEM_TEXT']").val(box.substring(0, index));
                jQuery("[name='_BM_MENU_ITEM_VALUE']").val(box.substring(0, index));
            }
        }
        document.getElementById("add_entry").parentNode.click();
        box = box.substring(index + 1);
        index = box.indexOf("\n");
    }
    if (jQuery("[name='tType']")[0].checked) {
        jQuery("[name='_BM_MENU_ITEM_TEXT']").val(box);
        jQuery("[name='_BM_MENU_ITEM_VALUE']").val(box);
    } else {
        if (box.indexOf(",") > -1) {
            jQuery("[name='_BM_MENU_ITEM_TEXT']").val(box.split(",")[0]);
            jQuery("[name='_BM_MENU_ITEM_VALUE']").val(box.split(",")[1]);
        } else {
            jQuery("[name='_BM_MENU_ITEM_TEXT']").val(box);
            jQuery("[name='_BM_MENU_ITEM_VALUE']").val(box);
        }
    }
    document.getElementById("add_entry").parentNode.click();

}

function adddivpanel() {
    //alert("Inside fun");
    divcontent = "<div id='composure_helper'><div align='left' class='form-header' colspan='2' width='100%'><img src='" + chrome.extension.getURL("img/logo.png") + "' class='comp_img'>Composure Attribute Loader</div><br><textarea cols='25' rows='15' name='attributes'></textarea><br><table cellspacing='0' cellpadding='0' style='cursor: pointer;' class='plain-button com_attr_send'><tbody><tr><td class='button-left'><img class='button-left' src='/img/button10.gif'></td>  		<td nowrap='true' class='button-middle'><div style='margin: 0px 0px 1px;'><a class='button-text' name='add_values' id='add_values' href='#'>Add Values</a></div></td><td class='button-right'><img class='button-right' src='/img/button10.gif'></td></tr></tbody></table><p>Is the Displayed Text the same as the Variable Name?<br><input type='radio' checked='' value='1' name='tType'><b>Yes</b><input type='radio' value='2' name='tType'><b>No</b></p><p><strong>Examples for data entry:</strong><br>If <b>Yes:</b> Displayed Text<br><b>Entry:</b><br>Alabama<br>Texas<br>California<br><b>Results:</b><br>Alabama [Alabama]<br>Texas [Texas]<br>California [California]<br><br>If <b>No:</b> Displayed Text,Variable Name<br><b>Entry:</b><br>Alabama,alabamausa<br>Texas,texasusa<br>California,californiausa<br><b>Results:</b><br>Alabama [alabamausa]<br>Texas [texasusa]<br>California [californiausa]<br></p></div>";
    //console.log(document.getElementById("composure_helper"));
    if (document.getElementById("composure_helper") != undefined && document.getElementById("composure_helper") != "undefined" && document.getElementById("composure_helper") != null && document.getElementById("composure_helper") != "null") {
        //alert("if");
        jQuery("#composure_helper").remove();
        jQuery("#tab_general:first-child").css("width", "100%");
        jQuery("#general:first-child").css("width", "100%");
        jQuery("#menuEntry").css("width", "100%");
    } else {
        //alert("else");
        jQuery("#tab_general").children("table").css("width", "80%");
        jQuery("#general").children("table").css("width", "80%");
        jQuery("#menuEntry").css("width", "80%");
        jQuery("#tab_general").prepend(divcontent);
        jQuery("#general").prepend(divcontent);
        jQuery(".com_attr_send").live("click", function () {
            addvalues();
        });
    }
}

function attributeloader() {
    tdcontent = "<table cellspacing='0' cellpadding='0' style='cursor: pointer;' class='plain-button com_attr_loader'><tbody><tr><td class='button-left'><img class='button-left' src='/img/button10.gif'></td><td nowrap='true' class='button-middle' style='width:125px;'><img src='" + chrome.extension.getURL("img/logo.png") + "' style='float:left;'><div style='margin: 0px 0px 1px;'><a class='button-text' name='attr_loader' id='attr_loader' href='#'>Attribute Loader</a></div></td><td class='button-right'><img class='button-right' src='/img/button10.gif'></td></tr></tbody></table>"
    var closetd = jQuery("[name='_BM_MENU_ADMIN']").parents().get(8);
    var searchtd = jQuery(closetd).prev();
    searchtd[0].innerHTML = tdcontent;
    jQuery(".com_attr_loader").live("click", function () {
        //alert("click");
        adddivpanel();
    });
}
windowlocation = window.location.href;
if ((windowlocation.indexOf('edit_attribute.jsp') != -1) && (document.getElementsByName("_BM_MENU_ADMIN")[0] != undefined && document.getElementsByName("_BM_MENU_ADMIN")[0] != "undefined")) {
    attributeloader();
}
