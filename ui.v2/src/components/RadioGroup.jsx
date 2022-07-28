import { FormGroupRadio } from "nsw-ds-react";
import { Controller } from "react-hook-form"

export const RadioGroup = ({ control, name, rules, options, ...rest }) => {
    //options?.forEach((a,i) => options[i]={...options[i], gundul:2})
    const showError = (errorText) => {
        return { status: 'invalid', statusText: errorText }
    }

    return <Controller name={name} control={control} rules={rules}
        render={({ field: { name, onChange }, fieldState, formState }) => {
            options.forEach((a, index) => options[index] = { ...options[index], onChange: onChange })
            return <FormGroupRadio htmlId={name} {...rest} ref={null}
                options={options}
                {...(fieldState.error ? showError(formState.errors[name].message) : {})} />
        }} />

}