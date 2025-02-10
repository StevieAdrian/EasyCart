import { useState } from "react";
import { handleSubmit } from "../services/productService";

export type ProductFormData = {
        category: string | number;
        name: string;
        condition: 0 | 1;
        description: string;
        weight: number;
        price: number;
        // stock: number;
        min_purchase: number;
    }

export const useProductForm = () => {
    const [selectedCondition, setSelectedCondition] = useState<"Baru" | "Bekas">("Baru");
    const [formData, setFormData] = useState<ProductFormData>({
        category: "",
        name: "",
        condition: 0,
        description: "",
        weight: 1,
        price: 1,
        // stock: number;
        min_purchase: 1
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        const newValue = name === "min_purchase" || name === "price" ? Number(value) : value;
        setFormData({
            ...formData,
            [name]: newValue,
        })
    }

    const handleConditionChange = (condition: "Baru" | "Bekas") => {
        console.log("Sebelum diubah:", formData.condition);
        
        setSelectedCondition(condition);
        setFormData((prevFormData) => ({
            ...prevFormData,
            condition: condition === "Baru" ? 0 : 1,
        }));

        console.log("Setelah diubah:", condition === "Baru" ? 0 : 1);
    }

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData)
        handleSubmit(formData)
    }

    return {
        formData,
        selectedCondition,
        setSelectedCondition: handleConditionChange,
        handleInputChange,
        handleFormSubmit
    }
}

export default useProductForm;