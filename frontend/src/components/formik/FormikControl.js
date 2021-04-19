import React from "react";
import Checkbox from "./formicComponents/Checkbox";
import Input from "./formicComponents/Input";
import TextArea from "./formicComponents/TextArea";

const FormikControl = ({control, ...rest}) => {
  
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
