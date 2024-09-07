import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';

const Blog = ({ title, description, bannerImage, publishedDateTime, publisherName, email, photo, category, loveCount: initialLoveCount }) => {
    const [isLoved, setIsLoved] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [loveCount, setLoveCount] = useState(initialLoveCount);

    const handleLoveClick = () => {
        setIsLoved(prev => !prev);
        setLoveCount(prev => isLoved ? prev - 1 : prev + 1);
    };

    const handleBookmarkClick = () => {
        setIsBookmarked(prev => !prev);
    };

    const truncateDescription = (desc, maxLength) => {
        if (desc.length > maxLength) {
            return desc.substring(0, maxLength) + '...';
        }
        return desc;
    };

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden mb-6">
            <img className="w-full h-48 object-cover" src={bannerImage} alt={title} />
            <div className="p-4">
                <div className='h-[150px]'>
                    <h2 className="text-xl font-bold text-gray-900 truncate">{title}</h2>
                    <p className="text-gray-600 mt-2">{truncateDescription(description, 200)}</p>
                    <p className="mt-2 text-sm text-blue-500 font-semibold">Category: {category}</p>
                </div>
                <div className="mt-4 flex items-center">
                    <img className="w-10 h-10 rounded-full" src={photo} alt={publisherName} />
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{publisherName}</p>
                        <p className="text-sm text-gray-500">{email}</p>
                    </div>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                    Published on: {new Date(publishedDateTime).toLocaleDateString()}
                </div>
                <div className='flex justify-between items-center mt-6'>
                    <div className="flex items-center gap-5">
                        <button onClick={handleLoveClick} className='flex items-center'>
                            {isLoved ?
                                <AiFillHeart className="text-pink-500" size={24} /> :
                                <AiOutlineHeart className="text-gray-600" size={24} />
                            }
                            <span className={`ml-2 text-sm ${isLoved ? 'text-pink-500' : 'text-gray-700'}`}>{loveCount}</span>
                        </button>
                        <button onClick={handleBookmarkClick}>
                            {isBookmarked ?
                                <BsBookmarkFill className="text-orange-500" size={24} /> :
                                <BsBookmark className="text-gray-600" size={24} />
                            }
                        </button>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Read Blog
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blog;
