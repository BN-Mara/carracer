var express = require('express');
var app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var countUsers = 0;
var arrayUsers  = [];
var serversArray = [];
var userData={
  idServer:"",
  nameServer:""
}

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', function (req, res) {
  //console.log(req);
  userData.idServer = req.query.id;
  userData.nameServer = req.query.name;
   res.render('await',{});
});
app.get('/run', function (req, res) {
  
  res.render('index',{});
});

io.on('connection', (socket) => {
    console.log('a user connected'+socket.id);
    //socket.emit('message', {data:'start'});  
    let room =  userData.nameServer+userData.idServer;
    arrayUsers.push(socket.id);
    console.log(userData);
    socket.join(room);
    //io.emit('join', {data:arrayUsers});
    if (io.sockets.adapter.rooms[room]) 
    {
   // result
        console.log(io.sockets.adapter.rooms[room].length);
    }
    io.sockets.in(room).emit('join', {data:arrayUsers});
    countUsers += 1;
    if(countUsers == 3){
      io.sockets.in(room).emit("redirect",{data:'index'});    
      setTimeout(()=>{
        io.sockets.in(room).emit('message', {data:'stop'});
      },10000);
    }
  });
  

server.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port    
    console.log("Example app listening at http://%s:%s", host, port)
 });


