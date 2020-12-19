import React from "react";
import Radio from "@material-ui/core/Radio";
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function RadioGroup(props) {
  const { name, label, value, onChange, items } = props;

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <MuiRadioGroup
          row
          name={name}
          value={value}
          onChange={onChange}
        >
          {
            items.map(
              (item) => (
                <FormControlLabel key={item.id} value={item.id} control={<Radio />} 
                label={item.title} />
              )
            )
          }
        </MuiRadioGroup>
      </FormControl>
    </>
  );
}
