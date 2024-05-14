import React, { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";

TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "password", "email", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    isFocused: PropTypes.bool,
    isError: PropTypes.bool,
};

export default function TextInput({
    type = "text",
    name,
    id,
    className,
    value,
    defaultValue,
    handleChange,
    isFocused,
    placeholder,
    variant = "primary",
    required,
    autoComplete,
    isError,
    ref,
    ...props
}) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-center">
            <input
                {...props}
                type={type}
                name={name}
                id={id}
                value={value}
                defaultValue={defaultValue}
                className={`rounded-2xl border border-gray-1 bg-form-bg py-[13px] px-7 w-full ${
                    isError && "input-error"
                } input-${variant} ${className}`}
                autoComplete={autoComplete}
                placeholder={placeholder}
                required={required}
                ref={input}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
