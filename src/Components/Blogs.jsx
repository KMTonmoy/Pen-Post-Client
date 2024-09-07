import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/FakeBlog.json');
                const data = await response.json();
                setBlogs(data);
                const uniqueCategories = ['All', ...new Set(data.map(blog => blog.category))];
                setCategories(uniqueCategories);
                setFilteredBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    const handleSearch = () => {
        const keywordFilteredBlogs = blogs.filter(blog =>
            blog.title.toLowerCase().includes(searchKeyword.toLowerCase())
        );
        setFilteredBlogs(keywordFilteredBlogs);
    };

    useEffect(() => {
        const filtered = selectedCategory === 'All'
            ? blogs
            : blogs.filter(blog => blog.category === selectedCategory);
        setFilteredBlogs(filtered);
    }, [selectedCategory, blogs]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Our Blogs</h1>
            <div className='flex items-center justify-center gap-5 my-10'>

                <div className="flex justify-center  ">
                    <select
                        className="px-4 py-2 border rounded-md"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex justify-center ">
                    <input
                        type="text"
                        className="px-4 py-2 border rounded-md mr-2"
                        placeholder="Search by title"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredBlogs.map(blog => (
                        <Blog
                            key={blog.title}
                            title={blog.title}
                            description={blog.description}
                            bannerImage={blog.bannerImage}
                            publishedDateTime={blog.publishedDateTime}
                            publisherName={blog.publisherName}
                            email={blog.email}
                            photo={blog.photo}
                            category={blog.category}
                            loveCount={blog.loved}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
