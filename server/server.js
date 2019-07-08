const path = require('path');
const express = require('express');
const http = require('http');
const https = require('https');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const forceSSL = require('express-force-ssl');
const fs = require('fs');

const { PORT_HTTP, PORT_HTTPS, certificatesPath } = require('./server.config.js');

const DIST_DIR = path.join(`${__dirname}/../`, 'dist');

fs.access(certificatesPath + 'privkey.pem', fs.F_OK, (error) => {
    const app = express();

    // Apply middleware
    app.use(cors());
    app.use(compression());
    app.use(helmet());

    // Serving the files on the dist folder
    app.use(express.static(DIST_DIR));

    // Send index.html when the user access the web
    app.get('*', (req, res) => {
        res.sendFile(path.join(DIST_DIR, 'index.html'));
    });

    // Create an http server and serve it
    const httpServer = http.createServer(app);
    httpServer.listen(PORT_HTTP);

    // If we have a ssl certificate
    if (!error) {
        // HTTPS Configuration
        const privateKey = fs.readFileSync(certificatesPath + 'privkey.pem', 'utf8');
        const certificate = fs.readFileSync(certificatesPath + 'fullchain.pem', 'utf8');
        const credentials = { key: privateKey, cert: certificate };

        // Force SSL redirection
        app.use(forceSSL);

        // Create an https server and serve it
        const httpsServer = https.createServer(credentials, app);
        httpsServer.listen(PORT_HTTPS);
    }
})
