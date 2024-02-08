import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { FormField } from '../types/myTypes';


interface FieldProps {
    getValue: (id: string) => string;
    uiFieldMetaData: FormField;
    handleInput: (id: string, displayName: string, value: string | Date | number) => void;
    disabled?: boolean;

}

const UiField = (props: FieldProps) => {

    const { getValue, uiFieldMetaData, handleInput, disabled = false } = props;

    const { order, typeId, elementId, displayName, defaultValue, attributeName, required, editable, dataModelUrl, rules, width, validValues, userValues, metadataTypeForTemplate, placeholder } = uiFieldMetaData;


    const getField = () => {
        switch (typeId) {
            case "MULTI_SELECT":
                return (
                        <Select
                            key={elementId}
                            value={getValue(elementId)}
                            onChange={(e) => handleInput(elementId, displayName, e.target.value)}
                            fullWidth
                            variant="outlined"
                            label={attributeName}
                        >
                            {validValues.map((option) => (
                                <MenuItem key={option.id} value={option.value}>
                                    {option.displayName}
                                </MenuItem>
                            ))}
                        </Select>
                    );
            default:
                return null
        }
    }
    return getField();
}

export default UiField;
