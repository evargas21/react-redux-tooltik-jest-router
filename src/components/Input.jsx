// @packages
import * as ProtoTypes from 'prop-types';

const Input =({ disabled, label, name, onChange, type, value }) => {
    return (
        <div key={name}>
            <label htmlFor={name}>{label}</label>
            <input
                className="custom-input"
                value={value}
                type={type}
                onChange={onChange}
                name={name}
                id={name}
                placeholder={label}
                disabled={disabled}
                required
                aria-autocomplete="none"
            />
        </div>
    );
};

Input.defaulttProps = {
    disabled: false,
    label: '',
    type: 'text',
    value: ''
};

Input.propTypes = {
    disabled: ProtoTypes.bool,
    label: ProtoTypes.string,
    name: ProtoTypes.string.isRequired,
    onChange: ProtoTypes.func.isRequired,
    type: ProtoTypes.string,
    value: ProtoTypes.string
};

export default Input;
