import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]); // For storing categories
    const [selectedCategory, setSelectedCategory] = useState('All'); // Default to 'All' category

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/FakeBlog.json');
                const data = await response.json();
                setBlogs(data);

                // Extract unique categories from the blogs
                const uniqueCategories = ['All', ...new Set(data.map(blog => blog.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    // Filter blogs by selected category
    const filteredBlogs = selectedCategory === 'All'
        ? blogs
        : blogs.filter(blog => blog.category === selectedCategory);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Our Blogs</h1>

            {/* Dropdown for category selection */}
            <div className="flex justify-center mb-8">
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

            {/* Blog list */}
            <div className='flex justify-center'>
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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
