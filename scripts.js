
// // const PRIV_KEY = "31b2321722460541913ad51c9c3c7f3551ea678d";
// // const PUBLIC_KEY = "0cdd95cf697aa6f189093d7389f449ef";
// hash: 3a3dc240fcd87e93e201a611b06a2954
// https://www.md5hashgenerator.com/ to get md5 hash

// requestURL:

// https://gateway.marvel.com:443/v1/public/comics/92197?apikey=0cdd95cf697aa6f189093d7389f449ef

function httpGetAsync(theUrl, callback) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
      callback(xmlHttpReq.responseText);
  }
  xmlHttpReq.open("GET", theUrl, true); // true for asynchronous 
  xmlHttpReq.send(null);
}

httpGetAsync('http://gateway.marvel.com/v1/public/comics/92197?ts=2&apikey=0cdd95cf697aa6f189093d7389f449ef&hash=3a3dc240fcd87e93e201a611b06a2954',
  function (result) {
    console.log(result);

  });

