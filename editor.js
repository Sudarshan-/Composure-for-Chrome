function Editor() {

}
/*
Editor.prototype.onInitFs = function (fs){
console.log("here succ");
console.log('Opened file system: ' + fs.name);
  fs.root.getFile('convert2DArrayToDict.txt', {}, function(fileEntry) {

    // Get a File object representing the file,
    // then use FileReader to read its contents.
    fileEntry.file(function(file) {
       var reader = new FileReader();

       reader.onloadend = function(e) {
         
         console.log(this.result);
         
       };

       reader.readAsText(file);
    }, editor.errorHandler);

  }, editor.errorHandler);
	
};

Editor.prototype.errorHandler = function (e) {
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
}*/
Editor.prototype.setTextAreaContent = function () {
    //console.log("Inside");
    //jQuery("#editor").innerHTML=window.opener.document.getElementById("content").value;
    //console.log(window.opener.document.getElementById('bm_script').value);
}

function onRequest(message, sender, call) {
    //console.log("Message recieced");
    //console.log(message);
    document.getElementById("content").value = message;

}
chrome.extension.onMessage.addListener(onRequest);

Editor.prototype.setStatusBarContents = function (title, mode) {
    jQuery("#title")[0].innerHTML = title;
    jQuery("#mode")[0].innerHTML = mode;
}
Editor.prototype.loadedcompleted = function () {
    chrome.tabs.query({
        "active": true,
        "lastFocusedWindow": false,
        "status": "complete",
        "url": "https://*.bigmachines.com/*"
    }, function (tabs) {
        for (i = 0; i < tabs.length; i++) {
            console.log(tabs[i].id);
        }
    });
}
onload = function () {
    editor = new Editor();
    editor.loadedcompleted();
    editor.setStatusBarContents("[no document loaded]", "Java");
    editor.setTextAreaContent();
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode("ace/mode/javascript");
}
