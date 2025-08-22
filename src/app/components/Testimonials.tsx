"use client";

import { useState, useEffect } from 'react';
import { Testimonial } from '@/types/testimonials';

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emil Mohamad",
      role: "Product Analyst",
      company: "Tech Company",
      content: "Bekerja dengan Ibnu sangat menyenangkan. Dia memberikan solusi kreatif untuk masalah kompleks dan selalu memenuhi deadline. Kualitas kodenya sangat baik dan dokumentasinya lengkap.",
      avatar: "/images/ems.jpg",
      rating: 4
    },
    {
      id: 2,
      name: "Irfan Azra",
      role: "Project Manager",
      company: "Caskargo",
      content: "Ibnu adalah frontend developer yang sangat talented. Dia mampu mengubah desain kompleks menjadi kode yang clean dan responsive. Sangat recommended untuk proyek apa pun!",
      avatar: "/images/azra.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Raihan Rifat",
      role: "Notaris & PPAT",
      company: "Raihan Rifat and Partners",
      content: "Kolaborasi dengan Ibnu sangat smooth. Dia memahami kebutuhan user dan mampu menerjemahkan desain menjadi pengalaman yang exceptional. Communication skills-nya juga excellent!",
      avatar: "/images/ripat.jpg",
      rating: 4
    },
    {
      id: 4,
      name: "Dhafir Asyraf",
      role: "Project Manager",
      company: "TechCorp",
      content: "Ibnu menyelesaikan proyek tepat waktu dengan kualitas yang sangat bagus. Dia sangat professional dan mudah untuk mengerti apa yang client maksud.",
      avatar: "/images/dapir.jpg",
      rating: 4
    },
    {
      id: 5,
      name: "Arya Hardianto",
      role: "Project Manager",
      company: "CreativeLabs",
      content: "Technical skills Ibnu sangat impressive. Dia cepat belajar teknologi baru dan selalu memberikan solusi yang optimal dan tepat untuk project baru.",
      avatar: "/images/bewok.jpg",
      rating: 5
    },
    {
      id: 6,
      name: "Javier",
      role: "CEO",
      company: "InnovateStartup",
      content: "Dedication dan passion Ibnu terhadap web development sangat terlihat. Dia tidak hanya coding tapi juga memahami apa yang client butuhkan.",
      avatar: "/images/vier.jpg",
      rating: 5
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Responsive slides to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev + slidesToShow >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - slidesToShow) : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Get visible testimonials
  const visibleTestimonials = testimonials.slice(currentSlide, currentSlide + slidesToShow);

  // If we're at the end and don't have enough testimonials to fill the view,
  // add some from the beginning
  const displayTestimonials = 
    visibleTestimonials.length < slidesToShow 
      ? [...visibleTestimonials, ...testimonials.slice(0, slidesToShow - visibleTestimonials.length)]
      : visibleTestimonials;

  return (
    <section id="testimonials" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Clients <span className="text-purple-400">Say</span>
        </h2>
        
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Berikut adalah testimoni dari klien dan kolega yang pernah bekerja dengan saya.
        </p>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-slate-800/80 hover:bg-purple-600 transition-all duration-300 shadow-lg"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-slate-800/80 hover:bg-purple-600 transition-all duration-300 shadow-lg"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-500">
              {displayTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-slate-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Testimonial Content */}
                  <p className="text-gray-300 italic text-center mb-6 line-clamp-4">
                    &quot;{testimonial.content}&quot;
                  </p>
                  
                  {/* Testimonial Author */}
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-slate-700 mr-4 overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-purple-400 text-xs">
                        {testimonial.role}
                        {testimonial.company && ` • ${testimonial.company}`}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * slidesToShow)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentSlide / slidesToShow) === index 
                  ? 'bg-purple-500 w-8' 
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Testimonial Counter */}
        <div className="text-center mt-4 text-gray-400 text-sm">
          Showing {currentSlide + 1}-{Math.min(currentSlide + slidesToShow, testimonials.length)} of {testimonials.length} testimonials
        </div>
      </div>
    </section>
  );
};

export default Testimonials;