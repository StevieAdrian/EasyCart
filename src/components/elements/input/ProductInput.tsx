type LabelVariant = "name" | "description" | "category" |"minimumPurchase" | "unitPrice" | "weightShipping" | "size"

type CreateProp = {
    placeholder: string;
    variant: LabelVariant;
}

const CreateForm = (props: CreateProp) => {
    const { placeholder, variant } = props;
    
    return (
        <div className="w-5/6">
            <Label variant={variant} placeholder={placeholder}></Label>
        </div>
    )
}

const Label = (props: CreateProp) => {
    const { variant, placeholder } = props;

    if (variant === "name"){
        return (
            <>
                <div className="border border-gray-300 flex flex-col rounded-lg cursor-pointer">
                    <input className="w-full h-4 p-4 text-xs rounded-lg focus:ring focus:ring-blue-300 resize-none" placeholder={placeholder} />
                </div>
                <p className="text-xs text-red mt-3 poppins-semibold w-full break-words max-w-fit">*Wajib untuk memasukkan nama produk</p>

            </>
        )
    } else if (variant === "description") {
        return (
            <>
                <div className="border border-gray-300 flex flex-col rounded-lg cursor-pointer">
                    <textarea className="w-full h-48 p-4 rounded-lg focus:ring focus:ring-blue-300 resize-none" placeholder={placeholder} />
                </div>
                <p className="text-xs text-red mt-3 poppins-semibold w-full break-words max-w-fit">*Pastikan untuk tidak mencantumkan informasi pribadi dalam deskripsi produk guna melindungi data pribadi Anda dan menjaga keamanan transaksi.</p>
            </>
        )
    } else if (variant === "category"){
        return (
            <>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300 mb-6">
                    <option>Elektronik</option>
                    <option>Makanan & Minuman</option>
                </select>
            </>
        )
    } else if (variant === "minimumPurchase"){
        return (
            <>
                <div className="border border-gray-300 flex flex-col rounded-lg cursor-pointer">
                    <input className="w-full h-4 p-4 rounded-lg focus:ring focus:ring-blue-300 resize-none" placeholder={placeholder} />
                </div>
            </>
        )
    } else if (variant === "unitPrice"){
        return (
            <>
                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                    <span className="bg-gray-200 px-4 py-2 text poppins-semibold">Rp</span>
                    <input type="text" placeholder={placeholder} className="px-4 py-2 w-full focus:outline-none" />
                </div>
            </>
        )
    } else if (variant === "weightShipping") {
        return (
            <>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300 mb-6">
                    <option>Kilogram (KG)</option>
                    <option>Gram (G)</option>
                </select>

                <input
                    type="number"
                    placeholder={placeholder}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:ring focus:ring-blue-300
                    appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
            </>
        )
    } else if (variant === "size") {
        return (
            <>
                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden w-48 mr-8">
                    <input type="number" placeholder={placeholder} className="px-4 py-2 focus:outline-none w-full appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
                    <span className="bg-gray-200 px-4 py-2 text poppins-semibold ">CM</span>
                </div>
            </>
        )
    }
}


export default CreateForm;