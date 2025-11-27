
interface ButtonProps {
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    value: string;
    onClick?: () => void;
}

export const Button = (
    {type="button", variant="primary", value, onClick}: ButtonProps

) => {
    return (
        <>
            <button 
                type={type} 
                className={"btn btn-" + variant} 
                onClick={onClick}>

                    {value}
            </button>
        </>
    )
}