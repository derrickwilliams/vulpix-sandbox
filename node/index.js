import express from 'express';
const app = express();

const ID = (new Date()).getTime();

const incrementer = start => {
  let counter = start;
  
  const incr = () => {
    counter = counter + 1
  }

  incr.count = () => counter;

  return incr;
}

const successIncr = incrementer(0);
const errorIncr = incrementer(0);

app.get('/', (req, res, next) => {
  successIncr();
  return res.json({
    ID, 
    data: {
      errorCount: errorIncr.count(),
      successCount: successIncr.count(),
      msg: 'Hello'
    }
  });
});

app.listen(process.env.PORT || 8080, function() {
  console.log('Listening on port ' + (process.env.PORT || 8080));
});