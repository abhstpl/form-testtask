import React from 'react';
import { mount } from 'enzyme';
import { reduxForm } from 'redux-form';
import 'jsdom-global/register';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import  Form  from '../Form';
import validate from '../validate';


describe('Test on Redux Form', () => {
    const mockStore = configureStore();
    const store = mockStore({
        info: {
            formData: [{}],
            reload: true
        }
    });
    const props = {
        item: {
            firstName: 'test',
            lastName: 'test',
            company: 'test',
            department: 'test',
            email: 'test@test.com'
        },
        onAdd: jest.fn()
    };
    const Decorated = reduxForm({ 
        form: 'simple' , validate
    })(Form)
    
    it('should render fields', () => {
        const wrapper = mount(<Provider store={store}><Decorated {...props}/></Provider>);
        wrapper.find('form').props().onSubmit(()=>{});
        expect(wrapper).toHaveLength(1);
    });
});