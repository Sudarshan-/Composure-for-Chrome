function addadminbutton() {
    var $parent = $(".bm-actionstrip-horiz");
    var $child = $(".bm-actionstrip-horiz").children();
    $child.each(function () {
        if (this.onclick != null) {
            var idstring = (this.onclick).toString();
            idstringfirstindexstring = ", 1,";
            var firstindex = idstring.indexOf(idstringfirstindexstring) + idstringfirstindexstring.length + 1;
            id = idstring.slice(firstindex, idstring.indexOf(");"));
            adminbutton = "<a href='/admin/commerce/actions/edit_action.jsp?id=" + id + "' target='#' class='button_tiny' id='link" + id + "' ><img src='" + chrome.extension.getURL('admin.png') + "'></a>";
            $(this).before(adminbutton);
        }
    });
}

windowlocation = window.location.href;
if (windowlocation.indexOf('.bigmachines.com/commerce/buyside/document.jsp') != -1) {
    addadminbutton();
}
