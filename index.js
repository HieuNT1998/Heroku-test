const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.listen(process.env.PORT || 1998,(err)=>{
    if(err) console.log(err);
    else console.log("thanh cong");
});

