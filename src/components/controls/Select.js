import { FormControl, MenuItem, InputLabel, Select as MuiSelect, FormHelperText } from '@material-ui/core'
import React from 'react'


function Select(props) {
    const { name, label, value, onChange, error = null, options } = props

    return (
        <>
            <FormControl
                variant="outlined"
                {...(error && { error: true })}
            >
                <InputLabel>{label}</InputLabel>
                <MuiSelect
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        options.map(
                            item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                        )
                    }
                </MuiSelect>
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        </>
    )
}

export default Select
