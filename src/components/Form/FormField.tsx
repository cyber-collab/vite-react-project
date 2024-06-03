type FieldProps = {
    required?: boolean;
    htmlFor: string;
    typeInput: string;
    placeholder: string;
    classValueLabel: string;
    classValueInput: string;
    fieldTitle: string;
}
const FiledForm = ({classValueInput, classValueLabel, required, htmlFor, typeInput, placeholder, fieldTitle}: FieldProps) => {
    return (
        <div>
            <label htmlFor={htmlFor} className={classValueLabel}>{fieldTitle}</label>
            <input type={typeInput} id={htmlFor}
                   className={classValueInput}
                   placeholder={placeholder} required={required}/>
        </div>
    );
};

export default FiledForm;
