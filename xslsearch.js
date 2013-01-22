function xslsearch() {
    this.addsearchbar();
    jQuery("form[name='bmForm']").prepend(xslcontent);
    this.addresultsdiv();
    jQuery("body").append(resultscontent);
    this.getids();
}
xslsearch.prototype.getids = function () {
    xsllist = $("input[name='xsl_list']");
    for (i = 0; i < xsllist.length; i++) {
        console.log(xsllist[i].value);
    }
}
xslsearch.prototype.addsearchbar = function () {
    xslcontent = "<table width='100%' cellspacing='0' cellpadding='0' border='0'><tbody><tr><td><table width='21' height='20' cellspacing='0' cellpadding='0' border='0'><tbody><tr><td class='top-left-icon'><img style='margin-left:4px;' src='" + chrome.extension.getURL('composure.png') + "'></td></tr></tbody></table></td><td width='100%' nowrap='' class='top-bar'>&nbsp;Search Within XSL Files</td><td nowrap='true' class='top-bar'><table cellspacing='0' cellpadding='0' border='0'><tbody><tr><td nowrap='true' class='bottom-bar'></td></tr></tbody></table></td><td><table width='10' height='20' cellspacing='0' cellpadding='0' border='0'><tbody><tr><td class='top-bar'><img width='10' height='20' src='/img/right_tab1.gif'></td></tr></tbody></table></td></tr><tr><td></td><td><table><tbody><tr><td align='right'>Search for:</td><td><input type='text' value='' id='attSearch'><input type='button' value='Find' id='find_hidden_att'><input type='button' value='Open Search' id='open_search_overlay'></td></tr></tbody></table></td></tr></tbody></table>";
}

xslsearch.prototype.addresultsdiv = function () {

    resultscontent = "<div id='overlay-wrapper'><div class='overlay-panel centered-panel' id='overlay-panel-4' style='top: 10px;'><div class='overlay-header' ><h2 class='overlay-curr'>Commands [<em>Alt</em>]</h2><div class='overlay-arrows'><a class='overlay_links br-exit small' href='#' style='background:url(" + chrome.extension.getURL("x.png") + ") repeat scroll 0 0 transparent'></a></div></div><div class='overlay-row clearfix'><div id='comr1' class='overlay-command' style='float:left;'> <div class='title-bar-overlay'><table class='title-table-top'><tbody><tr><td><div href='#' id='1-command-title-bar' class='hb-command-title-bar' style='outline-style: inset;'><div class='hb-command-title-bar-attr' id='1-command-title'>Integration Search</div></div></td></tr></tbody></table></div><div class='overlay-divider'>&nbsp;</div><div class='command-section-overlay'><div id='hb-command-section'><div style='display: block;' class='hb-command-section-attr' id='1-command-section'><input type='text' value='' id='attSearch'><input type='button' value='Find' id='find_hidden_att'><div id='resultSetComp'><p><b>Results for rec:</b></p><div align='center'><table><tbody><tr class='header-row-comp'><td class='link_td'><b>Link to Integration</b></td><td><b>Link to File</b></td><td><b>Line Numbers</b></td></tr><tr class='result-row-comp'><td class='result-column-comp'><a href='https://testtcl.bigmachines.com/admin/commerce/integration/edit_integration.jsp?id=10469097'>Feasibility Request for VIP Opportunity</a></td><td class='result-column-comp url-column'><a data-name='feasibilityRequestForVIPOpportunity' href='https://testtcl.bigmachines.com/servlet/ImageServer?file_id=10469095'>Parser</a></td><td class='result-column-comp'>11, 12, 88, 102</td></tr></tbody></table></div></div></div></div></div></div></div></div></div>";
}

xslsearch.prototype.getparserandresultsid = function () {

}

windowlocation = window.location.href;
if (windowlocation.indexOf('.bigmachines.com/admin/commerce/integration/list_integrations.jsp') != -1) {
    new xslsearch();
}
