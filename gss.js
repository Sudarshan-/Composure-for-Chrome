function globalscriptsearch(){
  gsscontent = "<table width='100%' cellspacing='0' cellpadding='0' border='0'><tbody><tr><td><table width='21' height='20' cellspacing='0' cellpadding='0' border='0'><tbody><tr><td class='top-left-icon'><img style='margin-left:4px;' src='"+chrome.extension.getURL('composure.png')+"'></td></tr></tbody></table></td>	  <td width='100%' class='top-bar'>&nbsp;Search</td><td><table width='10' height='20' cellspacing='0' cellpadding='0' border='0'><tbody><tr><td class='top-bar'><img width='10' height='20' src='/img/right_tab1.gif'></td></tr></tbody></table></td></tr><tr><td></td><td><table><tbody><tr>					<td align='right'>Search for:</td><td><input id='br-search-string'><input type='button' value='Search' id='br-search'></td><td><select class='br-select' multiple='multiple'><option value='gss'>Commerce, Config, Utils</option><option value='header_footer'>Header &amp; Footer</option><option value='file_manager'>File Manager</option><option value='printer_friendly'>Printer Friendly XSLs</option><option value='doc_engine'>Doc Engine XSLs</option>	<option value='integrations'>Integrations</option><option value='parts_integrations'>Parts Integrations</option><option value='account_integration'>Account Integration</option><option value='global_functions'>Global Functions</option></select></td><td>Search Whole Word:&nbsp;&nbsp;<input type='checkbox' name='search_word'></td></tr></tbody></table></td></tr></tbody></table>";
	jQuery("form[name='bmForm']").css("display","none");
	jQuery(".help-text").after(gsscontent);
}
windowlocation=window.location.href;
if(windowlocation.indexOf('.bigmachines.com/admin/scripts/search_script.jsp') != -1){
	globalscriptsearch();
} 
