import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const InfoBox = () => {
    const [totalBlogs, setTotalBlogs] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);

    // Fetch data from the JSON endpoint
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://example.com/api/stats'); // Replace with your  
                const data = await response.json();

               
                setTotalBlogs(data.totalBlogs);
                setTotalUsers(data.totalUsers);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); 

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Statistics</h2>
            <div className="flex justify-around">
                {/* Total Blogs Box */}
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-1/2 mx-2">
                    <span className="text-lg font-medium">Total Blogs</span>
                    <span className="text-3xl font-bold mt-2">
                        <CountUp end={totalBlogs} duration={2} />
                    </span>
                </div>

                {/* Total Users Box */}
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-1/2 mx-2">
                    <span className="text-lg font-medium">Total Users</span>
                    <span className="text-3xl font-bold mt-2">
                        <CountUp end={totalUsers} duration={2} />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default InfoBox;
