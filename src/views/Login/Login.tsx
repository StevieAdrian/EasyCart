import background from '../../assets/login-bg.png';

const Login = () => {
    return (
        <>
            <div className="h-screen w-screen">
                <div style={{ backgroundImage: `url(${background}`, backgroundSize: '60%' }} className="flex items-center justify-center h-screen w-screen bg-no-repeat bg-center">
                    <div className="bg-white justify-center w-full max-w-lg w-[450px] h-[500px] bg-white border-2 border-grey border-opacity-50 rounded-lg relative">
                    <div className="flex justify-center mb-5 font-bold text-white">
                        <div className='poppins-bold text-black flex flex-col items-center justify-center mt-6 text-lg'>
                            <h1>Login Now</h1>
                            <p className='text-sm mt-5'>Don't have an account? <span className="text-blue-700 cursor-pointer">Register</span></p>
                                    
                            <div className="bg-white rounded px-8 pt-6">
                                <div className="mb-4">
                                    <input className="shadow appearance-none border rounded w-full pt-2 pb-2 pl-6 pr-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email or phone number" />
                                </div>
                                <div className="mb-6">
                                    <input className="shadow appearance-none border rounded w-full pl-6 pr-6 pt-2 pb-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                                </div>
                                <div className="flex items-center justify-center mb-4">
                                    <div className="border-t border-gray-300 flex-grow mr-2"></div>
                                    <span className="text-gray-500 text-sm">Or sign up with</span>
                                    <div className="border-t border-gray-300 flex-grow ml-2"></div>
                                </div>
                            </div>

                            <button className="w-full px-3 py-4 mb-4 bg-[#AAB4C8] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-[#4E53EE] transition-colors duration-300 flex items-center justify-center" type="submit">
                                <i className="mr-2"></i> Login
                            </button>
                            <button className="w-full px-3 py-4 bg-black text-white font-semibold text-lg rounded-lg shadow-md flex items-center justify-center" type="submit">
                                <i className="mr-2"></i> Google
                            </button>

                            <div className='w-full text-right'>
                                <p className='text-sm mt-5'><span className="text-blue-700 poppins-semibold hover:underline cursor-pointer">Need Help?</span></p>
                            </div>

                        </div>
                    </div>
                    </div>
                </div>
            </div>    
        </>

    );
};

export default Login;