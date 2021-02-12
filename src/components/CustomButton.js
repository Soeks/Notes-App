import React from "react";

import { CustomButtonStyle } from "../styles";

export default function CustomButton(props) {
  return (
    <CustomButtonStyle onClick={props.onClick}>{props.text}</CustomButtonStyle>
  );
}
