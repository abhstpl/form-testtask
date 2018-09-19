import React from 'react';

const renderField = ({ input, label, type, placeholder,validationError, meta: { touched, error, warning } }) => {

  return(
  <div>
    <label>{placeholder} </label>
    <div>
      <input {...input} placeholder={placeholder} type={type}  className={"form-control"}/>
    </div>
  </div>
)
};

export default renderField;