function onRequest(message, sender, call) {
    //console.log("Message recieced");
    //console.log(message);
    document.getElementById("content").value = message;
    window.open("editor.html", "_blank", "toolbar=no, titlebar=no,location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width=720, height=400");
}
chrome.extension.onMessage.addListener(onRequest);
