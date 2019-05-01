// Require path for our routing
var path= require('path');
// Routing
module.exports =function(app){
// Get request to take User to Survey page
    app.get('/survey', function(req,res){
        res.sendFile(
            path.join(__dirname, "../public/survey.html"));
    });
// Send all unmatched routes to Home page
    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
};