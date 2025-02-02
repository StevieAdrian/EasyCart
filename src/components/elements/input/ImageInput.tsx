import addImg from "../../../assets/add-image.png";

interface imageProp {
    children: React.ReactNode;
}

const ImageInput = (props: imageProp) => {
    const {children} = props;
    return (
        <div className="w-32 h-32 border border-gray-300 flex flex-col items-center justify-center rounded-lg">
            <img src={addImg} alt="" />
            <p className="text-xs text-gray-500">{children}</p>
        </div>
    )
}

export default ImageInput;