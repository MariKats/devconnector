import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextFieldGroup = ({
  type,
  error,
  disabled,
  info,
  classname,
  caption,
  placeholder,
  value,
  onChange,
  name
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={classnames(classname, { "is-invalid": error })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  classname: PropTypes.string,
  info: PropTypes.string,
  caption: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text",
  classname: "form-control form-control-lg"
};

export default TextFieldGroup;
