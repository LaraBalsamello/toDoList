var http = require("http");
var fs = require("fs");

const RESPONSEDELAY = 3000;
const PORT = 4211;

var handlers = {};
handlers["GET"] = {};
handlers[""]= {};
handlers["POST"]= {};
handlers["PUT"]= {};
handlers["DELETE"]= {};
handlers["OPTIONS"]= {};


// Custom  routes 

handlers["GET"]["/to-do-list/list"] = function(req, res) {
    serveFileJson(res, "json/get-to-do-list-list.json");
    // serveError(500, res, { success: false, message: "Error" });
}

//create a server object:
var server = http.createServer(function(req, res) {
    console.log(req.method + " " + req.url);

    if (RESPONSEDELAY > 0) {
        sleep(RESPONSEDELAY);
    }

    let found = false;
    for (const url in handlers[req.method]) {
        if (checkUrl(url, req.url)) {
            handlers[req.method][url](req, res);
            found = true;
            break;            
        }
    }

    if (!found) {
        res.write("Route not found");
    }

    res.end();
});
server.listen(PORT);

console.log("Fake-Backend Configuration");
console.log("Port: " + PORT);
console.log("Response delay: " + RESPONSEDELAY);
console.log("Running ...");

function checkUrl(url1, url2) {
    let split1 = url1.split("/");
    let split2 = url2.split("/");
    if (split1.length != split2.length) {
      return false;
    }
  
    for (let i = 0; i < split1.length; i++) {
      if (split1[i] != split2[i]) {
        if (split1[i][0] == ":" || split2[i][0] == ":") {
          continue;
        }
        return false;
      }
    }
  
    return true;
  }
  

function serveFileJson(res, filename) {
    res.writeHead(200, { "Content-type": "json/application" });
    data = fs.readFileSync(filename);
    res.write(data);
}

function serveError(code, res, data) {
    res.writeHead(code, { "Content-Type": "json/application"});
    res.write(JSON.stringify(data));
}

function sleep(ms) {
    var waitTill = new Date(new Date().getTime() + ms);
    while (waitTill > new Date()) {}
}