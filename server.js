const express = require('express'); // importing a CommonJS module
const helmet= require('helmet');
const morgan = require('morgan');


const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.use(methodLogger);
server.use(addName);
// server.use(lockout);

server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});
function methodLogger(req, res, next) {
  console.log(`${req.method} Request`);
  next();
}
function addName(req, res, next) {
  req.name = req.name || 'Rufus';
  next();
}
// function lockout(req, res, next) {
//   res.status(403).json({message: 'api lockout in force'});
// }
function ySNP(req, res, next) {
  const time = new Date();
  const currentMSeconds = currentTime.getSeconds();
  res.status(403).json({message: 'You shall not pass'});
}
module.exports = server;
