/*Editorcontent.prototype.onInitFs = function (fs){
  console.log('Opened file system: ' + fs.name);
	fileName = jQuery("#variableName").val();
	console.log(fileName);
	fs.root.getFile(fileName+".txt", {create: true}, function(fileEntry) {

    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function(fileWriter) {

      fileWriter.onwriteend = function(e) {
        console.log('Write completed.');
      };

      fileWriter.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
      };
	content = jQuery("#bm_script").val();	
	console.log(content);
      // Create a new Blob and write it to log.txt.
      var blob = new Blob([content], {type: 'text/plain'});

      fileWriter.write(blob);

    }, this.errorHandler);

  }, this.errorHandler);
	window.open(chrome.extension.getURL('editor.html')+"?fileName="+fileName,"_blank","toolbar=no, titlebar=no,location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width=720, height=400");
};

Editorcontent.prototype.errorHandler = function (e) {
  var msg = '';

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };

  console.log('Error: ' + msg);
}

function Editorcontent(){
	window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
	window.requestFileSystem(window.TEMPORARY, 1*1024*1024 ,this.onInitFs, this.errorHandler);
}
*/
function AddMenu() {
    object = document.getElementsByTagName("head")[0];
    jQuery(object).after("<div id='br_menu_div'><img id='br_menu_logo' src='" + chrome.extension.getURL('composure.png') + "'><div id='br_button_div' class=''><div class='br_separator' id='br_editing'>Editor</div><div id='br_open_temp' class='br_button br_clrfix'><div class='short'>		<img title='Open in Editor' class='br_button_icon' src='" + chrome.extension.getURL('edit.png') + "'><span class='br_button_short_label'>Open</span> </div> <div class='br_button_label'>Open in Editor</div></div>	<div id='br_read_temp' class='br_button br_clrfix'><div class='short'><img title='Read from Editor' class='br_button_icon' src='" + chrome.extension.getURL('restore.png') + "'><span class='br_button_short_label'>Read</span></div><div class='br_button_label'>Read from Editor</div></div><div class='br_separator' id='br_synching'>Remote Repository</div><div id='br_sync' class='br_button br_clrfix'><div class='short'>				<img title='Sync with Server' class='br_button_icon' src='" + chrome.extension.getURL('save.png') + "'><span class='br_button_short_label'>Sync</span></div><div class='br_button_label'>Sync with Server</div></div><div id='br_history' class='br_button br_clrfix'><div class='short'><img title='View Versions' class='br_button_icon' src='" + chrome.extension.getURL('find.png') + "'><span class='br_button_short_label'>View</span></div><div class='br_button_label'>View Versions</div></div><div id='br_expand_icon'>	</div></div></div>");
    this.bindevents();
    chrome.extension.onMessage.addListener(function () {
        message = jQuery("#bm_script").val();
        chrome.extension.sendMessage(message, function (res) {});
    });
    jQuery('#br_open_temp').live("click", function () {
        message = jQuery("#bm_script").val();
        window.open(chrome.extension.getURL("editor.html"), "toolbar=no, titlebar=no,location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width=720, height=400");

        //console.log(chrome.extension.getViews());
        /*console.log(win);
		win.focus();
		jQuery(win.document).ready(function() {
			message = jQuery("#bm_script").val();
			chrome.extension.sendMessage(message,function (res){
				//console.log(res);
				//console.log(chrome.extension.lastError);
			});
		});*/
    });
    //window.open("editor.html","_blank","toolbar=no, titlebar=no,location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width=720, height=400");
}
AddMenu.prototype.bindevents = function () {
    jQuery("#br_menu_div").click(this.toggle);

}
AddMenu.prototype.toggle = function () {
    jQuery("#br_button_div").toggleClass("expanded");
    jQuery("#br_menu_div").toggleClass("expanded");
}

windowlocation = window.location.href;
if ((windowlocation.indexOf('view=bmllibraryeditor') != -1) || (windowlocation.indexOf('.bigmachines.com/admin/commerce/rules/edit_function.jsp') != -1) || windowlocation.indexOf('.bigmachines.com/admin/commerce/rules/edit_rule_inputs.jsp') != -1) {
    new AddMenu();
}
