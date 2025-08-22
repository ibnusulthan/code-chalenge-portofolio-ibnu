"use client";

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
      name: "Irfan Aulia Azra",
      role: "Project Manager",
      company: "Caskargo",
      content: "Ibnu adalah frontend developer yang sangat talented. Dia mampu mengubah desain kompleks menjadi kode yang clean dan responsive. Sangat recommended untuk proyek apa pun!",
      avatar: "/images/azra.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Dhafir Asyraf",
      role: "Owner",
      company: "ReedDifuser Company",
      content: "Kolaborasi dengan Ibnu sangat smooth. Dia memahami kebutuhan user dan mampu menerjemahkan desain menjadi pengalaman yang exceptional. Communication skills-nya juga excellent!",
      avatar: "/images/testimonials/emily.jpg",
      rating: 4
    }
  ];

  // Function untuk render bintang rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Clients <span className="text-purple-400">Say</span>
        </h2>
        
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Here are testimonials from clients and colleagues I&apos;ve had the pleasure to work with.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Testimonial Content */}
              <p className="text-gray-300 italic mb-6">
                &quot;{testimonial.content}&quot;
              </p>
              
              {/* Testimonial Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-slate-700 mr-4 overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-purple-400 text-sm">
                    {testimonial.role}
                    {testimonial.company && ` • ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;