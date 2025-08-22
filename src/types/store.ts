// src/types/store.ts
export interface AppState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

// Tambahkan interface yang diperlukan
export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

// export interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   content: string;
//   avatar: string;
// }

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}