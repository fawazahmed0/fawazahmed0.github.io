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
var mymsg = `Thanks for using my tool, I am Fawaz Ahmed (fawazahmed0) developer of this tool. I made this tool, so that people new to Android rooting, TWRP flashing etc, don’t have to waste time.<br><br>
This tool will detect and install drivers specific to your phone, so you wouldn’t face any issue. I try to keep this tool up to date.
I have spent so much time testing this tool in different windows versions, so you don’t have to face any problem.<br><br>
If you like my work consider donating to me or at least share this tool with friends so they don’t have to waste time<br><br>
I would like to thank all the Supporters who have donated to this tool:<br><br>
Mickael Catherine<br>
Christopher Vaughan<br>
Nuno Pinho<br>
Robert Edwards<br>
Antonio Gobbin<br>
Hamza Elouacef<br>
None<br>
Edivaldo A Pereira<br>
Wallace G. Sanders<br>
Peter Bergonzi<br>
Áron Somodi<br>
Antonio Banders<br>
vittorio noca<br>
Manuel De Diego Prato<br>

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
