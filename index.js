var docId = document.URL.match(/\/d\/([_A-Za-z0-9-]+)/)[1];
var docHash = sha1(docId);
var bgColor;
switch (document.URL.match(/docs.google.com\/(\w+)/)[1]) {
	case 'document': bgColor = [81, 142, 245, 255]; break;
	case 'drawings': bgColor = [222, 83, 71, 255]; break;
	case 'forms': bgColor = [114, 73, 188, 255]; break;
	case 'presentation': bgColor = [245, 186, 19, 255]; break;
	case 'spreadsheets': bgColor = [35, 165, 102, 255];
}
var iconBase64 = new Identicon(docHash, { background: bgColor, foreground: [255, 255, 255, 255] }).toString();
document.querySelector('link[rel*="icon"]').href = 'data:image/png;base64,' + iconBase64;
