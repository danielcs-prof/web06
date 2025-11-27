
interface InputProps {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = (
    {id, type="text", label, placeholder, value, onChange}: InputProps
) => {
    return (
        <>
            <div className="mb-3">
                <label htmlFor={id} className="form-label">{label}</label>
                <input 
                        id={id} 
                        type={type} 
                        className="form-control" 
                        placeholder={placeholder} 
                        required={true} 
                        value={value}
                        onChange={onChange}
                />
            </div>
        </>
    )
}
