const { get } = require('lodash');
const Counter = require('../model/CounterSchema');
const logger = require('../utils/logger');

exports.IncreaseCounter = async (req, res) => {
  try {
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
    logger.info(`counter: ${counter.counter}, instanceId: ${ID}`)
    await res.send({ counter: counter.counter, instanceId: ID })
  } catch (error) {
    logger.error(error)
    res.send(error)
  }
};