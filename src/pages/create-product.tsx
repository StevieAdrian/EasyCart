import ProductInput from "../components/elements/input/ProductInput";

const CreateProduct = () => {
    return (
        <form action="">
            <ProductInput type="text">Product Name</ProductInput>
            <ProductInput type="number">Product Price</ProductInput>
            <ProductInput type="text">Product Description</ProductInput>
            <ProductInput type="number">Product Stock</ProductInput>
            <div className="flex justify-end p-4 border-t">
                <button type="submit" style={{backgroundColor: '#EA4C88', }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cc3b72')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EA4C88")} className="px-4 py-2 text-white transition rounded-lg"> Add </button>
            </div>
        </form>
    )
}

export default CreateProduct;