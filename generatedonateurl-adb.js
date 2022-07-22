// use http://www.hemingwayapp.com/ and https://prowritingaid.com/ to make sentences easy and simple

//Change the variables to what you want and Paste the code in console to get the donate url


// URL to append at beginning, This is optional and only for testing purpose, uncomment the next line if testing
var testurl
// testurl = "http://127.0.0.1:4000/donate.html"

// No Donate btn
// Give it a value incase you don't want donate button to be shown in the page, this is useful when you
// only want sharebutton to be shown
var nodonatebtn = "";

// Link to place in share buttons
var sharelink = "https://github.com/fawazahmed0/Latest-adb-fastboot-installer-for-windows"

// Text to place in share message
var smallsharetext = "Easy Android USB drivers installer tool"

// Text to place in share message
var largesharetext = "Check this out, this tool makes the Android usb drivers installation process easy"

// Share button message to show when the button is collapse shown
var sharebtnmsg = "Share the Latest adb fastboot drivers installer tool with friends"

// Message to show on page
var mymsg = `<br><br>If you like my work, please consider donating<br><br>
I would like to thank all the Supporters who have donated:<br><br>
Christopher Caldwell<br>
Roy Rubin<br>
Holger Banzhaf<br>
Alexey Makarov<br>
Romy Adiputra<br>
Mickael Catherine<br>
<a href="https://github.com/fawazahmed0/Latest-adb-fastboot-installer-for-windows/blob/master/DONOR.md">Old Donors</a>

`




sharelink = encodeURIComponent(sharelink)
smallsharetext = encodeURIComponent(smallsharetext)
largesharetext = encodeURIComponent(largesharetext)
sharebtnmsg = encodeURIComponent(sharebtnmsg)
nodonatebtn = encodeURIComponent(nodonatebtn)
mymsg = encodeURIComponent(mymsg)
url = testurl || "https://fawazahmed0.github.io/donate.html"

var fullurl = url+'?mymsg='+mymsg+'&sharelink='+sharelink+'&smallsharetext='+smallsharetext+'&largesharetext='+largesharetext+'&sharebtnmsg='+sharebtnmsg+'&nodonatebtn='+nodonatebtn;

console.log(fullurl)
