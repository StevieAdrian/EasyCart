
interface conditionProp {
    value: "Baru" | "Bekas";
    selectedCondition: string;
    onChange: (value: "Baru" | "Bekas") => void;
}

const ProductCondition = (props: conditionProp) => {
    const {value, selectedCondition, onChange} = props;

    return (
        <>
            <label className="flex items-center space-x-4 cursor-pointer mr-5">
                <input 
                    type="radio" 
                    name="condition" 
                    value={value} 
                    checked={selectedCondition === value} 
                    onChange={() => onChange(value)} 
                    className="hidden"
                />
                <span className={`w-5 h-5 flex items-center justify-center border-2 border-gray-400 rounded-full ${selectedCondition === "baru" ? "border-blue-600" : ""}`}>
                    {selectedCondition === value && <span className="w-3 h-3 rounded-full" style={{backgroundColor: '#4E53EE'}}></span>}
                </span>
                <span className="text-gray-700">{value}</span>
            </label>

        </>
    );
};

export default ProductCondition;
