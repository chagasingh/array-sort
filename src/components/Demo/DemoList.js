import React, { useMemo } from "react";
import classes from "./DemoList.module.css";
const DemoList = (props) => {
  const { items, order } = props;
  const sortedList = useMemo(() => {
    return items.sort((a, b) => (props.order ? a - b : b - a));
  }, [items, order]);
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);






// import React from 'react';

// import classes from './DemoList.module.css';

// const DemoList = (props) => {
//   const { items } = props;


//   const sortedList =items.sort((a, b) => a - b);
  

//   const sortedList2 =items.sort((a, b) => b - a);

//   return (
//     <div className={classes.list}>
//       {props.show ? (
//         <ul>
//           {sortedList.map((item) => (
//             <li key={item}>{item}</li>
//           ))}
//         </ul>
//       ) : (
//         <ul>
//           {sortedList2.map((item) => (
//             <li key={item}>{item}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default DemoList;