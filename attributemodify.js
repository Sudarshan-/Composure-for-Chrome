function filtertrs() {
    searchvalue = jQuery('#attSearch')[0].value;
    searchvalue = searchvalue.toLowerCase();
    if (searchvalue != '') {
        allmodifytrs = jQuery('.bgcolor-list-odd , .bgcolor-list-even');
        for (i = 0; i < allmodifytrs.length; i++) {
            actiondescription = jQuery(allmodifytrs[i])[0].children[0].innerHTML;
            if ((actiondescription.toLowerCase()).indexOf(searchvalue) == -1) {
                jQuery(jQuery(allmodifytrs[i])[0]).css("display", "none");
            } else {
                jQuery(jQuery(allmodifytrs[i])[0]).css("display", "");
            }
        }
    } else {
        alert("Please Enter a value to Search");
    }
}

function filteractions() {
    var attName = document.getElementById("attFilter").value;
    childTD = 0;
    switch (attName) {
        case 'Define Function':
            childTD = 1;
            break;
        case 'Use Specified Value':
            childTD = 2;
            break;
        case 'Leave Value Unchanged':
            childTD = 3;
            break;
        case 'Revert to Default':
            childTD = 4;
            break;
        case 'Save from Form':
            childTD = 5;
            break;
    }
    allmodifytrs = jQuery('.bgcolor-list-odd , .bgcolor-list-even');
    for (i = 0; i < allmodifytrs.length; i++) {
        actiondescription = jQuery(allmodifytrs[i])[0].children[childTD].innerHTML;
        if ((actiondescription.toLowerCase()).indexOf("checked") == -1) {
            jQuery(jQuery(allmodifytrs[i])[0]).css("display", "none");
        } else {
            jQuery(jQuery(allmodifytrs[i])[0]).css("display", "");
        }
    }
}

function cleartrs() {

    allmodifytrs = jQuery('.bgcolor-list-odd , .bgcolor-list-even');
    for (i = 0; i < allmodifytrs.length; i++) {
        jQuery(jQuery(allmodifytrs[i])[0]).css("display", "");
    }

}

function attributefilter() {
    textelement = "<input type='text' value='' id='attSearch'>";
    findelement = "<input type='button' value='Find' id='find_hidden_att'>";
    clearelement = "<input type='button' value='Clear' id='clear_found'>";
    filterelement = "<input type='button' value='Filter' id='filter_hidden_att' style='float:right;'>";
    selectelement = "<select size='1' name='dropdownmenu' style='float:right;' id='attFilter'><option value='Define Function'>Define Function</option><option value='Use Specified Value'>Use Specified Value</option><option value='Leave Value Unchanged'>Leave Value Unchanged</option><option value='Revert to Default'>Revert to Default</option><option value='Save from Form'>Save from Form</option></select>";

    jQuery('#modify').prepend(clearelement);
    jQuery('#modify').prepend(findelement);
    jQuery('#modify').prepend(textelement);


    jQuery('#modify').prepend(selectelement);
    jQuery('#modify').prepend(filterelement);

    jQuery('#find_hidden_att').live("click", function () {
        filtertrs();
    });

    jQuery('#filter_hidden_att').live("click", function () {
        filteractions();
    });

    jQuery('#clear_found').live("click", function () {
        cleartrs();
    });
}

windowlocation = window.location.href;
if ((windowlocation.indexOf('.bigmachines.com/admin/commerce/attributes/edit_attribute.jsp') != -1)) {
    attributefilter();
}
