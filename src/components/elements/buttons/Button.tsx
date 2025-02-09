interface ButtonProps {
    color: string;
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
    const { color, children } = props;
    return (
        <button className={`w-[210px] h-[58px] p-4 pl-8 pr-8 rounded-md ${color}`}>{children}</button>
    )
}

export default Button;