import ProductInput from "../components/elements/input/ProductInput";
import ProductDescription from "../components/elements/details/ProductDescription";
import Button from "../components/elements/buttons/Button";
import useProductForm from "../hooks/useProductForm";


const CreateProduct = () => {
    const { formData, handleInputChange, handleFormSubmit } = useProductForm();

    return (
        <form onSubmit={handleFormSubmit} action="">
            <div className="pl-20 pt-16">
                <div>
                    <h1 className="font-extrabold text-lg">Upload Produk</h1>
                    <p className="poppins-semibold text-red pt-3 text-xs">Pastikan untuk tidak menjual produk palsu/melanggar hak kekayaan intelektual agar produk Anda tetap aman dan tidak dihapus.</p>
                </div>

                <div className="flex space-x-6 pt-8">
                    <ProductDescription title="Nama Produk">Nama produk yang ingin Anda tampilkan.</ProductDescription>
                
                    <div className="flex flex-1 pl-12 ml-6 items-center mt-4">
                        <ProductInput value={formData.name} onChange={handleInputChange} variant={"name"} placeholder="Masukkan nama produk di sini" name={"name"}></ProductInput>
                    </div>
                </div>
                
                <div className="mt-48 mr-12">
                    <div style={{borderColor: 'D9D9D9'}} className="flex justify-end p-5 pr-0 border-t-2 w-full">
                        <div className="mt-4 flex">
                            <div className="mr-10">
                                <Button color={"bg-white text-black border border-black"}>Batal</Button>
                            </div>
                            <button type="submit">
                                Simpan 
                            </button>
                                {/* <Button type="submit" color={"bg-electricBlue text-white"}>Simpan</Button> */}
                        </div>
                    </div>
                </div>

                <div className="mt-64"></div>
                <br />
                <br />

                {/* footer will be implemented soon */}
            </div>
        </form>
    )
}


export default CreateProduct;
