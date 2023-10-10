const { get } = require('lodash');
const Counter = require('../model/CounterSchema');

exports.IncreaseCounter = async (req, res) => {
  const ID = get(req, 'body.instanceID');

  let counter = await Counter.findOne();
  let count = 1;
  if (counter !== null) {
    const currentCounter = counter.counter;
    count = currentCounter + 1
    counter.counter = count;
  } else {
    counter = new Counter({
      counter: count,
    })
  }

  await counter.save();

  await res.send({counter: counter.counter, instanceId: ID})
};