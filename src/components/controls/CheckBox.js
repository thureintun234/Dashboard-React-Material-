import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core'
import React from 'react'

export default function CheckBox(props) {
    const { name, label, value, onChange } = props

    const convertToDefEventPara = (name,value) => ({
        target: {
            name,value
        }
    })

    return (
        <>
            <FormControl>
                <FormControlLabel control={<MuiCheckbox
                    checked={value}
                    color="primary"
                    onChange={e => onChange(convertToDefEventPara(name,e.target.checked))}
                    name={name}
                />}
                    label={label}
                />
            </FormControl>
        </>
    )
}
