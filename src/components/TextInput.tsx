import {FormControl, FormLabel, Input} from "@mui/material";

export type TextInputProps = {
    label: string;
    name: string;
    placeholder?: string;
    value?: string;
    required?: string;
    error?:string;
}

const TextInput = ({
    label,
    name,
    error,
    required,
    placeholder,
    value,
    ...otherProps
}: TextInputProps) => {
    const isError = error !== undefined;

    return(
        <FormControl>
          <FormLabel htmlFor={name}>
              {label}
              {required && <sup>*</sup>}
          </FormLabel>
            <Input
                id={name}
                name={name}
                type={'text'}
                placeholder={placeholder}
                {...otherProps}
            />
            <h3>{error && error}</h3>
        </FormControl>
    )
}

export default TextInput;