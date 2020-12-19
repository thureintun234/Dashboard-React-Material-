import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

function useForm(initialValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange)
      validate({ [name]: value })
  };

  const resetForm = () => {
    setValues(initialValues)
    setError({})
  }

  return {
    values,
    setValues,
    handleInputChange,
    error,
    setError,
    resetForm
  };
}

export default useForm;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {children}
    </form>
  );
}
