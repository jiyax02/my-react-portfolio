# Creative Full Stack Web Developer Portfolio

A stunning, modern, aesthetic, and fully responsive personal portfolio website built with **React.js**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features & Architecture

### 1. 🌌 Hero Section (Cinematic & Center-Aligned)
- **Zero Split-Screen / No Profile Picture Beside Intro**: Full focus on center-aligned typography and digital presence.
- **Oversized Bold Modern Typography**: High-impact text styling with ambient purple glow.
- **Dynamic Typing Text Animation**: Cycles smoothly between `"Creative Web Developer"` and `"Full Stack Developer"`.
- **Interactive Background**: Dynamic HTML5 canvas particles that gently react to mouse movement, layered with ambient radial gradient orbs and floating geometric shapes.
- **Action Buttons**: Glowing gradient `"Explore My Work"` and glassmorphism `"Contact Me"` buttons.
- **Animated Scroll-Down Indicator**: Subtle pulsing and bouncing pill indicator.

### 2. 🧭 Navbar
- Transparent, sticky glassmorphism navbar with blur effect.
- Active section spy highlighting navigation links on scroll.
- Smooth scrolling to all sections: **Home**, **About**, **Skills**, **Projects**, **Education**, and **Contact**.
- Fully responsive mobile drawer navigation with animated toggle.

### 3. 💡 About Me
- Features your exact statement:
  > *"I'm a passionate web developer who enjoys creating modern, responsive, and user-friendly websites. I love turning creative ideas into functional digital experiences and continuously learning new technologies."*
- 4 animated cards:
  - **Creative Thinking**
  - **Problem Solving**
  - **Responsive Design**
  - **Continuous Learning**
- Key metrics summary bar.

### 4. ⚡ Skills Section
Categorized into interactive cards and filter tabs:
- **Frontend**: HTML5, CSS3, JavaScript, React.js, Next.js, Bootstrap 5, Tailwind CSS
- **Backend**: Node.js, Express.js, REST APIs, JWT Authentication, bcrypt
- **Database**: MongoDB, Mongoose
- **Tools**: Git, GitHub, VS Code, Postman, Figma

### 5. 🚀 Projects Showcase
Displays custom cards with vector UI mockups, tech badges, and modal previews:
1. **Burger Builder**: Interactive burger customization website with live ingredient stacker.
2. **Digital Marketing Agency**: Responsive marketing agency brand experience with growth charts.
3. **Todo Application**: Task management application with priority filters and progress bar.
4. **Calculator App**: Themeable mathematical engine with live interactive calculator.
5. **Authentication System**: Enterprise auth suite with JWT and bcrypt security badges.
- **GitHub & Live Demo Buttons**: Placeholder links with user-friendly toast notifications.

### 6. 🎓 Education Timeline
- Elegant vertical timeline with glowing nodes.
- Editable placeholders for **Education (Degree)**, **Institute Name**, **Year**, **Web Development Course**, and **Certifications**.

### 7. 📬 Contact Section
- Full real-time form validation for **Name**, **Email**, and **Message**.
- Honest message transmission: launches your default email client pre-filled via `mailto:` and copies the text to clipboard as safety backup (no fake delivery claims).
- Direct channels: Email address with 1-click clipboard copy, GitHub, and LinkedIn links.
- Celebration confetti on submission.

### 8. ⚓ Footer
- Brand name, quick navigation links, social media icons, dynamic copyright year, and an animated **Back to Top** button.

---

## 🎨 Design Theme & Colors

- **Background**: `#080812` (Deep Cosmic Dark)
- **Primary Purple**: `#A855F7`
- **Accent Lavender**: `#C4B5FD`
- **Text**: `#FFFFFF`
- **Secondary Text**: `#A1A1AA`
- **Glassmorphism**: Translucent panels with subtle borders and glowing drop shadows.
- **Accessibility**: Built-in support for `prefers-reduced-motion`.

---

## 🛠️ How to Customize Your Personal Information

All personal details, skills, projects, and education are conveniently stored in a single editable file:
📂 `src/data/portfolioData.js`

You can edit your name, bio, links, project details, and timeline in this one file without touching UI code.

---

## 💻 Running Locally

```bash
# Navigate to the portfolio directory
cd portfolio

# Install dependencies (already installed)
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.

```bash
# Build for production
npm run build
```
