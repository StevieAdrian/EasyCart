import axios from "axios"

interface productInfo {
    name: string;
    condition: 0 | 1;
    description: string;
    weight: number;
    price: number;
    // stock: number;
    min_purchase: number;
}

// const API_URL = "http://localhost:5113/api/product";

export const handleSubmit = async (prop: productInfo) => {
    // try {
    //     const response = await axios.post(API_URL, prop)
    //     console.log("Product added successfully!", response.data);
    // } catch (error) {
    //     console.error("An error occured when adding the product!", error);
    // }
    
    axios.post('http://localhost:5113/api/product', prop).then(response => {
        console.log("Product added successfully!", response.data)
    }).catch(error => {
        console.error("An error occured when adding the product!", error);
    })
}