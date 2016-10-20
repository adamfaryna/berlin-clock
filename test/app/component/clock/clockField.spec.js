import React from 'react';
import {shallow} from 'enzyme';

import ClockField from '../../../../src/app/component/clock/clockField';

describe('<ClockField/> component', () => {
  let wrapper;

  it('should has style class "clock-field"', () => {
    wrapper = shallow(<ClockField color="dark" style={{}}/>);
    expect(wrapper.hasClass('clock-field')).toBeTruthy();
  });

  it('should has style class "active" from props.active equal true', () => {
    wrapper = shallow(<ClockField color="dark" active={true} style={{}}/>);
    expect(wrapper.hasClass('active')).toBeTruthy();
    expect(wrapper.hasClass('deactive')).toBeFalsy();
  });

  it('should has style class "deactive" from props.active by default', () => {
    wrapper = shallow(<ClockField color="dark" style={{}}/>);
    expect(wrapper.hasClass('deactive')).toBeTruthy();
    expect(wrapper.hasClass('active')).toBeFalsy();
  });

  it('should has style class from props.color', () => {
    wrapper = shallow(<ClockField color="dark" style={{}}/>);
    expect(wrapper.hasClass('dark')).toBeTruthy();
  });

  it('should has style class from props.color', () => {
    wrapper = shallow(<ClockField color="dark" style={{}}/>);
    expect(wrapper.props().active).toBeFalsy();
  });
});
