import { FormGroupText } from "nsw-ds-react";
import { Controller, useController } from "react-hook-form"

export const InputText = ({ control, name, rules, ...attributes }) => {
    
    const showError = (errorText) => {
        return { status: 'invalid', statusText: errorText }
    }

    return (
        <Controller name={name} control={control} rules={rules}
            render={({ field, fieldState, formState }) =>
                <FormGroupText htmlId={name}  {...field} {...attributes} ref={null}
                    {...(fieldState.error ? showError(formState.errors[name].message) : {})} />} />
    )
}