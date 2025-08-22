// // src/app/store/useStore.ts
// import { create } from 'zustand';
// import { Experience, Testimonial, ContactForm } from '@/types/store';

// interface StoreState {
//   experiences: Experience[];
//   testimonials: Testimonial[];
//   contactForm: ContactForm;
//   setContactForm: (field: keyof ContactForm, value: string) => void;
//   submitContactForm: () => Promise<{ success: boolean; message: string }>;
// }

// export const useStore = create<StoreState>((set, get) => ({
//   experiences: [
//     {
//       id: 1,
//       position: "Frontend Developer",
//       company: "Tech Company Inc.",
//       duration: "2020 - Present",
//       description: [
//         "Developed responsive web applications using React and Next.js",
//         "Collaborated with UX designers to implement user-friendly interfaces",
//         "Optimized performance resulting in 40% faster load times"
//       ]
//     },
//     {
//       id: 2,
//       position: "Web Developer",
//       company: "Digital Agency LLC",
//       duration: "2018 - 2020",
//       description: [
//         "Built and maintained client websites using modern JavaScript frameworks",
//         "Implemented SEO best practices increasing organic traffic by 60%",
//         "Mentored junior developers and conducted code reviews"
//       ]
//     }
//   ],
  
//   testimonials: [
//     {
//       id: 1,
//       name: "Jane Smith",
//       role: "Product Manager",
//       company: "Tech Solutions",
//       content: "Bekerja dengan sangat profesional dan memberikan hasil yang melebihi ekspektasi. Proyek kami selesai tepat waktu dengan kualitas kode yang sangat baik.",
//       avatar: "/avatars/avatar1.jpg"
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       role: "CTO",
//       company: "StartUp Innovate",
//       content: "Skill teknis yang luar biasa dan kemampuan komunikasi yang baik. Sangat mudah berkolaborasi dan memberikan solusi kreatif untuk masalah kompleks.",
//       avatar: "/avatars/avatar2.jpg"
//     }
//   ],
  
//   contactForm: {
//     name: "",
//     email: "",
//     message: ""
//   },
  
//   setContactForm: (field, value) => 
//     set(state => ({ 
//       contactForm: { ...state.contactForm, [field]: value } 
//     })),
  
//   submitContactForm: async () => {
//     const { contactForm } = get();
    
//     try {
//       // Simulasi API call
//       console.log('Form submitted:', contactForm);
      
//       // Reset form
//       set({ contactForm: { name: "", email: "", message: "" } });
      
//       return { success: true, message: "Pesan berhasil dikirim! Saya akan membalasnya segera." };
//     } catch (error) {
//       return { success: false, message: "Terjadi kesalahan. Silakan coba lagi." };
//     }
//   }
// }));