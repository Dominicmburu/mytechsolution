import React, { useState, useEffect } from 'react';

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "The team delivered our website redesign on time and on budget. Their attention to detail and focus on user experience transformed our online presence completely. We've seen a 40% increase in leads since launch.",
            author: "Sarah Johnson",
            position: "Marketing Director",
            company: "TechVision Inc.",
            avatar: "https://i.pinimg.com/736x/78/7f/ce/787fcece237d38ed04fec991cd3d062b.jpg",
            rating: 5
        },
        {
            quote: "Working with this IT team was a game-changer for our business. Their cloud migration solution saved us thousands in infrastructure costs while improving our system performance. They're responsive, knowledgeable, and truly care about our success.",
            author: "Michael Chen",
            position: "CTO",
            company: "Innovate Solutions",
            avatar: "https://i.pinimg.com/736x/78/7f/ce/787fcece237d38ed04fec991cd3d062b.jpg",
            rating: 5
        },
        {
            quote: "Their digital marketing strategies doubled our conversion rates in just three months. The team provided clear metrics and regular updates throughout the process. What sets them apart is their ability to explain complex concepts in simple terms.",
            author: "Rebecca Torres",
            position: "E-commerce Manager",
            company: "StyleHouse",
            avatar: "https://i.pinimg.com/736x/78/7f/ce/787fcece237d38ed04fec991cd3d062b.jpg",
            rating: 4
        },
        {
            quote: "As a startup founder, I needed an IT partner who could understand our vision and work within our budget constraints. This team exceeded all expectations, delivering a robust platform that has scaled seamlessly with our rapid growth.",
            author: "David Okonkwo",
            position: "Founder & CEO",
            company: "LaunchPad",
            avatar: "https://i.pinimg.com/736x/78/7f/ce/787fcece237d38ed04fec991cd3d062b.jpg",
            rating: 5
        }
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="py-5 bg-dark text-white testimonials-section position-relative">
            {/* Background Elements */}
            <div className="testimonial-bg-element testimonial-bg-1"></div>
            <div className="testimonial-bg-element testimonial-bg-2"></div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <h6 className="text-purple fw-semibold mb-3">TESTIMONIALS</h6>
                        <h2 className="display-6 fw-bold mb-4">What Our Clients <span className="text-purple">Say About Us</span></h2>
                        <p className="mb-4">
                            Our commitment to excellence has earned us the trust and appreciation of our clients. Here's what they have to say about their experience working with us.
                        </p>
                        <div className="testimonial-controls d-flex">
                            <button
                                className="testimonial-control prev me-3"
                                onClick={handlePrev}
                                aria-label="Previous testimonial"
                            >
                                <i className="fas fa-arrow-left"></i>
                            </button>
                            <button
                                className="testimonial-control next"
                                onClick={handleNext}
                                aria-label="Next testimonial"
                            >
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="testimonial-carousel position-relative">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}
                                >
                                    <div className="bg-light text-dark testimonial-card">
                                        <div className="p-4">
                                            <div className="d-flex mb-3">
                                                {[...Array(5)].map((_, i) => (
                                                    <span
                                                        key={i}
                                                        className={i < testimonial.rating ? 'text-warning' : 'text-muted'}
                                                    >
                                                        <i className="fas fa-star"></i>
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="mb-4 testimonial-quote">
                                                "{testimonial.quote}"
                                            </p>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.author}
                                                    className="rounded-circle me-3"
                                                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                                />
                                                <div>
                                                    <h6 className="mb-0 fw-bold">{testimonial.author}</h6>
                                                    <p className="mb-0 small text-muted">
                                                        {testimonial.position}, {testimonial.company}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="testimonial-indicators">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`testimonial-indicator ${index === currentIndex ? 'active' : ''}`}
                                        onClick={() => handleIndicatorClick(index)}
                                        aria-label={`Testimonial ${index + 1}`}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default TestimonialsCarousel;