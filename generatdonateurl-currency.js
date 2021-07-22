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
var sharelink = "https://github.com/fawazahmed0/currency-api#readme"

// Text to place in share message
var smallsharetext = "Free Currency Rates API"

// Text to place in share message
var largesharetext = "Free Currency Exchange Rates API with 150+ Currencies & No Rate Limits"

// Share button message to show when the button is collapse shown
var sharebtnmsg = "Share the Free Currency Rates API"

// Message to show on page
var mymsg = `You can help support this Service by as little as $3 🙂, because this Service needs regular maintenance to keep it running.<br><br>
Thank you for considering to support this Service.
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
