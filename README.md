# 🚀 Kandhal Shakil - Portfolio Website

A modern, minimal, and visually striking personal portfolio website showcasing Python development and software engineering work.

![Portfolio Preview](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-FF0080?style=for-the-badge&logo=framer)
![Status](https://img.shields.io/badge/Status-Live-00FF99?style=for-the-badge)

## ✨ Features

- 🎨 **Dark Mode Design** - Charcoal black background with neon green (#00FF99) and electric blue (#00BFFF) accents
- 🔮 **Glassmorphism Effects** - Modern glass-like UI elements with backdrop blur
- 🌟 **Smooth Animations** - Framer Motion powered fade-in, slide-up, and interactive animations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎯 **Grid-Based Layout** - Clean, symmetrical, and centered design
- ⚡ **Optimized Performance** - Fast loading and smooth scrolling

## 🎨 Design System

### Color Palette
- **Primary (Neon Green)**: `#00FF99`
- **Secondary (Electric Blue)**: `#00BFFF`
- **Background**: `#0D0D0D` (Charcoal Black)
- **Text**: `#E0E0E0` (Light Gray)
- **Accent Gradient**: `linear-gradient(90deg, #00FF99, #00BFFF)`

### Typography
- **Headings**: Poppins Bold / Outfit SemiBold
- **Body**: Inter Regular
- **Buttons**: Uppercase with letter spacing + glow shadow

## 📋 Sections

1. **Navigation Bar** - Fixed top navbar with smooth scroll navigation
2. **Hero Section** - Full-screen landing with animated text and developer illustration
3. **About Section** - Professional introduction with stats cards
4. **Skills Section** - Grid of frontend, backend, tools, and design skills
5. **Projects Section** - Featured project + grid of portfolio work
6. **Experience Section** - Vertical timeline of internships and roles
7. **UI/UX Design Section** - Horizontal carousel of design work
8. **Achievements Section** - Badge-style certification cards
9. **Contact Section** - Contact form with social media links
10. **Footer** - Minimal footer with back-to-top button

## 🛠️ Technologies Used

- **React 19.2.0** - Frontend framework
- **Framer Motion** - Animation library
- **React Icons** - Icon components
- **CSS3** - Styling with glassmorphism and gradients
- **Google Fonts** - Poppins, Outfit, Inter typography

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KandhalShakil/Portfolio_react.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.js / .css
│   │   ├── Hero.js / .css
│   │   ├── About.js / .css
│   │   ├── Skills.js / .css
│   │   ├── Projects.js / .css
│   │   ├── Experience.js / .css
│   │   ├── Design.js / .css
│   │   ├── Achievements.js / .css
│   │   ├── Contact.js / .css
│   │   └── Footer.js / .css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Customization

### Update Personal Information

1. **Name & Title**: Edit in `Hero.js`, `Navbar.js`, and `Footer.js`
2. **About Section**: Update content in `About.js`
3. **Skills**: Modify skill arrays in `Skills.js`
4. **Projects**: Add your projects in `Projects.js`
5. **Experience**: Update timeline in `Experience.js`
6. **Design Work**: Add designs in `Design.js`
7. **Contact Info**: Update email, phone in `Contact.js`
8. **Social Links**: Modify URLs in `Contact.js`

### Change Colors

Update the CSS custom properties in each component's CSS file:
- Primary color: `#00FF99`
- Secondary color: `#00BFFF`
- Background: `#0D0D0D`

## 🌐 Deployment

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://kandhalshakil.github.io/Portfolio_react",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Netlify/Vercel

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify/Vercel
3. Or connect your GitHub repository for automatic deployments

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🎨 Key Features Implemented

✅ Glassmorphism with backdrop blur  
✅ Neon glow effects on hover  
✅ Smooth scroll navigation  
✅ Parallax background effects  
✅ Interactive animations  
✅ Floating back-to-top button  
✅ Timeline with alternating cards  
✅ Image carousel with navigation  
✅ Form validation  
✅ Social media integration  
✅ Mobile-responsive design  

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Kandhal Shakil**
- Portfolio: [Your Website]
- LinkedIn: [Your LinkedIn]
- GitHub: [@KandhalShakil](https://github.com/KandhalShakil)
- Email: kandhalshakil@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/KandhalShakil/Portfolio_react/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ by Kandhal Shakil
