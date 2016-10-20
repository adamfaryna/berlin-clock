import {mount} from 'enzyme';

import ClockFieldBlock from '../../../../src/app/component/clock/clockFieldBlock';

describe('<ClockFieldBlock/> component', () => {
  let wrapper;
  let date;

  beforeEach(() => {
    date = new Date();
    const caller = {
      calculateLampsToOn: () => {
        return 3;
      },
      className: () => {
        return 'class-name';
      },
      props: {
        size: 5,
        singleColor: 'dark',
        data: date
      }
    };
    wrapper = mount(ClockFieldBlock.render(caller));
  });

  it('has style class "clock-field-block"', () => {
    expect(wrapper.hasClass('clock-field-block')).toBeTruthy();
  });

  it('should render single color dark active elements', () => {
    let darkActiveElements = 0;
    wrapper.find('.clock-field')
      .forEach(elem => {
        darkActiveElements += elem.is('.dark.active') ? 1 : 0;
      });
    expect(darkActiveElements).toBe(3);
  });

  it('should render 5 <ClockField/> components', () => {
    expect(wrapper.find('.clock-field').length).toBe(5);
  });
});
