var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var passport = require('./strategies/sql.localstrategy');
var sessionConfig = require('./modules/session.config');

// Route includes
var indexRouter = require('./routes/index.router');
var userRouter = require('./routes/user.router');
var registerRouter = require('./routes/register.router');
var startRouter = require ('./routes/start.router');
var writingRouter = require ('./routes/writing.router');
var ideaRouter = require ('./routes/idea.router');
var organizerRouter = require ('./routes/organizer.router');
var editRouter = require ('./routes/edit.router');

var port = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
app.use(express.static('./server/public'));

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/register', registerRouter);
app.use('/user', userRouter);
app.use('/start', startRouter);
app.use('/writing', writingRouter);
app.use('/idea', ideaRouter);
app.use('/organizer', organizerRouter);
app.use('/edit', editRouter);


// Catch all bucket, must be last!
app.use('/', indexRouter);

// Listen //
app.listen(port, function(){
   console.log('Listening on port:', port);
});
