import React from 'react';
import {mount, shallow} from 'enzyme';

import ClockHours from '../../../../src/app/component/clock/clockHours';

describe('<ClockHours/> component', () => {
  let wrapper;
  let currentDate;

  beforeEach(() => {
    currentDate = new Date();
    currentDate.setHours(11);
  });

  it('should has style class "clock-hours"', () => {
    wrapper = shallow(<ClockHours data={currentDate}/>);
    expect(wrapper.hasClass('clock-hours')).toBeTruthy();
  });

  it('should calculate properly number of lamps to light', () => {
    wrapper = mount(<ClockHours data={currentDate}/>);
    expect(wrapper.find('.active.dark').length).toBe(2);
  });
});
