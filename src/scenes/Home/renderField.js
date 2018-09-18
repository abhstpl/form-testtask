import React from 'react';

const renderField = ({ input, label, type, placeholder,validationError, meta: { touched, error, warning } }) => {
  return(
  <div>
    <label>{placeholder} </label>
    <div>
      <input {...input} placeholder={placeholder} type={type}  className={validationError || (touched && error) ? "form-control validationError" : "form-control"}/>
    </div>
    <div>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)
};

export default renderField;