import React from "react";

const icon = <i style={{ margin: 4 }} class="fa fa-home"></i>;

function Button(props) {
  function getBgColor(variant) {
    if (variant === "primary") {
      return "#3d3dff";
    }

    if (variant === "secondary") {
      return "a5a5a5";
    }
  }

  function getFontSize(size) {
    if (size === "sm") {
      return "12px";
    }
    if (size === "md") {
      return "16px";
    }
    if (size === "lg") {
      return "20px";
    }
  }

  function getPadding(size) {
    if (size === "sm") {
      return "4px 6px";
    }
    if (size === "md") {
      return "6px 8px";
    }
    if (size === "lg") {
      return "8px 10px";
    }
  }

  let buttonStyle = {
    fontSize: getFontSize(props.size),
    padding: getPadding(props.size),
    borderRadius: props.rounded ? "8px" : "none",
    backgroundColor: getBgColor(props.variant),
    color: props.variant === "primary" ? "white" : "black",
    outline: "none",
    border: "none",
    margin: "8px",
  };

  return (
    <button style={buttonStyle} disabled={props.disabled}>
      {props.icon && props.iconPosition === "left" && icon}
      {props.text}

      {props.icon && props.iconPosition === "right" && icon}
    </button>
  );
}

Button.defaultProps = {
  variant: "primary",
  size: "md",
  rounded: false,
  text: "Default Text",
  icon: false,
  iconPosition: "left",
  disabled: false,
};

export default Button;
