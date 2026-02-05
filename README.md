# Kandhal Shakil - Portfolio Website

A modern, immersive Python developer portfolio built with React, featuring interactive 3D elements, smooth animations, and a professional dark theme.

[![Live Demo](https://img.shields.io/badge/Demo-Live-7c5cff?style=for-the-badge)](https://kandhalshakil.github.io/Portfolio_react)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.182.0-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)

## Features

- **Deep Dark Theme** - Professional dark mode with purple (#7c5cff) and cyan (#4cc9f0) accents
- **3D Background** - Animated Three.js starfield creating immersive depth
- **Framer Motion Animations** - Smooth fade-ins, slide-ups, and interactive hover effects
- **Fully Responsive** - Optimized for all devices from mobile to 4K displays
- **Optimized Performance** - Single WebGL context, lazy loading, efficient rendering
- **Contact Form** - EmailJS integration with OTP verification system
- **Interactive Skills Grid** - Click-to-explore tech stack showcase
- **Certification Gallery** - 6 verified certifications with live links

## Tech Stack

### Frontend
- React 19.2.0
- Three.js & @react-three/fiber
- Framer Motion
- CSS3 with custom properties

### Backend/Services
- EmailJS for contact form
- GitHub Pages hosting

### Tools
- CRACO for webpack configuration
- ESLint for code quality
- React Testing Library

## Sections

1. **Hero** - Landing with Python developer tagline, stats (2+ projects, 6 certifications)
2. **About** - Professional introduction with highlight cards
3. **Skills** - Interactive grid with:
   - Backend: Python, Java, Django, FastAPI
   - Data & Algorithms: Data Structures, Pandas, NumPy, SQL
   - Frontend & Tools: HTML, JavaScript, Postman, Git
   - Database: MongoDB
4. **Education** - Academic timeline
5. **Achievements** - 6 Coursera certifications
6. **Projects** - Featured work:
   - Personal Portfolio (React + Three.js)
   - Invoice System (Django + Python)
   - SKY Event (HTML/CSS/JS)
7. **Contact** - Form with OTP verification + social links
8. **Footer** - Copyright and social media

## Getting Started

### Prerequisites
- Node.js >= 14.0.0
- npm >= 6.14.0

### Installation

1. Clone the repository
```bash
git clone https://github.com/KandhalShakil/Portfolio_react.git
cd Portfolio_react
```

2. Install dependencies
```bash
npm install
```

3. Create .env file
```env
REACT_APP_GEMINI_API_KEY=your_api_key
GENERATE_SOURCEMAP=false
```

4. Start development server
```bash
npm start
```

Open [http://localhost:3000/Portfolio_react](http://localhost:3000/Portfolio_react)

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Project Structure

```
Portfolio_react/
├── public/
│   ├── index.html
│   ├── profile.jpg
│   └── images/certificates/
├── src/
│   ├── components/
│   │   ├── 3D/
│   │   │   ├── Scene3D.jsx      # Background starfield
│   │   │   ├── Hero3D.jsx       # Hero section
│   │   │   ├── Skills3D.jsx     # Skills grid
│   │   │   └── Projects3D.jsx   # Projects
│   │   ├── Navbar.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Education.jsx/css
│   │   ├── Achievements.jsx/css
│   │   ├── Contact.jsx/css
│   │   └── Footer.jsx/css
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── craco.config.js
├── package.json
└── README.md
```

## Key Features

### WebGL Context Management
- Single Canvas strategy to prevent context loss
- Event listeners for context recovery
- Performance optimizations (reduced stars, disabled antialiasing)

### Animation Strategy
- Framer Motion for all 2D UI animations
- Viewport detection with `whileInView`
- Stagger effects for lists and grids

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop), 1440px (large)
- Touch-friendly navigation

## Configuration

### EmailJS Setup
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Configure email service
3. Create template
4. Add credentials to Contact.jsx

### GitHub Pages
1. Set `homepage` in package.json
2. Install: `npm install gh-pages --save-dev`
3. Run: `npm run deploy`

## Troubleshooting

### Images Not Loading
- Ensure images are in `public/` folder
- Use `process.env.PUBLIC_URL` prefix for paths

### WebGL Context Lost
- Only one Canvas instance is used (Scene3D.jsx)
- Context recovery handlers are in place

### Build Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

## Performance

- Lighthouse Score: 95+ Performance
- First Contentful Paint: < 1.5s
- Bundle Size: ~250KB gzipped

## Contributing

Contributions welcome! Please:
1. Fork the project
2. Create feature branch (`git checkout -b feature/Feature`)
3. Commit changes (`git commit -m 'Add Feature'`)
4. Push to branch (`git push origin feature/Feature`)
5. Open Pull Request

## License

MIT License - see LICENSE file for details

## Author

**Kandhal Shakil**
- Portfolio: [kandhal.tech](https://www.kandhal.tech)
- GitHub: [@KandhalShakil](https://github.com/KandhalShakil)
- LinkedIn: [Kandhal Shakil](https://www.linkedin.com/in/kandhal-shakil/)

## Acknowledgments

- React Three Fiber - 3D in React
- Framer Motion - Animation library
- Three.js - WebGL framework
- EmailJS - Contact form service

---

Made with care by Kandhal Shakil | Star this repo if you like it!