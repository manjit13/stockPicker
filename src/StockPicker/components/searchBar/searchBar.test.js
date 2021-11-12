import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Component from './index'

configure({ adapter: new Adapter() });


describe('It Tests SearchBar', () => {

  it('should render searchBar', () => {

      const wrapper = render(<Component val={'abc'} />);

      expect(wrapper.find('.stock-search')).toBeDefined();
      // expect(wrapper.find('.value')).toHaveLength(animals.length);
  });

 
});