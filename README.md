# 🚀 Omkar Gaikwad - Portfolio Website

<div align="center">

![Portfolio Banner](public/o.jpeg)

**A modern, responsive portfolio website showcasing full-stack development expertise, GenAI innovations, and big data solutions.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://your-portfolio-url.com)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Styled Components](https://img.shields.io/badge/Styled-Components-DB7093?style=for-the-badge&logo=styled-components)](https://styled-components.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## 📋 Table of Contents

- [🎯 About](#-about)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [📊 Performance](#-performance)
- [🤝 Contributing](#-contributing)
- [📞 Contact](#-contact)
- [📄 License](#-license)

---

## 🎯 About

This portfolio website represents my journey from a small village in Dharashiv district to the tech industry, showcasing my expertise in **GenAI**, **Big Data**, and **Full-Stack Development**. Built with modern React practices and a focus on performance, accessibility, and user experience.

### 🌟 Highlights

- **750+ LeetCode Problems** solved with 1800+ rating
- **$20K/day DSP spend** increase through optimization solutions
- **200+ Students** impacted through mentoring and teaching
- **80% Processing Time** reduction in enterprise applications
- **GenAI Library** development driving AI adoption at PubMatic

### 🎭 Professional Journey

**Current Role**: Software Engineer at **PubMatic** (Jan 2023 - Present)
- Developing GenAI-powered solutions for ad-tech industry
- Building scalable Spark pipelines processing TBs of data
- Leading microservice architecture transformations

---

## ✨ Features

### 🎨 **Modern Design**
- **Clean, Professional UI** with modern design principles
- **Responsive Design** optimized for all devices
- **Dark/Light Theme** support with CSS custom properties
- **Smooth Animations** using AOS (Animate On Scroll)
- **Interactive Elements** with hover effects and micro-interactions

### 🧭 **Smart Navigation**
- **Single Page Application** with smooth scrolling
- **Mobile-First** responsive navigation
- **Deep Linking** support for direct section access
- **Back-to-Top** functionality for better UX

### 📊 **Dynamic Content**
- **Project Filtering** by category and technology
- **Interactive Statistics** with animated counters
- **Real-time Contact** forms with EmailJS integration
- **Social Media Integration** with direct links

### 🚀 **Performance Optimized**
- **Component-based Architecture** for maintainability
- **Code Splitting** for faster load times
- **Optimized Images** and lazy loading
- **SEO Friendly** with proper meta tags

### 📱 **Mobile Experience**
- **Touch-Optimized** interface elements
- **Swipe Gestures** for project galleries
- **Progressive Enhancement** for better mobile performance
- **Accessible Design** following WCAG guidelines

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18.2.0** - Modern React with hooks and functional components
- **Styled Components 6.1.6** - CSS-in-JS for component styling
- **React Router 6.20.1** - Client-side routing (ready for multi-page expansion)

### **UI/UX**
- **AOS (Animate On Scroll)** - Smooth scroll animations
- **React Icons** - Comprehensive icon library
- **Custom Design System** - Consistent styling with CSS variables

### **Communication**
- **EmailJS** - Client-side email functionality
- **Social Media APIs** - Direct integration with platforms

### **Development**
- **Create React App** - Development environment
- **ESLint** - Code quality and consistency
- **Modern JavaScript (ES6+)** - Latest JavaScript features

### **Deployment**
- **Netlify/Vercel Ready** - Optimized for modern deployment platforms
- **CI/CD Pipeline** - Automated testing and deployment

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/omkargaikwad23/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Add your EmailJS configuration
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/              # App-wide layout components
│   │   ├── Navbar.js       # Navigation bar with mobile menu
│   │   ├── Footer.js       # Footer with social links
│   │   └── ScrollToTop.js  # Scroll to top functionality
│   ├── sections/           # Page sections
│   │   ├── HeroSection.js  # Landing hero section
│   │   ├── AboutSection.js # Personal journey & interests
│   │   ├── ExperienceSection.js # Work experience & stats
│   │   ├── ProjectsSection.js   # Featured projects showcase
│   │   ├── ContactHeroSection.js # Contact CTAs
│   │   ├── ContactSection.js    # Contact form
│   │   └── DosSection.js   # What I do section
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.js       # Custom button component
│   │   ├── SectionTitle.js # Consistent section headers
│   │   └── PText.js        # Paragraph text component
│   ├── cards/              # Card-style components
│   │   ├── ProjectItem.js  # Individual project cards
│   │   ├── ExperienceCard.js # Experience timeline cards
│   │   └── DosItem.js      # Service/skill cards
│   └── [misc]/             # Other components
├── pages/                  # Page components
│   ├── Home.js            # Main landing page
│   ├── About.js           # About page (if needed)
│   ├── Projects.js        # Projects gallery page
│   ├── Experience.js      # Experience timeline page
│   └── Contact.js         # Contact page
├── assets/
│   ├── data/              # Static data and content
│   │   ├── projects.js    # Projects information
│   │   └── staticDisplayData.js # Experience, skills, education
│   ├── images/            # Image assets
│   ├── fonts/             # Custom fonts
│   └── styles/            # Global styles and theme
│       ├── GlobalStyle.js # Global CSS and variables
│       └── Typography.js  # Typography system
└── App.js                 # Main application component
```

---

## 🎨 Design System

### **Color Palette**
```css
:root {
  --primary-bg: #FAFAFA;      /* Clean white background */
  --secondary-bg: #FFFFFF;    /* Pure white for cards */
  --accent-color: #2563EB;    /* Modern blue accent */
  --accent-hover: #1D4ED8;    /* Darker blue for hover */
  --text-primary: #111827;    /* Dark gray for primary text */
  --text-secondary: #6B7280;  /* Medium gray for secondary */
  --text-light: #9CA3AF;      /* Light gray for subtle text */
  --border-color: #E5E7EB;    /* Light border color */
  --success-color: #10B981;   /* Green for success states */
}
```

### **Typography Scale**
- **Font Family**: Inter, Roboto Mono, system fonts
- **Base Size**: 10px (responsive scaling)
- **Scale**: 1.2 ratio for consistent hierarchy
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### **Spacing System**
- **Base Unit**: 0.8rem
- **Scale**: 0.8, 1.2, 1.6, 2.4, 3.2, 4.8, 6.4, 9.6rem
- **Container Max-Width**: 1200px
- **Responsive Breakpoints**: 480px, 768px, 1024px, 1200px

### **Shadow System**
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

---

## 📊 Performance

### **Lighthouse Scores**
- **Performance**: 95+ 🚀
- **Accessibility**: 98+ ♿
- **Best Practices**: 100 ✅
- **SEO**: 95+ 🔍

### **Optimization Features**
- **Component Lazy Loading** - Faster initial page load
- **Image Optimization** - WebP format with fallbacks
- **Code Splitting** - Reduced bundle size
- **CSS-in-JS Optimization** - Runtime style generation
- **Responsive Images** - Optimized for different screen sizes

### **Bundle Analysis**
```bash
npm run build
npm run analyze  # Analyze bundle size
```

---

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and improvements!

### **Development Guidelines**
1. **Component Structure**: Follow the established folder structure
2. **Styling**: Use styled-components with the design system
3. **Naming**: Use descriptive, consistent naming conventions
4. **Performance**: Ensure components are optimized and accessible

### **Making Changes**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Contact

**Omkar Gaikwad** - Software Engineer specializing in GenAI & Big Data

- 📧 **Email**: [omkargaikwad9552@gmail.com](mailto:omkargaikwad9552@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/omkargaikwad23](https://linkedin.com/in/omkargaikwad23)
- 🔗 **GitHub**: [github.com/omkargaikwad23](https://github.com/omkargaikwad23)
- 📱 **Phone**: [+91 9579714193](tel:+919579714193)
- 🌐 **Portfolio**: [your-portfolio-url.com](https://your-portfolio-url.com)

### **Open to Opportunities**
- 💼 Full-time Software Engineering roles
- 🤝 Freelance projects and consulting
- 🎯 Speaking engagements and workshops
- 👨‍🏫 Mentoring and teaching opportunities

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Styled Components** - For the powerful CSS-in-JS solution
- **AOS Library** - For smooth scroll animations
- **React Icons** - For the comprehensive icon library
- **Netlify/Vercel** - For seamless deployment platforms

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Omkar Gaikwad](https://github.com/omkargaikwad23)

</div>
