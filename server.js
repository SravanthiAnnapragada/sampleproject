// const express = require('express');
// const bodyparser = require('body-parser');
// const path = require('path');

// const api = require('./server/routes/api');
// const port = 3000;

// const app = express();
// //gives access for express to distributable folder
// app.use(express.static(path.join(__dirname,'dist')));
// //this parses the text into url encoded data
// app.use(bodyparser.urlencoded({extended: true}));
// //this parses the text as json
// app.use(bodyparser.json());

// app.use('/api',api);
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname,'dist/sampleproject/index.html'));
// });
// app.listen(port, function(){
//     console.log("Server running on localhost:" + port);
// })