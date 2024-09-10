import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div className="p-8 gap-10 min-h-screen flex flex-col justify-center items-center">
            {/* Owner Section */}
            <motion.div
                className="flex flex-col md:flex-row items-center justify-center mb-8 space-y-4 md:space-y-0 md:space-x-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Owner Image */}
                <motion.img
                    src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/276135413_5106827936072419_768008308068333860_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeE4lEpMbsxCyaEpjBjcJKe3harX-riA5keFqtf6uIDmRwBi_HX7Oz1obffMz4tdfU0lWrI_5q0nTmE752QAW6fY&_nc_ohc=M6rwrweq_AQQ7kNvgGBwft5&_nc_ht=scontent.fdac24-2.fna&oh=00_AYBqyR1DfAvHmSVkjZ69GzEPmCqE2xI6Ntnj-9Zpc43Flg&oe=66E0D5C2"
                    alt="Owner Rafique"
                    className="w-48 h-48 rounded-full object-cover shadow-lg"
                    whileHover={{ scale: 1.05 }}
                />
                {/* Owner Description */}
                <motion.div
                    className="text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">The Bloger</h2>
                    <p className="text-gray-600">
                        Rafique is an English teacher at Public College and the sole blogger of the site. He brings his expertise in education and communication to manage the blog and ensure its success.
                    </p>
                </motion.div>
            </motion.div>

            {/* Developer Section */}
            <motion.div
                className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Developer Description */}
                <motion.div
                    className="text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">The Developer</h2>
                    <p className="text-gray-600 mb-4">
                        Tonmoy Ahamed is the web developer who crafted this project using modern technologies like React.js, ensuring a sleek and responsive design.
                    </p>

                    {/* Contact Information */}
                    <div className="flex flex-col gap-2 text-gray-600">
                        <p><strong>Email:</strong> tonmoyahamed2009@gmail.com</p>
                        <p><strong>Contact No:</strong> 01731158705</p>
                        <p><strong>GitHub:</strong> <a href="https://github.com/KMTonmoy" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/KMTonmoy</a></p>
                        <p><strong>Portfolio:</strong> <a href="https://tonmoyahamed.netlify.app" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">https://tonmoyahamed.netlify.app</a></p>
                        <p><strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=100088205996277" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">https://www.facebook.com/profile.php?id=100088205996277</a></p>
                        <p><strong>X (Twitter):</strong> <a href="https://x.com/TasrikAhamed25" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">https://x.com/TasrikAhamed25</a></p>
                    </div>
                </motion.div>

                {/* Developer Image */}
                <motion.img
                    src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-1/456023244_474883152128547_5547684825753085905_n.jpg?stp=c64.55.175.174a_dst-jpg_p240x240&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHCcPUgTb8Ed_Z8_5VEvmyS_HZLw0Mfrjf8dkvDQx-uNxiF1zfykUM0pgw4kc-G6XnlXy0owpeAmx7AXHasyv2e&_nc_ohc=bOxxCrO_sLIQ7kNvgFs9UzS&_nc_ht=scontent.fdac24-5.fna&_nc_gid=Ah6xVEvx_HTN_2Bvm16n_PA&oh=00_AYA_0SVYpKnuNpKdKrRHhHxeuFDeW24enDaRl2hqCbubDg&oe=66E0C561"
                    alt="Developer Tonmoy Ahamed"
                    className="w-48 h-48 rounded-full object-cover shadow-lg"
                    whileHover={{ scale: 1.05 }}
                />
            </motion.div>
        </div>
    );
};

export default AboutPage;
