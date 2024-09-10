import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(6);

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
        setCurrentPage(1);
    };

    useEffect(() => {
        const filtered = selectedCategory === 'All'
            ? blogs
            : blogs.filter(blog => blog.category === selectedCategory);
        setFilteredBlogs(filtered);
        setCurrentPage(1);
    }, [selectedCategory, blogs]);

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);  // Scroll to top on page change
    };

    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">My Blogs</h1>
            <div className='flex md:flex-row flex-col items-center justify-center gap-5 my-10'>
                <div className="flex justify-center">
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
                <div className="flex justify-center">
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
                    {currentBlogs.map(blog => (
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
            <div className="flex justify-center mt-8">
                <button
                    className={`px-4 py-2 mx-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`px-4 py-2 mx-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => paginate(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className={`px-4 py-2 mx-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Blogs;
