const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);
const controls = require("./controls")

io.on("connection", (socket) => {
  console.log('a user connected');

  socket.on("headlights", (headlightState) => {
    controls.controlHeadlights(headlightState)
  })

  socket.on("blinkleft", (leftBlinkState) => {
    controls.controlLeftBlink(leftBlinkState)
  })

  socket.on("blinkright", (rightBlinkState) => {
    controls.controlRightBlink(rightBlinkState)
  })

  socket.on("horn", (hornState) => {
    controls.controlHorn(hornState)
  })
});
app.use(express.static('./build'))

http.listen(3000, () => {
  console.log('listening on *:3000');
});