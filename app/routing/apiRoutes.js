var data = require('../data/friends');

module.exports = function(app){
    app.get('/api/friends', function(req, res) {
        res.json(data.friends)
    });
    app.post('/api/friends', function (req, res){
        var userInput = req.body;
        debugger
        var friendIndex = match(userInput, data.friends);
        var friendData = data.friends[friendIndex]
        console.log(friendData)
        console.log(data)
        data.friends.push(userInput)
        console.log('---------------')
        console.log(friendData)
        console.log('---------------')

        res.send(friendData)
    });
};
var questionNumber = 10;
function match(input, friendArray){
    var difference = [0, 100];
    for(var i = 0; i < friendArray.length; i++){
        var result = 0;
        for(var j = 0; j < questionNumber; j++){
            result += Math.abs(parseInt(input.scores[j])-parseInt(friendArray[i].scores[j]));
        };
        if(difference[1] > result){
            difference[0]=i;
            difference[1]=result;
        }
    };
    return difference[0];
}