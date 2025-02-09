import ProductInput from "../components/elements/input/ProductInput";
import ProductDescription from "../components/elements/details/ProductDescription";
import FileInput from "../components/elements/input/FileInput";
import ProductCondition from "../components/elements/input/ProductCondition";
import { useState } from "react";
import Button from "../components/elements/buttons/Button";


const CreateProduct = () => {
    const [selectedCondition, setSelectedCondition] = useState<"Baru" | "Bekas">("Baru");
    
    return (
        <form action="">
            <div className="pl-20 pt-16">
                <div>
                    <h1 className="font-extrabold text-lg">Upload Produk</h1>
                    <p className="poppins-semibold text-red pt-3 text-xs">Pastikan untuk tidak menjual produk palsu/melanggar hak kekayaan intelektual agar produk Anda tetap aman dan tidak dihapus.</p>
                </div>

                <div className="flex space-x-6 pt-8">
                    <ProductDescription title="Nama Produk">Nama produk yang ingin Anda tampilkan.</ProductDescription>
                
                    <div className="flex flex-1 pl-12 ml-6 items-center mt-4">
                        <ProductInput variant={"name"} placeholder="Masukkan nama produk di sini"></ProductInput>
                    </div>
                </div>

                <div className="mt-4 flex space-x-6">
                    <ProductDescription title="Foto Produk">Unggah produk Anda dalam format <strong>JPEG, JPG, atau PNG</strong> dengan resolusi maksimal <span className="text-gray-500"> [masukkan ukuran pixel, misalnya 300x300 px]</span> <br /> <br /> Untuk memastikan kualitas gambar yang optimal dan pengalaman belanja yang lebih baik.</ProductDescription>

                    <div className="flex justify-center items-center space-x-6 pl-12">
                        <FileInput type="image">Foto Utama</FileInput>
                        <FileInput type="image">Foto 2</FileInput>
                        <FileInput type="image">Foto 3</FileInput>
                        <FileInput type="image">Foto 4</FileInput>
                        <FileInput type="image">Foto 5</FileInput>
                    </div>
                </div>
                <br />

                <div className="flex space-x-6">
                    <ProductDescription title="Video Produk">Unggah video produk dalam format MP4 dengan durasi maksimal 60 detik untuk memberikan gambaran yang jelas dan menarik bagi pelanggan.</ProductDescription>
                    
                    {/* will be added soon */}
                    <div className="flex justify-center items-center pl-12">
                        <FileInput type="video">Video</FileInput>
                    </div>
                </div>

                <div className="pt-10 flex space-x-6">
                    <ProductDescription title="Kondisi">Pilih salah satu kondisi produk: Baru atau Bekas, sesuai dengan keadaan barang yang Anda tawarkan.</ProductDescription>
                    <div className="flex justify-center items-center pl-12">
                        <ProductCondition value="Baru" selectedCondition={selectedCondition} onChange={setSelectedCondition}></ProductCondition>
                        <ProductCondition value="Bekas" selectedCondition={selectedCondition} onChange={setSelectedCondition}></ProductCondition>                
                    </div>
                </div>

                <div className="mt-14 flex">
                    <ProductDescription title="Deskripsi Produk">Berikan deskripsi yang jelas dan detail tentang produk Anda, mencakup fitur utama, manfaat, ukuran, bahan, dan informasi penting lainnya untuk membantu pelanggan membuat keputusan yang tepat.</ProductDescription>

                    <div className="pl-12 ml-6 flex flex-col flex-1">
                        <div className="mt-4">
                            <ProductInput variant={"description"} placeholder="Masukkan deskripsi produk di sini..."></ProductInput>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex">
                    <ProductDescription title="Kategori Produk">Masukkan kategori produk Anda agar memudahkan pembeli menemukan barang sesuai kebutuhan.</ProductDescription>

                    <div className="pl-12 ml-6 flex flex-col justify-center mt-8">
                        <ProductInput variant={"category"} placeholder="Masukkan Berat Produk"></ProductInput>
                    </div>
                </div>

                <div className="mt-12 flex">
                    <ProductDescription title="Varian">Pilih varian sesuai dengan pilihan ukuran, warna atau jenis lainnya yang tersedia.</ProductDescription>
                    <div className="pl-12 ml-6 flex items-center mt-2">
                        <Button color={"bg-electricBlue text-white"}>+ Aktifkan Variasi</Button>
                    </div>
                </div> 

                <br/>
                <h1 className="font-bold mt-24 text-lg">Harga</h1>

                <div className="mt-12 flex">
                    <ProductDescription  title="Minimal Pembelian">Jumlah produk yang harus dibeli sebagai syarat pemesanan.</ProductDescription>
                    
                    <div className="flex flex-1 pl-12 ml-6 items-center mt-2">
                        <ProductInput variant={"minimumPurchase"} placeholder=""></ProductInput>
                    </div>
                </div> 

                <div className="mt-10 flex">
                    <ProductDescription title="Harga Satuan Produk">Biaya untuk satu unit produk ini.</ProductDescription>
                    
                    <div className="flex flex-1 pl-12 ml-6 items-center mt-2">
                        <ProductInput variant={"unitPrice"} placeholder="Masukkan Harga Produk"></ProductInput>
                    </div>
                </div> 


                <br />
                <h1 className="font-bold mt-24 text-lg">Berat & Pengiriman</h1>
                <div className="mt-8 flex">
                    <ProductDescription title="Berat Produk">Biaya untuk satu unit produk ini.</ProductDescription>
                
                    <div className="flex pl-12 ml-6 items-center mt-2">
                        <ProductInput variant={"weightShipping"} placeholder="Masukkan Berat Produk"></ProductInput>
                    </div>
                </div>
                
                <div className="mt-6 flex">
                    <ProductDescription title="Ukuran">Biaya untuk satu unit produk ini.</ProductDescription>
                
                    <div className="flex pl-12 ml-6 items-center mt-2">
                        <ProductInput variant={"size"} placeholder="Panjang"></ProductInput>
                        <ProductInput variant={"size"} placeholder="Lebar"></ProductInput>
                        <ProductInput variant={"size"} placeholder="Tinggi"></ProductInput>
                    </div>
                </div>
            
                
                <div className="mt-48 mr-12">
                    <div style={{borderColor: 'D9D9D9'}} className="flex justify-end p-5 pr-0 border-t-2 w-full">
                        <div className="mt-4 flex">
                            <div className="mr-10">
                                <Button color={"bg-white text-black border border-black"}>Batal</Button>
                            </div>
                            <Button color={"bg-electricBlue text-white"}>Simpan</Button>
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