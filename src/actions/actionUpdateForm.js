import api from './api';

export function addForm(firstName, lastName, company, department, email) {
	const data = {
		firstName: firstName,
		lastName: lastName,
		company: company,
		department: department,
		email: email
	};
	return {
		type: 'ADD_FORM',
		payload: api.post('https://test-task-2ae5b.firebaseio.com/test.json', data)
	};
};

export function getForm() {
	return {
		type: 'GET_FORM',
		payload: api.get('https://test-task-2ae5b.firebaseio.com/test.json')
	};
};