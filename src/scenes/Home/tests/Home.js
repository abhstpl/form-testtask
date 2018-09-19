import React from 'react';
import { shallow, mount } from 'enzyme';
import HomeContainer from '../index';
import { Container, Row, Col, Button, Modal, ModalBody, ModalFooter, Table} from 'reactstrap';
import configureStore from 'redux-mock-store';
import 'jsdom-global/register';
import Form from '../Form';

describe('Test on Home Container', () => {
    const mockStore = configureStore();
    const store = mockStore({
        info: {
            formData: [{}],
            reload: true
        }
    });
    const props = {
        getForm: jest.fn(),
        onAdd: jest.fn()
    };
    it('should render reactstrap elements', () => {
        const wrapper = mount(shallow(<HomeContainer {...props} store={store} />).get(0));
        wrapper.setState({open: true});
        const onClick = wrapper.find(Button).props().onClick(() => true);
        wrapper.find(Modal).props().isOpen = false;
        wrapper.find(Modal).props().toggle(false);
        const onClickRow = wrapper.find('tbody').props().onClick();
        expect(wrapper.find(Container)).toHaveLength(2);
        expect(wrapper.find(Row)).toHaveLength(2);
        expect(wrapper.find(Col)).toHaveLength(3);
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.find(Modal)).toHaveLength(1);
        expect(wrapper.find(ModalBody)).toHaveLength(0);
        expect(wrapper.find(ModalFooter)).toHaveLength(0);
        expect(wrapper.find(Table)).toHaveLength(1);
        expect(onClickRow).toBeFalsy();
    });
});