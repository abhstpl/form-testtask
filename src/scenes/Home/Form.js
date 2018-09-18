import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, } from 'redux-form';
import renderField from './renderField';
import { Button } from 'reactstrap';
import validate from './validate';

class Signup extends Component {
  componentDidMount() {
    this.handleInitialize();
  }
  handleInitialize() {
    const initData = {
      "firstName": this.props.item.firstName,
      "lastName": this.props.item.lastName,
      "company": this.props.item.company,
      "department": this.props.item.department,
      "email": this.props.item.email
    };
    this.props.initialize(initData);
  }

    render(){
  const handleForm = (values) =>{
      this.props.onAdd(values.firstName, values.lastName, values.company, values.department, values.email);
  };
  const { handleSubmit, pristine,  submitting} = this.props;

 let form = ( <form onSubmit={handleSubmit(handleForm)}>
 
     <Field
       name="firstName"
       component={renderField}
       type="text"
       placeholder="first name"
     />
 
     <Field
       name="lastName"
       component={renderField}
       type="text"
       placeholder="last name"
     />
      <Field
       name="company"
       component={renderField}
       type="text"
       placeholder="company"
     />
      <Field
       name="department"
       component={renderField}
       type="text"
       placeholder="department"
     />
 
     <Field
       name="email"
       component={renderField}
       type="email"
       placeholder="Email"
     />
 <div>
   <Button type="submit" disabled={pristine || submitting}>
     ADD
   </Button>
 </div>
</form>);

return ( 
      <div> 
      {form}
</div>  
);
}
}
export default reduxForm({
  form: 'simple',
  validate
})(Signup);