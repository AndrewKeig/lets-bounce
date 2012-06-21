var bouncy = require('bouncy');

bouncy(function (req, bounce) {
    if (req.headers.host === 'nodeplates.airasoul.net') {
        bounce(8081);
    }
    else {
        bounce(8080);
    }
}).listen(8000);