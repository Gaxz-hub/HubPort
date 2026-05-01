# HubPort - Developer & Designer Portfolio

A modern, minimalist portfolio website built with React. Perfect for showcasing your development and design work.

## 🎨 Features

- ✨ **Dark Theme** - Professional dark aesthetic with blue accents
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Elegant fade-ins and hover effects
- 🎯 **Minimalist Design** - Clean, focused layouts
- 🧭 **Sticky Navigation** - Easy navigation with blur effect
- 📋 **Multiple Sections** - Hero, About, Skills, Projects, and Footer

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Gaxz-hub/HubPort.git
cd HubPort
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Skills.js & Skills.css
│   ├── Projects.js & Projects.css
│   └── Footer.js & Footer.css
├── App.js & App.css
└── index.js & index.css
```

## 🎨 Customization

### Update Your Information

**Hero Section** (`src/components/Hero.js`):
```javascript
<h1 className="hero-title">Hi, I'm <span>Your Name</span></h1>
<p className="hero-description">Your description here</p>
```

**About Section** (`src/components/About.js`):
```javascript
<p>Your bio and background information...</p>
```

**Skills** (`src/components/Skills.js`):
```javascript
const skillCategories = [
  {
    title: 'Your Category',
    skills: ['Skill 1', 'Skill 2', ...]
  }
]
```

**Projects** (`src/components/Projects.js`):
```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tags: ['Tag1', 'Tag2'],
    link: 'project-link'
  }
]
```

### Update Contact Email

Replace `contact@gaxz-hub.dev` in:
- `Header.js`
- `Hero.js`

### Update Social Links

Update social media URLs in `Footer.js`:
```javascript
<a href="https://your-github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
```

## 🎨 Color Scheme

The portfolio uses a professional dark theme:
- **Primary Color**: `#64b5f6` (Blue accent)
- **Background**: `#1a1a2e` (Dark)
- **Secondary Background**: `#0f3460` (Darker blue-ish)
- **Text**: `#e0e0e0` (Light gray)

### Change Colors

Modify colors in CSS files:
```css
/* Change primary color globally */
/* Replace #64b5f6 with your color */
```

## 🚀 Build & Deploy

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

### Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-deploy on every push

### Deploy to GitHub Pages

```bash
npm run build
# Then use GitHub Pages settings to deploy from the 'build' folder
```

### Deploy to Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

## 📝 Available Scripts

- `npm start` - Run development server
- `npm build` - Create production build
- `npm test` - Run tests
- `npm eject` - Eject from create-react-app (one-way operation)

## 🔧 Technologies Used

- **React** 18.2.0
- **CSS3** - For styling and animations
- **JavaScript ES6+**
- **HTML5**

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📧 Contact

Have questions? Feel free to reach out:
- Email: contact@gaxz-hub.dev
- GitHub: [Gaxz-hub](https://github.com/Gaxz-hub)

---

**Made with ❤️ by Gaxz-hub**
