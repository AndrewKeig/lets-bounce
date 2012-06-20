var bouncy = require('bouncy');

bouncy(function (req, bounce) {
    if (req.headers.host === 'www.airasoul.net') {
        bounce(8080);
    }
    else if (req.headers.host === 'nodeplates.airasoul.net') {
        bounce(8081);
    }
}).listen(8000);