var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const hbs = require('hbs');
const main = require('./routes/main');
const events = require('./models/Emitter');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'partials'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/main', main);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index');
//  res.render('index');
});

events.on("confirmacionMensaje", (data)=>{
  io.to("room"+data.sesion).emit("actualizacionChat", (data));
  io.to("room"+data.sesion).emit("atencion", (data.mensaje));
})
events.on("confirmacionElemento", (data)=>{
  io.to("room"+data.sesion).emit("actualizacionDiagrama", (data));
  io.to("room"+data.sesion).emit("atencion", (data.mensaje));
})
events.on("confirmacionAporte", (data)=>{
  io.to("room"+data.sesion).emit("actualizacionArgumentacion", (data));
  io.to("room"+data.sesion).emit("atencion", (data.mensaje));
})

server.listen(3000);
io.on('connection', function (socket) {
  socket.on("ingresoEquipo", (data)=>{
    socket.join("room"+data.sesion);
    io.to("room"+data.sesion).emit("atencion",data.msg);
    console.log("Evento: "+data.msg);
  });
  socket.on("notificacionEquipo", (data)=>{
    io.to("room"+data.sesion).emit("atencion",data.msg);
    console.log("Evento: "+data.msg)
  });
});

module.exports = app;
