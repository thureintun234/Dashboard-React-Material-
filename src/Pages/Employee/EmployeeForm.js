import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core";
import useForm from "./useForm";
import { Form } from "./useForm";
import Controls from "../../components/controls/Controls";
import * as employeeService from '../../services/employeeService'


const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

function EmployeeForm() {

  const validate = (fieldValues = values) => {
    let temp = { ...error }
    if ('fullName' in fieldValues)
      temp.fullName = values.fullName ? "" : "The field is required"
    if ('email' in fieldValues)
      temp.email = (/$^|.+@.+..+/).test(values.email) ? "" : "This Email is not valid"
    if ('mobile' in fieldValues)
      temp.mobile = values.mobile.length > 9 ? "" : "Mininum 10 numbers required"
    if ('departmentId' in fieldValues)
      temp.departmentId = values.departmentId.length != 0 ? "" : "The field is required"
    setError({
      ...temp
    })

    if (fieldValues == values) {
      return Object.values(temp).every(x => x == "")
    }
  }

  const {
    values,
    setValues,
    handleInputChange,
    error,
    setError,
    resetForm
  } = useForm(initialValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validate())
      employeeService.insertEmployee(values)
      resetForm()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
            error={error.fullName}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={error.email}
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={error.mobile}
          />
          <Controls.Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error={error.departmentId}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.CheckBox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button
              type="submit"
              text="Submit"
            />
            <Controls.Button
              color="default"
              text="Reset"
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
