import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Check for correct displays', () => {
	it('should only be 1 item with class .App', () => {
		const component = shallow(<App />);
		const wrapper = component.find('.App');
		expect(wrapper.length).toBe(1);
	});
	it('person class no rendered yet, should be 0', () => {
		const component = shallow(<App />);
		const wrapper = component.find('.person');
		expect(wrapper.length).toBe(0);
	});
});
