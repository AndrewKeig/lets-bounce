var fs = require('fs');
var options = {
    key: fs.readFileSync(__dirname + '/Authentication/server.key'),
    cert: fs.readFileSync(__dirname + '/Authentication/server.crt'),
    ca: fs.readFileSync(__dirname + '/Authentication/ca.crt'),
    requestCert: true,
    rejectUnauthorized: false
};

var bouncy = require('bouncy');

bouncy(options, function (req, bounce) {
    console.log(req.headers);

    if (req.headers.host === 'www.airasoul.net') {
        bounce(8080);
    }
    else if (req.headers.host === 'nodeplates.airasoul.net') {
        bounce(8002);
    }
}).listen(8000);




