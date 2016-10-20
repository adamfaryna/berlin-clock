const Microevent = require('microevent-github');

let thisInterval;
let isStarted = false;

const Timer = {
  start: function () { // eslint-disable-line babel/object-shorthand
    if (!isStarted) {
      thisInterval = setInterval(() => {
        this.trigger('change', new Date());
      }, 2000);
      isStarted = true;
    }
  },
  stop: () => {
    if (isStarted) {
      clearInterval(thisInterval);
    }
  }
};

Microevent.mixin(Timer);

export default Timer;
