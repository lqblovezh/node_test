const net = require("net");

// console.log(net.isIP('192.168.1.254'))

const server = net.createServer(socket => {
  console.log("client connected");
  socket.on("data", (e) => {
    console.log('server',e.toString());
  });
  console.log(socket.address())
  socket.write("hello\r\n");
  socket.pipe(socket);
});

server.on("error", (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
});

server.listen(1338,'127.0.0.1', () => {
  console.log("server bound",server.address());
  console.log(server.listening)
  let socket = new net.Socket()
  socket.connect(1338,'127.0.0.1',(e) => {
    socket.on('data',(e) => {
      console.log('client',e.toString())
    })
    socket.write("hello world\r\n");
  })
});
