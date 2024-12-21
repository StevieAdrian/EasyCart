import axios from "axios"

interface productInfo {
    name: string;
    price: Float32Array;
    description: string;
    stock: number;
}

export const handleSubmit = (prop: productInfo) => {
    axios.post('http://localhost:5113/api/product', prop).then(response => {
        console.log("Product added successfully!", response.data)
    }).catch(error => {
        console.error("An error occured when adding the product!", error);
    })
}