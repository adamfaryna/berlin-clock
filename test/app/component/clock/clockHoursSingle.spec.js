import React from 'react';
import {mount, shallow} from 'enzyme';

import ClockHoursSingle from '../../../../src/app/component/clock/clockHoursSingle';

describe('<ClockHoursSingle/> component', () => {
  let wrapper;
  let currentDate;

  beforeEach(() => {
    currentDate = new Date();
    currentDate.setHours(11);
  });

  it('should has style class "clock-hours-single"', () => {
    wrapper = shallow(<ClockHoursSingle data={currentDate}/>);
    expect(wrapper.hasClass('clock-hours-single')).toBeTruthy();
  });

  it('should calculate properly number of lamps to light', () => {
    wrapper = mount(<ClockHoursSingle data={currentDate}/>);
    expect(wrapper.find('.active.dark').length).toBe(1);
  });
});
