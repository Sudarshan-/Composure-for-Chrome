companyname = "";
processid="";
versionid="";
function results(){
  
	if( document.getElementById('quick-search-bar').value != ''){
		var searchUrl = 'https://'+companyname+'.bigmachines.com/commerce/buyside/search/search_inputs.jsp?perform_search=true';
		searchUrl = searchUrl + "&process_id=" + processid;
		searchUrl = searchUrl + "&version_id=" + versionid;
		searchUrl = searchUrl + "&page_length=25";
		searchUrl = searchUrl + "&comp_" + document.getElementById('filter-attr-list').value + "=" + "_eq";
		searchUrl = searchUrl + "&value_" +document.getElementById('filter-attr-list').value + "=" + document.getElementById('quick-search-bar').value;
		searchUrl = searchUrl + "&orderHidden_" + document.getElementById('filter-attr-list').value + "=1";
		searchUrl = searchUrl + "&display_as_link=" + document.getElementById('filter-attr-list').value;
		searchUrl = searchUrl + "&checkedDisplayAttr=" + document.getElementById('filter-attr-list').value;
		var xhr = new XMLHttpRequest();
		  xhr.onreadystatechange = function(data) {
			if (xhr.readyState == 4) {
			  if (xhr.status == 200) {
					//console.log(xhr.responseText);
					var contentToLookFor = "href=\"javascript:parent.window.opener.location = '";
					var pos1 = xhr.responseText.indexOf(contentToLookFor);
					//console.log(pos1);
					var posEnd = pos1 + contentToLookFor.length + 195;//random number.
					var strExtract = xhr.responseText.substring(pos1,posEnd);
					//console.log(strExtract);
					var newPos1 = contentToLookFor.length;
					var newPosEnd = strExtract.indexOf("';parent.window");
					//console.log(newPosEnd);
					relativeUrl = strExtract.substring(newPos1,newPosEnd);
					url="https://"+companyname+".bigmachines.com"+relativeUrl;
					if(url.indexOf('W3C') != -1){
						alert("No Results Found");
					}else{
							window.open(url);
						}
					}
					//console.log(processInfoString);
					
				}
			  } 
			

		  
		xhr.open('GET', searchUrl, true);
		xhr.send();

	}else{
		alert("Enter Search Data");
	}

}


function addquotesearch(){
	
var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
			//console.log(xhr.responseText);
			var defaultFilterSelected=false;
			var strToLookFor = "href='edit_column.jsp?id=";
			var currentCommerceProcPosition = xhr.responseText.indexOf(strToLookFor);
			var remainingStr = "";
			var menuElem="";
			while(currentCommerceProcPosition != -1){
				if(remainingStr == ""){
					remainingStr = xhr.responseText.substring(currentCommerceProcPosition+strToLookFor.length);
				}else{
					remainingStr = remainingStr.substring(currentCommerceProcPosition+strToLookFor.length);
				}
				
				var currentCommerceProcID = remainingStr.substring(0,remainingStr.indexOf("'"));
				var endPosToLookFor = remainingStr.indexOf("</");
				var currentCommerceProcName = remainingStr.substring(remainingStr.indexOf(">")+1,endPosToLookFor);
				currentCommerceProcName = currentCommerceProcName.replace(/&#32;/g, "");
				//console.log(currentCommerceProcID);
				//console.log(currentCommerceProcName);
				filterId = currentCommerceProcID;
				filterName = currentCommerceProcName;
				if((!defaultFilterSelected) && (filterName.indexOf("Number") > -1) && (filterName.indexOf("Quote") > -1)){
					menuElem = menuElem + "<option value='"+filterId+"' selected='selected'>"+filterName+"</option>";
					defaultFilterSelected = true;
				}else{
					menuElem = menuElem + "<option value='"+filterId+"'>"+filterName+"</option>";
				}
				//console.log(menuElem);
				remainingStr = remainingStr.substring(endPosToLookFor);
				currentCommerceProcPosition = remainingStr.indexOf(strToLookFor);
			}								
								
			
				selectcontent = "<select id='filter-attr-list'>"+menuElem+"</select>";
				preparesearch(selectcontent);
		}
      } else {
        //callback(null);
      }
    }
			
// Note that any URL fetched here must be matched by a permission in
// the manifest.json file!
//https://testtcl.bigmachines.com/commerce/buyside/search/cm_search.jsp?process_id=
var url = 'https://'+companyname+'.bigmachines.com/admin/commerce/columns/list_columns.jsp?process_id='+processid;

xhr.open('GET', url, true);
xhr.send();

}

function preparesearch(selectcontent){
	var quotetd = "<td width='100%'><div id='composureStyle'><span class='composureStyle'><span>Search By :</span>"+selectcontent+"</span><input type='text' id='quick-search-bar' class='composureStyle'><table cellspacing='0' cellpadding='0'  id='composureButton' class='composureStyle'><tbody><tr><td class='button-left'><img class='button-left' src='/img/button10.gif'></td><td nowrap='true' class='button-middle'><div id='quotesearchdiv' ><a class='button-text' name='comp_search' id='comp_search' href='#'>Open Result</a></div></td><td class='button-right'><img class='button-right' src='/img/button10.gif'></td></tr></tbody></table></div></td>";
	var searchalink=jQuery("#search").parents().get(5);
	var searchtd=jQuery(searchalink).prev();
	searchtd[0].innerHTML=quotetd;
	document.getElementById('quotesearchdiv').onclick=results;
}

windowlocation=window.location.href;
if(windowlocation.indexOf('.bigmachines.com/commerce/buyside/commerce_manager.jsp') != -1 && jQuery('#search')[0] != "undefined" && jQuery('#search')[0] != undefined) {
	locationurl = window.location.href;
	var contentToLookFor = "https://";
	var pos1 = locationurl.indexOf(contentToLookFor);
	var posEnd = pos1 + contentToLookFor.length + 45;//random number.
	var strExtract = locationurl.substring(pos1,posEnd);
	var newPos1 = contentToLookFor.length;
	var newPosEnd = strExtract.indexOf(".big");
	companyname = strExtract.substring(newPos1,newPosEnd);
	var strToLookFor = "bm_cm_process_id=";
	var currentCommerceProcPosition = locationurl.indexOf(strToLookFor);
	var endpos= locationurl.indexOf("&",currentCommerceProcPosition+strToLookFor.length);
	processid= locationurl.substring(currentCommerceProcPosition+strToLookFor.length,endpos);
	versionid = jQuery("[name=version_id]")[0].value;
	addquotesearch();
} 
