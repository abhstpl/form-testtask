import React from 'react';
import { shallow } from 'enzyme';
import renderField from '../renderField';

describe('Test on renderField', () => {
	it('should render fields', () => {
		const meta = {
				touched: true,  
				error: 'error',
				warning: 'warning'
		};
		const wrapper = shallow(<renderField input="text" placeholder="test" type="text" validationError={true} className={"form-control"} meta={meta}/>);
		expect(wrapper).toMatchSnapshot();
		});

  it('should render fields', () => {
    const meta = {
          touched: false
    };
    const wrapper = shallow(<renderField input="test" placeholder="test" type="text" validationError={false} className={"form-control"} meta={meta}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render fields', () => {
    const meta = {
			touched: false,
			error: 'error',
			warning: 'warning'
    };
		const wrapper = shallow(<renderField input="test" placeholder="test" type="text" validationError={false} meta={meta}/>);
		expect(wrapper).toMatchSnapshot();
    });
});