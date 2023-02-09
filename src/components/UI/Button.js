import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button 
    className={classes.button} 
    type="button" 
    onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default React.memo(Button);



// import React from 'react';

// import classes from './Button.module.css';

// const Button = (props) => {
//   console.log('Button RUNNING');
//   return (
//     <button
//         type={props.type || 'button'}
//       className={`${classes.button} ${props.className}`}
//       onClick={props.onClick}
//     >
//       {props.children}
//     </button>
//   );
// };

// export default Button;