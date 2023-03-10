import React from "react";
import classes from "./Input.module.css";
// {type: 'text'}
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* <input id={props.input.id} {...props.input}/> */}
      <input ref={ref} {...props.input} />
    </div>
  );
});
export default Input;
