import React from "react";

interface ButtonProps {
  type?: "button" | "reset" | "submit";
  small?: boolean;
  className?: string;
  style?: React.CSSProperties;
  colorTheme?: boolean;
  children?: JSX.Element | string | any;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`Button ${props.small ? "Button--small" : ""} ${
        props.colorTheme ? "Button--theme" : ""
      } ${props.className ? props.className + " Button--custom" : ""}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
