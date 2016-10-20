import React from 'react';
import {mount, shallow} from 'enzyme';

import ClockMinutes from '../../../../src/app/component/clock/clockMinutes';

describe('<ClockMinutes/> component', () => {
  let wrapper;
  let currentDate;

  beforeEach(() => {
    currentDate = new Date();
    currentDate.setMinutes(42);
  });

  it('should has style class "clock-minutes"', () => {
    wrapper = shallow(<ClockMinutes data={currentDate}/>);
    expect(wrapper.hasClass('clock-minutes')).toBeTruthy();
  });

  it('should calculate properly number of lamps to light', () => {
    wrapper = mount(<ClockMinutes data={currentDate}/>);
    expect(wrapper.find('.active').length).toBe(8);
  });
});
