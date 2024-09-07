import React from 'react';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                {/* Email and Password Login */}
                <form className="mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <div className="flex items-center justify-center my-4">
                    <span className="text-gray-500">or login with</span>
                </div>

                {/* Google Login */}
                <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 mb-4">
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.35 11.1h-9.1v2.8h5.6c-.7 2.1-2.7 3.6-5.6 3.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.4 0 2.6.5 3.6 1.3l2.1-2.1c-1.5-1.4-3.5-2.3-5.7-2.3C6.9 2.7 3 6.6 3 11.5s3.9 8.8 8.8 8.8c5 0 8.8-4.1 8.8-8.8 0-.6-.1-1.2-.2-1.7z" />
                    </svg>
                    Google Login
                </button>

                {/* Facebook Login */}
                <button className="w-full flex items-center justify-center bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-300">
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.6 3.4 8.5 7.9 9.5v-6.7H8.3V12H10v-1.8c0-1.7 1-2.7 2.5-2.7.7 0 1.4.1 2 .2v2.3h-1.1c-1 0-1.2.5-1.2 1.2V12h2.4l-.3 2.8h-2.1v6.7c4.4-1 7.8-4.9 7.8-9.5C22 6.5 17.5 2 12 2z" />
                    </svg>
                    Facebook Login
                </button>
            </div>
        </div>
    );
};

export default Login;
