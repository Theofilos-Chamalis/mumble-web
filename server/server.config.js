// Web App Server configuration and https (letsencrypt is recommended) certificate path
const PORT_HTTP = 80;
const PORT_HTTPS = 443;
const serverProjectPath = '/root/mumble-web';
const certificatesPath = serverProjectPath + '/data/letsencrypt/';

// Export the configuration variables to be used by the server
module.exports = {
    PORT_HTTP,
    PORT_HTTPS,
    serverProjectPath,
    certificatesPath
};