import ProductInput from "../components/elements/input/ProductInput";
// import addImg from "../assets/add-image.png";
import ImageInput from "../components/elements/input/ImageInput";
import ProductDescription from "../components/elements/details/ProductDescription";

const CreateProduct = () => {
    return (
        <form action="">
            <div className="pl-20 pt-16">
                <div>
                    <h1 className="font-extrabold">Upload Produk</h1>
                    <p style={{color: '#FD0000'}} className="poppins-semibold pt-4 text-xs">Pastikan untuk tidak menjual produk palsu/melanggar hak kekayaan intelektual agar produk Anda tetap aman dan tidak dihapus.</p>
                </div>

                <div className="flex space-x-6 pt-20">
                    <ProductDescription title="Foto Produk">Unggah produk Anda dalam format <strong>JPEG, JPG, atau PNG</strong> dengan resolusi maksimal <span className="text-gray-500"> [masukkan ukuran pixel, misalnya 300x300 px]</span> <br /> <br /> Untuk memastikan kualitas gambar yang optimal dan pengalaman belanja yang lebih baik.</ProductDescription>

                    <div className="flex justify-center items-center space-x-6 pl-12">
                        <ImageInput>Foto Utama</ImageInput>
                        <ImageInput>Foto 2</ImageInput>
                        <ImageInput>Foto 3</ImageInput>
                        <ImageInput>Foto 4</ImageInput>
                        <ImageInput>Foto 5</ImageInput>
                    </div>
                </div>
                <br />
                <ProductInput type="text">Product Name</ProductInput>
                <ProductInput type="number">Product Price</ProductInput>
                <ProductInput type="text">Product Description</ProductInput>
                <ProductInput type="number">Product Stock</ProductInput>
                <div className="flex justify-end p-4 border-t">
                    <button type="submit" style={{backgroundColor: '#EA4C88', }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cc3b72')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EA4C88")} className="px-4 py-2 text-white transition rounded-lg"> Add </button>
                </div>
            </div>
        </form>
    )
}


export default CreateProduct;