function printxsllink() {
    //console.log(jQuery("select[name='xsl_ids'] option:selected")[0].innerHTML);
    xsllinkcontent = "<br><img src=" + chrome.extension.getURL('composure.png') + "><b>Composure Link to Printer Friendly XSL View:  </b><a href='/admin/commerce/views/edit_xslt.jsp?id=" + jQuery("select[name='xsl_ids']")[0].value + "'>" + jQuery("select[name='xsl_ids'] option:selected")[0].innerHTML + "</a>";
    jQuery("select[name='xsl_ids']").after(xsllinkcontent);
}

windowlocation = window.location.href;
if (windowlocation.indexOf('.bigmachines.com/admin/commerce/actions/edit_action.jsp') != -1 && (document.getElementsByName("xsl_ids")[0] != undefined && document.getElementsByName("xsl_ids")[0] != "undefined")) {
    printxsllink();
}
