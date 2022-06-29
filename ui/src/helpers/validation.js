import { isValid } from "date-fns";

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const phoneRegex = RegExp(/^4[0-9]{8}/i);

  export const validateField = (
    required,
    value,
    type,
    fieldLabel,
    maxLength = 0
  ) => {
  
  // Ensure any timestamps are not null and that they are a valid date
    if (type === "date" && required) {
      if (value === null || (value === undefined && required)) {
        return `${fieldLabel} is required`;
      } else if (!(new Date(value) instanceof Date )) {
        return `${fieldLabel} is not a valid date`;
      }
  
      return "";
    }
  
    if (type === "checkbox" && required) {
      if (value === null || value === undefined || value === "") {
        return `${fieldLabel} is required`;
      }
  
      return "";
    }
  
    //Check to ensure strings are set
    if (type === "string" && required) {
      if (value === null || value === undefined || value === "") {
        return `${fieldLabel} is required`;
      }
  
      return "";
    }
  
    if (type === "number" && required) {
      if (value === null || value === undefined || value === "") {
        return `${fieldLabel} is required`;
      }
  
      return "";
    }
  
    // Ensure that if there is a maxLength value set that the value is not longer than this
    if (required && maxLength > 0 && value.length > maxLength) {
      return `${fieldLabel} should not be any longer than ${maxLength}`;
    }
  
    // Ensure all email addresses are valid
    if (type === "email" && !validEmailRegex.test(value)) {
      return "A valid email address is required";
    }

    if (type === "phone" && !phoneRegex.test(value)) {
      return "A valid Australia mobile phone is required";
    }
  
    // Ensure all select dropdowns have been changed from their default
    if (
      required &&
      type === "select" &&
      (value === undefined || value === "default" || value === "")
    ) {
      return `${fieldLabel} is required`;
    }
  
    return "";
  };
  

