import React from "react";
import PropTypes from 'prop-types'

// const PropTypes = {
//   string(props, propName, componentName) {
//     if (typeof props[propName] !== "string") {
//       console.error(
//         `Property ${propName} must be of type string in component ${componentName}`
//       );
//     }
//   },
// };

function ImePrezime(props) {
  return (
    <div>
      <div>Name: {props.name}</div>
      <div>Surname: {props.surname}</div>
      <div>Age: {props.age}</div>
    </div>
  );
}

ImePrezime.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  age: PropTypes.number,
};

export default ImePrezime;
