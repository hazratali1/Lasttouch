# LastTuch - AI & IT Solutions Portfolio

A modern, responsive portfolio website showcasing AI solutions, IT services, and featured projects. Built with React, TypeScript, and Tailwind CSS.

**Live Site**: https://hazratali1.github.io/Lasttouch/

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technologies](#technologies)
- [Project Structure & File Documentation](#project-structure--file-documentation)
- [Installation & Setup](#installation--setup)
- [Development](#development)
- [Deployment to GitHub Pages](#deployment-to-github-pages)
- [Contact Information](#contact-information)

---

## 🎯 Project Overview

LastTuch is a professional portfolio website featuring:
- **AI Solutions**: Showcase of LLM, RAG, and GenAI projects
- **Services**: IT consulting, AI development, and automation solutions
- **Featured Projects**: Highlight of key portfolio pieces
- **Contact Page**: Email form with WhatsApp integration
- **Smooth Animations**: Page transitions and interactive elements
- **Responsive Design**: Mobile-friendly interface

---

## 🛠 Technologies

- **Vite 5.4.19**: Ultra-fast build tool and dev server
- **React 18.3**: UI library for component-based development
- **TypeScript**: Type-safe JavaScript for reliable code
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built React components (34 components)
- **React Router**: Client-side routing with MemoryRouter
- **EmailJS**: Contact form email service
- **Lucide React**: Icon library
- **vite-plugin-singlefile**: Single-file bundle optimization

---

## 📁 Project Structure & File Documentation

### **Root Configuration Files**

| File | Purpose |
|------|---------|
| `package.json` | Project dependencies, scripts, and metadata |
| `vite.config.ts` | Vite build configuration, bundles to single `docs/index.html` |
| `tsconfig.json` | TypeScript compiler configuration |
| `tailwind.config.ts` | Tailwind CSS customization and theme settings |
| `postcss.config.js` | PostCSS plugins for CSS processing |
| `eslint.config.js` | ESLint rules for code quality |
| `components.json` | shadcn/ui configuration |

### **Source Code - Pages (`src/pages/`)**

| File | Purpose |
|------|---------|
| `Home.tsx` | Landing page with hero section and quick intro |
| `About.tsx` | Company background and team information |
| `Services.tsx` | Service offerings (AI, IT, Automation) |
| `AISolutions.tsx` | Showcase of AI and LLM projects with filtering |
| `FeaturedProjects.tsx` | Highlighted portfolio projects |
| `Contact.tsx` | Contact form + WhatsApp/Phone/Email display (PHONE_TEL: +8801614408837) |
| `NotFound.tsx` | 404 error page for invalid routes |

### **Source Code - Components (`src/components/`)**

#### **Layout Components** (`src/components/layout/`)

| File | Purpose |
|------|---------|
| `Navbar.tsx` | Navigation bar with logo and menu links |
| `Footer.tsx` | Footer with contact info, social links, and company details |
| `Layout.tsx` | Wrapper component for page structure |

#### **Feature Components** (`src/components/features/`)

| File | Purpose |
|------|---------|
| `ServiceCard.tsx` | Reusable card for displaying services |

#### **Common Components** (`src/components/common/`)

| File | Purpose |
|------|---------|
| `AIChatbot.tsx` | n8n-powered chatbot iframe integration |
| `PageTransition.tsx` | Fade in/out animation when routes change (300ms transition) |

#### **UI Components** (`src/components/ui/`)

34 reusable shadcn/ui components including:
- `button.tsx`, `input.tsx`, `textarea.tsx` - Form elements
- `card.tsx`, `accordion.tsx`, `tabs.tsx` - Layout components
- `dialog.tsx`, `drawer.tsx`, `dropdown-menu.tsx` - Modal/Menu components
- `alert.tsx`, `toast.tsx` - Notification components
- And 20+ more utility components

### **Data Files (`src/data/`)**

| File | Purpose |
|------|---------|
| `cvData.ts` | Experience, education, publications, and certifications data |
| `portfolioData.ts` | AI/LLM projects organized by category with descriptions |

### **Hooks & Utilities (`src/hooks/`, `src/lib/`)**

| File | Purpose |
|------|---------|
| `use-toast.ts` | Toast notification hook (Sonner library) |
| `use-mobile.tsx` | Mobile device detection hook |
| `utils.ts` | Class name utility functions (clsx) |

### **Main App Files**

| File | Purpose |
|------|---------|
| `src/main.tsx` | React app entry point, renders to #root |
| `src/App.tsx` | Router configuration (7 routes: Home, About, Services, AISolutions, FeaturedProjects, Contact, NotFound) |
| `src/index.css` | Global styles with Tailwind directives and animations |
| `index.html` | HTML template with charset, viewport, and app mount point |

### **Build Output (`docs/`)**

| File | Purpose |
|------|---------|
| `docs/index.html` | **Bundled single-file output** (2,450 KB) - deployed to GitHub Pages |
| `docs/404.html` | SPA routing handler (redirects to index.html for unknown routes) |
| `docs/favicon.png` | Site icon |
| `docs/og-image.png` | Open Graph image for social sharing |

### **Public Assets (`public/`)**

| File | Purpose |
|------|---------|
| `robots.txt` | SEO directive for search engines |
| Images in `public/assets/` | Founder photos, logos, and branding |

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ (download from [nodejs.org](https://nodejs.org/))
- npm 7+ (comes with Node.js)
- Git installed

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/hazratali1/Lasttouch.git
cd Lasttouch

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# Visit http://localhost:5173 in your browser
```

---

## 💻 Development

### Available Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production (outputs to docs/ folder)
npm run build

# Preview production build locally
npm run preview

# Lint code with ESLint
npm run lint
```

### Key Development Points

- **Routing**: Uses `MemoryRouter` from React Router (supports file:// protocol)
- **Styling**: Tailwind CSS with custom color scheme (cyan accent: `#14e0ff`)
- **Forms**: Contact form uses EmailJS service integration
- **Chat**: n8n automation platform for AI chatbot
- **Animations**: Page transitions in `PageTransition.tsx` component
- **Contact Info**: 
  - Phone: +880 1614-408837
  - WhatsApp: +8801614408837
  - Email: contact.lasttuch@gmail.com

### Modifying Code

**To update contact information**:
- Edit `src/pages/Contact.tsx` - constants at top of file (PHONE_TEL, PHONE_DISPLAY, WA_LINK)
- Edit `src/components/layout/Footer.tsx` - phone display in contact section
- **Rebuild**: `npm run build` (required to update deployed version)

**To add new pages**:
1. Create file in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/layout/Navbar.tsx`
4. Rebuild and deploy

**To add new services/projects**:
- Update `src/data/portfolioData.ts` for projects
- Update `src/data/cvData.ts` for experience/skills

---

## 🚀 Deployment to GitHub Pages

### Initial Setup (One-time)

```bash
# Create GitHub repository (already done at hazratali1/Lasttouch)
# Clone to local machine
git clone https://github.com/hazratali1/Lasttouch.git
cd Lasttouch

# Install dependencies
npm install
```

### Deploy Process

```bash
# 1. Make your code changes locally
# 2. Build the project (outputs to docs/ folder)
npm run build

# 3. Commit changes
git add -A
git commit -m "Description of changes"

# 4. Push to GitHub
git push origin main
```

### GitHub Pages Configuration

✅ **Already configured!** The site automatically deploys from the `docs/` folder.

**Current settings**:
- Repository: https://github.com/hazratali1/Lasttouch
- Branch: `main`
- Folder: `docs/`
- Live URL: https://hazratali1.github.io/Lasttouch/

### How SPA Routing Works

The `docs/404.html` file redirects all 404 errors back to `index.html`, allowing React Router to handle navigation. This enables:
- Direct URL access: `/contact`, `/services`, `/about`, etc.
- Browser back/forward buttons work correctly
- Deep linking to specific pages

### Troubleshooting Deployment

| Issue | Solution |
|-------|----------|
| **Old content still showing** | Hard refresh browser (Ctrl+Shift+R) to clear cache |
| **GitHub Pages not updating** | Wait 1-2 minutes for GitHub to rebuild, then hard refresh |
| **Routes not working** | Check `docs/404.html` exists and is properly configured |
| **Environment variables not loaded** | Define in `vite.config.ts` (not Git for secrets) |

---

## 📞 Contact Information

- **Phone**: +880 1614-408837
- **WhatsApp**: +8801614408837
- **Email**: contact.lasttuch@gmail.com
- **Office**: Dhaka, Bangladesh
- **Facebook**: [LastTuch Page](https://www.facebook.com/share/17dQ61nTkJ/?mibextid=wwXIfr)

---

## 🔄 Workflow Summary

```
Local Development
    ↓
npm run dev (test changes)
    ↓
npm run build (create production bundle in docs/)
    ↓
git add -A & git commit & git push
    ↓
GitHub Pages automatically deploys
    ↓
Live at https://hazratali1.github.io/Lasttouch/
```

---

## 📝 Notes for Future Modifications

- Always run `npm run build` before committing changes
- Test locally with `npm run dev` before building
- The `docs/index.html` is auto-generated - never edit directly (changes will be overwritten)
- Update source files in `src/` instead
- Contact form emails go through EmailJS service (check service ID in Contact.tsx)
- Chatbot uses n8n webhooks (check n8n.io for automation flows)

---

## 📄 License

This project is open source and available under the MIT License.
