var docId = document.URL.match(/\/d\/([_A-Za-z0-9-]+)/)[1];
var docHash = sha1(docId);
var bgColor;
switch (document.URL.match(/docs.google.com\/(\w+)/)[1]) {
	case 'document': bgColor = [70, 136, 241, 255]; break;
	case 'presentation': bgColor = [243, 179, 42, 255]; break;
	case 'spreadsheets': bgColor = [30, 156, 90, 255];
}
var iconBase64 = new Identicon(docHash, { background: bgColor, foreground: [255, 255, 255, 255] }).toString();
document.querySelector('link[rel*="icon"]').href = 'data:image/png;base64,' + iconBase64;
