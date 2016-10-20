import React from 'react';
import {shallow} from 'enzyme';

import ClockSeconds from '../../../../src/app/component/clock/clockSeconds';

describe('<ClockSeconds/> component', () => {
  let wrapper;
  let currentDate;

  beforeEach(() => {
    currentDate = new Date();
    currentDate.setSeconds(42);
  });

  it('should has style class "clock-seconds"', () => {
    wrapper = shallow(<ClockSeconds data={currentDate}/>);
    expect(wrapper.hasClass('clock-seconds')).toBeTruthy();
  });
});
