// FIX: Import React to resolve "Cannot find namespace 'React'" error.
import React from 'react';
import { Project, ProjectCategory, Skill, Feedback } from './types';
import { SiAdobephotoshop, SiFigma, SiCanva, SiAdobexd, SiAdobeillustrator, SiAdobeindesign } from 'react-icons/si';
import { FaPaintBrush, FaCode, FaMobileAlt, FaBullhorn } from 'react-icons/fa';

export const COLORS = {
  black: '#0a0a0a',
  scarlet: '#FF2400',
  white: '#F5F5F5',
  lightGreen: '#39FF14',
  sandal: '#D4B996',
};

export const SKILLS_AND_TOOLS: Skill[] = [
  { name: 'Photoshop', icon: SiAdobephotoshop, level: 80 },
  { name: 'Figma', icon: SiFigma, level: 90 },
  { name: 'Canva', icon: SiCanva, level: 98 },
  { name: 'Illustrator', icon: SiAdobeillustrator, level: 65 },
  { name: 'XD', icon: SiAdobexd, level: 80 },
  { name: 'InDesign', icon: SiAdobeindesign, level: 60 },
];

export const OTHER_SKILLS: { name: string, icon: React.ComponentType<{className?: string}> }[] = [
    { name: 'Logo Creation', icon: FaPaintBrush },
    { name: 'Poster Design', icon: FaPaintBrush },
    { name: 'Web & Mobile App Design', icon: FaCode },
    { name: 'Brochure & Visiting Card Design', icon: FaPaintBrush },
    { name: 'Portfolio & Wedding Card Design', icon: FaPaintBrush },
    { name: 'Certificate Designing', icon: FaPaintBrush },
]

export const PROJECTS: Project[] = [
  { id: 1, title: 'UI design for Website', category: ProjectCategory.WEB, imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5rvFN3jiDIGAPvY1M_CRbpGBkC0-O-04oPHRmUtiUSmmyS-zbs38BX3MxPgfDg5aKqc7BGu4woVH1fq4p0G6laeJc61MKS2gKLtrGd-erTxSAJvAMlZADBYZ4SfLUmjfI3bshqvrojnFc8L7rXPMbGCS9Jo27oIHl3fMOmHj-sg7Ua9fq7Zkwt-aJ1Gpf/s1354/Group%20164.png', description: 'A modern and abstract Web design for startup.' },
  { id: 2, title: 'Music Demo Class', category: ProjectCategory.POSTERS, imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvS513uTNrva5eTLa2L7Dcpcb5OQQEMjvmN_EYi-o61UPUzrCxeoF6w5d1cuWY4WLPos0t414O_V_8qU24qdam7OiMLigGhRyQsI0OFkp3rHFuo6EMXaISW8f4YcpcZupi6SiDCCjAM-1GFDYHRFI0KtlB0C6_gQQlaIaHQAXoaw261CeVJvLH8Sa0GlKM/s1080/Group%2051.png', description: 'Vibrant and energetic poster for a carnatic music class.' },
  { id: 3, title: 'Resteaurent Platform', category: ProjectCategory.WEB, imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2WZlKxvFCgDb7G-u01A2SccNKF5B0_EzImChZhFzJkscgO122F4foJGoTp43sd-Qya3xP3KtBx8hN8LVBfZqQ-Sbt-jN2Sk3BKeoiCF6iEznHc-cwuITcPnQ7xzxdOTBE7Jgmc3dWt3UL3xlS1qAqlsMMWkzaDwGXLqqt2oX8UVMzD2fkHK0s3x38o9VV/s1354/Group%20167.png', description: 'Clean and user-friendly web design for an online resteaurent.' },
  { id: 4, title: 'Startup Poster', category: ProjectCategory.POSTERS, imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsKHSRjZziPR_OhSsYvvAAr8yczfgqsjOzcxG1dcUYloSDSlFKNGy6J6tuCFWEZG3PjuRFMexNZ94IZOZVZ4kaeWMt_WO8yTT73rV26xdiS8CHjamR6A-zB3q7YVpFAwPFhsaUfViJBkm-CjVEyGQfrukk3FwWnAyYguwtdh4Qb64wOe8CWHP_wUmHAVvo/s1350/Group%20162.png', description: 'Poster for Startup company.' },
  { id: 5, title: 'Corporate Brochure', category: ProjectCategory.BROCHURES, imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiROQYb4iC3habaIVAwl24i7R1wdzhDMWUlzajhvFB5jtjRmMbUh42K3BXxDHwOUBFoKqkSfq1f16XqqVF_ND1JDn-uEqUBBbjiYjnieQ78-ECqqjKf2icq_JUJ-3VFeF8vcF2bM21pOakyl2oEjs70W3mWkMTNZgdDzUZV7uDwQ6Dpm94VR6uOPMur-Uyn/s842/Front.png', description: 'Professional and informative brochure for a corporate client.' },
  { id: 6, title: 'Minimalist Business Card', category: ProjectCategory.BROCHURES, imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr3leDGVa6-iZ2hl9WAHAJ5X4UQYxrVNGK55Qo1bViKAKZbfG-cTRzp0ss3KaPpLIy-4AKVG72AxvpzXIEghT8Kz4QfAeN031BiYNare-naWhUkuch0ZN_RaLDl0RLuywqDHXrONhFgBtz7crUoYuoUJO4hcvmzW3NhhuHtoQRDXP4aPLaNfUBb-0UKjsM/s1184/page%204%20(2).png', description: 'Elegant and minimalist brochure Design.' },
  { id: 7, title: 'Logo', category: ProjectCategory.LOGOS, imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsVWOFcRfOD9QgubsxxIETYnXLc6yjrZYNUxuI1xthdV79rXOVRFiMiXY5gs6oIDZDq1HRzkKcDHMHh26pEQqsJhcWNJU9393NW6pVYCUsWOFpcChfz241TmVQGTHKyZIwPEkpBi9uoy1DgXqXV55CdvRDgimKcJ8g-8jxrmglfoJbFJY4iBx6EW447Vsk/s1152/7531e264-9fcc-43a7-b224-f15d1ce4ae78.png', description: 'A visually Elegant Logo.' },
  { id: 8, title: 'Elegant Wedding Invite', category: ProjectCategory.WEDDING, imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhth0bIojSyBY7T82kgEmFytgQnb792W-QnPc4913hiNJFmSl_bYnNa08ldvbjqkwMXmmaJ2TT6cbdKzt60tJFkIlYoJi27pj8uaQAGs_l6d2ghYi0kYQpYauvHY65jnSZxWcZFBBTDAL6e2KynZ5RBgTjMYKHQM493wpKrrhTPmZOxtbJgQdah9YMjJRwC/s1600/WhatsApp%20Image%202025-11-07%20at%2011.59.45%20AM.jpeg', description: 'A beautiful and romantic wedding invitation card design.' },
  { id: 9, title: 'Poster for Music class', category: ProjectCategory.POSTERS, imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7UxVQj76EXFSsxqCQoHe5M_r26zSPxwCpiwSd8nf3iodlGfk8rChdU4c6417keCRumbb3G416ULmZWmNLXcbX0RYtdFS4mV4vOOnPWw8QHvfX6nqKvyJfTOOEpAiMBw1IFlsUxcG2HBYNwzIsupUa6bfUBdCtydkfMcIcYucdQVkqtTYa3v82Zr6NHqZ2/s1286/Group%2058.png', description: 'Music Class Poster for Addmission.' },
  { id: 10, title: 'Tech Startup Logo', category: ProjectCategory.LOGOS, imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHpDWueMFEWxWPh_09Sx4J8DwElCE-eckPdbkQKVP4YZbK1TxYLtqYlkKJUUNof0tKZPxiFRimuiLCH0gKBnFF9E70lB7dAvBzZ9X7hXX4InSnsyvNfBBqZcP1jhUPNDi2NysnX0-lTbAig8I4IfMsyOH3qAYgdO050WIimKQ8jSXaj6_YmuCUkDfcJqgD/s1248/logo.png', description: 'A dynamic logo for a new tech company.' },
  { id: 11, title: 'Music Exhibition Poster', category: ProjectCategory.POSTERS, imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkbq5wPMXMISWPhQeoHzXfMGXsahA6FeVmAjCB8CaawXKfqphC0UAoNJ0X4gdqvPwMxgQyKz4ZkpoCGJDNOfyRmlZpWFF997eAHOt1mJVUYR-E4rZR7hkwxvxfa7M37ijH_F3wS8KfDJW_ydhi3g43R4SjrLPseInGxI04g9TpWe281HBpXU_knoz5Ii_b/s2229/Group%20169.png', description: 'Creative poster for a Carnatic Music exhibition.' },
  { id: 12, title: 'Collage Sympo Website', category: ProjectCategory.WEB, imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqgcQnGEaBeeuM2sBf6M0Os4g2Jy1OLq_iHU04WZUbAO7vilG5KLgDKRDPvvPWl6iEIjqbgLEmJpO6WjG7jg41TlA1SJEYBcEDuopOoRhMPz-2lIJ3-dGJeBWwAjtwhrDSrkVYlmCyQ3oe54i26blhlyrFGsTVdINbCeYftX_lxpNWnOpN8Z36D-caDluh/s2229/Group%20171%20(1).png', description: 'Engaging website design for a Collage Sympo.' },
  { id: 13, title: 'Certificate', category: ProjectCategory.CERTIFICATES, imageUrl: 'https://marketplace.canva.com/EAF5ZVffmZw/1/0/1600w/canva-modern-vintage-certificate-of-achievement-yMEujoaa8Hs.jpg', description: 'A Certificate.' },
  { id: 14, title: 'Visiting Card For CRM Manager', category: ProjectCategory.CARDS, imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKR5Yac03l_9xluB_gukE1GyY6XTKvLHSYIhxYGgptC0DFI-jHOugFtNm6o0HV4zGg3h-IwM_WIlER5GND9K5ek5pzkn5t0is0zGd8dnsq9ZEQ1rJqZ6OLzgfFk7_GSw5_lIIpw4A6OQmwCQ7JIRYhL_R2yvdG9thBT8WGhJ9WnvoehT-7R8q4olyqQFGn/s3780/3.png', description: 'Visiting Card For NST company CRM Manager.' },
  { id: 15, title: 'Visiting Card for Astrologer', category: ProjectCategory.CARDS, imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjY6v7dCfrZpIKSqlRnWZg59AUk8T8sOalbX6q-6yD4rSDWg5MoWU2ee8vSFEUruR_S8aCI9lS7AT49nja25QZr74FTZ0AAeZPh_xW7JWOZ22v_GxKW4dwTDTV60Ajg6a6VVktNkM_v3CsEiZGhRmFkzBMcQxYwdexUzNhMmPlI4ptbvEOsz3WBzcQPTOmw/s3780/MEGANATH%20ASTRO%20(2).png', description: 'Visiting Card For Astrologer.' },
];

export const FEEDBACKS: Feedback[] = [
  { id: 1, clientInitials: 'Siva', feedback: 'Selvam transformed our vision into a stunning reality. The creativity and professionalism were outstanding!', rating: 5 },
  { id: 2, clientInitials: 'Lokesh', feedback: 'Incredibly talented designer. The attention to detail was impeccable. Highly recommend!', rating: 5 },
  { id: 3, clientInitials: 'M.B. Shanmugavel', feedback: 'The final designs exceeded all our expectations. A true pleasure to work with.', rating: 5 },
  { id: 4, clientInitials: 'J.D. Senthil', feedback: 'Fast, responsive, and exceptionally creative. Selva delivered a masterpiece for our brand.', rating: 5 },
  { id: 5, clientInitials: 'Anushree', feedback: 'A game-changer for our marketing materials. The designs are both beautiful and effective.', rating: 5 },
  { id: 6, clientInitials: 'CIT', feedback: 'The web design is modern, clean, and user-friendly. Our engagement has skyrocketed.', rating: 5 },
];
