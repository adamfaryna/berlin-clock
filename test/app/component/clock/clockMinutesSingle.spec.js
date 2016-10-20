import React from 'react';
import {mount, shallow} from 'enzyme';

import ClockMinutesSingle from '../../../../src/app/component/clock/clockMinutesSingle';

describe('<ClockMinutesSingle/> component', () => {
  let wrapper;
  let currentDate;

  beforeEach(() => {
    currentDate = new Date();
    currentDate.setMinutes(42);
  });

  it('should has style class "clock-minutes-single"', () => {
    wrapper = shallow(<ClockMinutesSingle data={currentDate}/>);
    expect(wrapper.hasClass('clock-minutes-single')).toBeTruthy();
  });

  it('should calculate properly number of lamps to light', () => {
    wrapper = mount(<ClockMinutesSingle data={currentDate}/>);
    expect(wrapper.find('.active').length).toBe(2);
  });
});
