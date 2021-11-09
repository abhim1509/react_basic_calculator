const InputText = ({ label, type, identifier, onChange, placeholder }) => {
    return (
        <div className="form-group">
            <label htmlFor="" className="element">
                {label}
            </label>
            <input type={type} name={identifier} onChange={onChange} placeholder={placeholder} />
        </div>
    )
}

export default InputText;