interface ButtonProps {
    color: string;
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
    const { color, children } = props;
    return (
        <button className={`w-[234px] h-[62px] p-4 pl-8 pr-8 rounded-md ${color}`}>{children}</button>
    )
}

export default Button;