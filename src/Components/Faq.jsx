import React from 'react';

const FAQ = () => {
    const questionsAndAnswers = [
        {
            question: "What is this blog about?",
            answer: "This blog covers a wide range of topics including web development, programming tips, tech news, and tutorials for developers of all levels."
        },
        {
            question: "How often is the blog updated?",
            answer: "The blog is updated weekly with fresh content, ensuring that readers always have something new and interesting to explore."
        },
        {
            question: "Can I contribute to the blog?",
            answer: "Yes, we welcome guest posts from developers and tech enthusiasts. Feel free to contact us through the contact form for more information on how to contribute."
        },
        {
            question: "Are there any newsletters I can subscribe to?",
            answer: "Absolutely! You can subscribe to our newsletter to receive the latest blog posts, tutorials, and updates directly to your inbox."
        },
        {
            question: "How can I share the blog posts?",
            answer: "You can easily share any blog post via social media buttons located at the bottom of each article. Feel free to spread the knowledge!"
        }
    ];

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* FAQ Section */}
                    <div className="flex-1">
                        {questionsAndAnswers.map((item, index) => (
                            <div key={index} className="collapse collapse-plus bg-base-200 mb-4">
                                <input type="radio" name="faq-accordion" id={`faq-${index}`} defaultChecked={index === 0} />
                                <div className="collapse-title text-xl font-medium">
                                    {item.question}
                                </div>
                                <div className="collapse-content">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Image Section */}
                    <div className="flex-1 flex justify-center items-center">
                        <img src="https://t4.ftcdn.net/jpg/01/28/17/47/360_F_128174778_0XvhB1qi70yXNOPuUFzBNT85xKaWnVde.jpg" alt="Blog" className="rounded-lg shadow-lg max-w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
