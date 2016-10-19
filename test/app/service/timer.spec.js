import Timer from '../../../src/app/service/timer';
import * as TestUtils from '../../testUtils';

describe('Timer', () => {
  describe('start method', () => {
    it('should start triggering "change" events with current timestamp', done => {
      Timer.start();
      Timer.bind('change', data => {
        expect(TestUtils.isDate(data)).toBeTruthy();
        Timer.unbind('change');
        done();
      });
    });
  });

  describe('stop method', () => {
    it('should stop triggering "change" events', done => {
      let stopped = false;
      Timer.start();
      Timer.bind('change', () => {
        if (stopped) {
          expect(true).toBeFalsy();
          done();
        }
      });
      Timer.stop();
      stopped = true;
      setTimeout(done, 200);
    });
  });
});
