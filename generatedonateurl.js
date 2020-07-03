//Change the variables to what you want and Paste the code in console to get the donate url


// URL to append at beginning, This is optional and only for testing purpose, uncomment the next line if testing
var testurl
// testurl = "http://127.0.0.1:4000/donate.html"

// Link to place in share buttons
var sharelink = "https://github.com/fawazahmed0/Latest-adb-fastboot-installer-for-windows"

// Text to place in share message
var smallsharetext = "Easy Android USB drivers installer tool"

// Text to place in share message
var largesharetext = "Check this out, this tool makes the andriod usb drivers installation process seemless and easy"

// Share button message to show when the button is collapse shown
var sharebtnmsg = "Share the Latest adb fastboot drivers installer tool with your friends"

// Message to show on page
var mymsg = `Thanks for using my tool, this is Fawaz Ahmed(fawazahmed0) developer of Latest adb fastboot and usb drivers installer tool.<br><br> I made this tool, so that people who are new to Android rooting, twrp flashing etc, don't have to waste their time installing adb, fastboot and usb drivers.<br><br>
This tool will automatically detect and install drivers specific to your phone, so you wouldn't face any issue. I try to keep this tool up to date<br><br>
I spend so much time testing this tool in different windows version, so that you don't have to face any problem. <br><br>
If you like my work consider donating a few bucks to me or atleast share this tool with your friends so they don't have to waste their time configuring usb drivers etc.`




sharelink = encodeURIComponent(sharelink)
smallsharetext = encodeURIComponent(smallsharetext)
largesharetext = encodeURIComponent(largesharetext)
sharebtnmsg = encodeURIComponent(sharebtnmsg)
mymsg = encodeURIComponent(mymsg)
url = testurl || "https://fawazahmed0.github.io/donate.html"

var fullurl = url+'?mymsg='+mymsg+'&sharelink='+sharelink+'&smallsharetext='+smallsharetext+'&largesharetext='+largesharetext+'&sharebtnmsg='+sharebtnmsg;

console.log(fullurl)
