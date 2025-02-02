interface DescProp {
    title: string;
    children: React.ReactNode;
}

const ProductDescription = (props: DescProp) => {
    const {title, children} = props;
    return (
        <div className="w-1/4">
            <h1 className="text-gray-800 font-bold tracking-wide text-lg">{title}</h1>
            <p className="text-gray-600 text-sm leading-relaxed text-justify"> {children}</p>
        </div>
    )
}

export default ProductDescription;