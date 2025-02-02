
interface CreateProp {
    type: string;
    children: React.ReactNode;
}

const CreateForm = (props: CreateProp) => {
    const { type, children } = props;
    return (
        <div className="flex pb-4">
            <div className="w-full">
                <label className="block text-gray-700">{children}</label>
                <input type={type} style={{border: '1px solid black'}} className="w-full pr-24 text-gray-600 border-b-2 ml-"/>
            </div>
        </div>
    )
}

export default CreateForm;