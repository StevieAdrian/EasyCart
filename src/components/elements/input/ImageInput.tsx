import { useEffect, useRef, useState } from "react";
import addImg from "../../../assets/add-image.png";

interface imageProp {
    children: React.ReactNode;
}



const ImageInput = (props: imageProp) => {
    const {children} = props;
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        if (selectedFile) {
            const url = URL.createObjectURL(selectedFile);
            setPreviewUrl(url);
            return () => URL.revokeObjectURL(url);
        }
        setPreviewUrl(null);
    }, [selectedFile]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setSelectedFile(file || null);
    };

    const triggerFileInput = () => {
        inputRef.current?.click();
    };

    return (
        <div className="w-32 h-32 border border-gray-300 flex flex-col items-center justify-center rounded-lg cursor-pointer" onClick={triggerFileInput}>
            <img src={previewUrl || addImg} alt="Upload Photo" />
            <p className="text-xs text-gray-500">{children}</p>
            <input type="file" className="hidden" ref={inputRef} onChange={handleFileChange} accept="image"/>
        </div>
    )
}

export default ImageInput;