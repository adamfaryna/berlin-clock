import React from 'react';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

import Clock from '../../../../src/app/component/clock/clock';
import Timer from '../../../../src/app/service/timer';

describe('<Clock/> component', () => {
  let wrapper;

  it('should subscribe to Timer', () => {
    sinon.spy(Clock.prototype, 'componentWillMount');
    const timerMock = sinon.mock(Timer);
    timerMock.expects('start').once();
    timerMock.expects('bind').once();
    wrapper = mount(<Clock/>);

    timerMock.expects('stop').once();
    wrapper.unmount();
    timerMock.restore();
    timerMock.verify();
    expect(Clock.prototype.componentWillMount.calledOnce).toBeTruthy();
  });

  it('should has class named "clock"', () => {
    wrapper = shallow(<Clock/>);
    expect(wrapper.hasClass('clock')).toBeTruthy();
  });

  describe('should contain component', () => {
    beforeEach(() => {
      wrapper = mount(<Clock/>);
    });

    it('<ClockHour/>', () => {
      expect(wrapper.find('.clock-hours').length).toBe(1);
    });

    it('<ClockHourSingle/>', () => {
      expect(wrapper.find('.clock-hours-single').length).toBe(1);
    });

    it('<ClockMinutes/>', () => {
      expect(wrapper.find('.clock-minutes').length).toBe(1);
    });

    it('<ClockMinutesSingle/>', () => {
      expect(wrapper.find('.clock-minutes-single').length).toBe(1);
    });
  });
});
