
interface conditionProp {
    value: "Baru" | "Bekas";
    isSelected: boolean;
    onChange: () => void;
}

const ProductCondition = (props: conditionProp) => {
    const {value, isSelected, onChange} = props;

    return (
        <>
            <label className="flex items-center space-x-4 cursor-pointer mr-5">
                <input type="radio" name="condition" value={value} checked={isSelected} onChange={onChange} className="hidden" />
                <span className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${ isSelected ? "border-blue-600" : "border-gray-400" }`} >
                    { isSelected && (<span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#4E53EE' }}></span> )}
                </span>
                <span className="text-gray-700">{value}</span>
            </label>


        </>
    );
};

export default ProductCondition;
