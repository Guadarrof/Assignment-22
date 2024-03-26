import React from "react";

const InputGroup = ({ type, className, id, text, errorMsge, onChange}) => {
  return (
    <div className="input_group">
      <label htmlFor={id}> {text} </label>
      <input type={type} className={className} id={id} onChange={onChange} ></input>
      <p className="error_p">{errorMsge}</p>
    </div>
  );
};

export default InputGroup;
