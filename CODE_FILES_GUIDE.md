# 📂 Complete Code Files Guide - LastTuch Project

A comprehensive reference of all modifiable code files organized by category. Use this guide to quickly find files to modify for future enhancements.

---

## 🎯 Quick Navigation

- [Page Files (Routes)](#page-files-routes)
- [Component Files](#component-files)
- [Data Files](#data-files)
- [Configuration Files](#configuration-files)
- [Style & Utility Files](#style--utility-files)
- [Hook Files](#hook-files)

---

## 📄 Page Files (Routes)

Pages are the main route components. Edit these to modify what users see on each page.

| File | Location | Purpose | What to Modify |
|------|----------|---------|----------------|
| **Home.tsx** | `src/pages/Home.tsx` | Landing page with hero section | Hero content, CTA buttons, intro text |
| **About.tsx** | `src/pages/About.tsx` | Company background & team info | Team details, company story, achievements |
| **Services.tsx** | `src/pages/Services.tsx` | Service offerings display | Service cards, descriptions, pricing |
| **AISolutions.tsx** | `src/pages/AISolutions.tsx` | AI/LLM projects showcase | Project categories, filters, descriptions |
| **FeaturedProjects.tsx** | `src/pages/FeaturedProjects.tsx` | Featured projects grid | Featured projects list, layout |
| **Contact.tsx** | `src/pages/Contact.tsx` | Contact form & info | **PHONE_TEL: +8801614408837** (line 19), **WA_LINK** (line 21), Email configuration |
| **NotFound.tsx** | `src/pages/NotFound.tsx` | 404 error page | Error message, redirect button |

### 📌 Important Contact Constants in Contact.tsx

```typescript
// Line 18-21: Contact information constants
const PHONE_TEL = "+8801614408837";          // Phone for tel: link
const PHONE_DISPLAY = "+880 1614-408837";    // Display format
const WA_LINK = "https://wa.me/8801614408837"; // WhatsApp link
```

**When to modify**: Change phone/WhatsApp number, email, or contact form settings.

---

## 🧩 Component Files

Reusable components for building UI features.

### Layout Components (`src/components/layout/`)

| File | Purpose | What to Modify |
|------|---------|----------------|
| **Navbar.tsx** | Navigation bar with logo & menu | Logo, navigation links, menu items, colors |
| **Footer.tsx** | Footer with contact & social links | Footer links, company info, **phone display** (line 120), social media links |
| **Layout.tsx** | Wrapper layout structure | Page wrapper, spacing, main container |

### Feature Components (`src/components/features/`)

| File | Purpose | What to Modify |
|------|---------|----------------|
| **ServiceCard.tsx** | Reusable card for displaying services | Card layout, styling, hover effects |

### Common Components (`src/components/common/`)

| File | Purpose | What to Modify |
|------|---------|----------------|
| **AIChatbot.tsx** | n8n chatbot iframe integration | Chatbot URL, iframe size (line ~30) |
| **PageTransition.tsx** | Fade in/out animation on page change | Animation duration (300ms), transition effect |

### UI Components (`src/components/ui/`) - 34 Pre-built shadcn Components

Form elements, buttons, cards, dialogs, etc. Usually don't need modification unless styling changes needed.

**Most commonly used**:
- `button.tsx` - Button styling & variants
- `card.tsx` - Card layout component
- `input.tsx` - Form input field
- `textarea.tsx` - Multi-line text input
- `dialog.tsx` - Modal dialog component
- `form.tsx` - Form utilities

---

## 💾 Data Files

Data files contain website content. Edit these to update text, images, projects, etc.

### `src/data/cvData.ts`

Contains CV/Resume information organized into 4 sections:

```typescript
export const experienceData: Experience[] = [...]    // Work experience
export const educationData: Education[] = [...]      // Education & degrees
export const publicationsData: Publication[] = [...] // Research papers & publications
export const certificationsData: Certification[] = [...] // Certifications & credentials
```

**What to modify**:
- Add/remove work experience entries
- Update education history
- Add new publications or research papers
- Add certifications and courses

**Example structure**:
```typescript
{
  role: "Job Title",
  company: "Company Name",
  duration: "2024 — Present",
  points: ["Responsibility 1", "Responsibility 2", ...]
}
```

### `src/data/portfolioData.ts`

Contains AI/LLM projects organized by category:

```typescript
export const projectsData: Record<string, Project[]> = {
  "LLM / RAG / GenAI": [...],        // AI projects
  "Automation": [...],               // Automation projects
  "Computer Vision": [...],          // CV projects
  "Web Apps": [...],                 // Web applications
  "Mobile Apps": [...]               // Mobile applications
}
```

**What to modify**:
- Add new projects to any category
- Update project descriptions and details
- Add/remove project categories
- Update GitHub links

**Project fields**:
```typescript
{
  title: "Project Name",
  desc: "Short description",
  details: "Long detailed description",
  tech: "Tech stack used",
  github: "GitHub repository link"
}
```

---

## ⚙️ Configuration Files

Root-level configuration files for build and development.

| File | Purpose | What to Modify |
|------|---------|----------------|
| `package.json` | Dependencies & scripts | Add/remove npm packages, scripts |
| `vite.config.ts` | Vite bundler configuration | Build settings, output paths |
| `tsconfig.json` | TypeScript configuration | Compiler options, path aliases |
| `tailwind.config.ts` | Tailwind CSS customization | Colors, fonts, theme settings |
| `postcss.config.js` | CSS post-processing | CSS plugins |
| `eslint.config.js` | Code quality rules | Linting rules, code standards |
| `components.json` | shadcn/ui config | Component aliases |
| `.env` / `.env.local` | Environment variables | API keys, service IDs (⚠️ keep secret!) |

### Important Configuration

**EmailJS Settings** (Contact.tsx lines ~40):
```typescript
emailjs.send(
  "service_vrcmi2d",      // EmailJS service ID
  "template_o8nmx8h",     // EmailJS template ID
  {...},                  // Email data
  "iYHEn3lapwBOr7lun"    // EmailJS public key
)
```

**n8n Chatbot** (AIChatbot.tsx line ~30):
```typescript
// Update iframe src to your n8n webhook
src="https://your-n8n-instance.com/webhook/chat"
```

---

## 🎨 Style & Utility Files

### CSS & Styling (`src/index.css`)

Global styles including Tailwind directives and custom animations.

**What to modify**:
- Add custom CSS animations
- Define global colors and variables
- Add utility classes
- Responsive breakpoint styles

### Utilities (`src/lib/utils.ts`)

Helper functions for common tasks:
```typescript
export function cn(...inputs: ClassValue[]) { ... }
```

**What to modify**: Add utility functions for repeated logic.

---

## 🪝 Hook Files

Custom React hooks for reusable logic.

| File | Location | Purpose | What to Modify |
|------|----------|---------|----------------|
| **use-toast.ts** | `src/hooks/use-toast.ts` | Toast notification system | Toast positioning, duration, animations |
| **use-mobile.tsx** | `src/hooks/use-mobile.tsx` | Mobile device detection | Breakpoint for mobile detection |

---

## 📍 Other Important Files

| File | Location | Purpose | What to Modify |
|------|----------|---------|----------------|
| **App.tsx** | `src/App.tsx` | Main app router | Routes configuration, route paths |
| **main.tsx** | `src/main.tsx` | App entry point | Should rarely need modification |
| **index.html** | `index.html` | HTML template | Meta tags, title, fonts |
| **vite-env.d.ts** | `src/vite-env.d.ts` | TypeScript types | Vite-specific type definitions |

---

## 🚀 Common Modification Scenarios

### Scenario 1: Add New Page

1. Create file in `src/pages/NewPage.tsx`
2. Add route to `src/App.tsx`
3. Add link to `src/components/layout/Navbar.tsx`

### Scenario 2: Update Contact Info

1. Edit `src/pages/Contact.tsx` (lines 18-21)
2. Edit `src/components/layout/Footer.tsx` (line ~120)
3. Run `npm run build`
4. Commit and push

### Scenario 3: Add New Project

1. Add to `src/data/portfolioData.ts` in appropriate category
2. Run `npm run build`
3. Deploy

### Scenario 4: Update Experience/Education

1. Edit `src/data/cvData.ts`
2. Add to `experienceData` or `educationData` arrays
3. Run `npm run build`
4. Deploy

### Scenario 5: Change Colors/Styling

1. Edit `tailwind.config.ts` for theme changes
2. OR edit `src/index.css` for component-specific styles
3. Run `npm run build`

---

## 📋 File Count Summary

| Category | Count |
|----------|-------|
| Page files | 7 |
| Component files | 37 |
| Data files | 2 |
| Hook files | 2 |
| Utility files | 1 |
| Configuration files | 8 |
| **Total source files** | **57** |

---

## 🔑 Key Files to Remember

**Most Important for Future Modifications**:

1. **src/data/portfolioData.ts** - Add/update projects
2. **src/data/cvData.ts** - Update experience and education
3. **src/pages/Contact.tsx** - Update contact info
4. **src/components/layout/Footer.tsx** - Update footer info
5. **src/App.tsx** - Add new routes
6. **tailwind.config.ts** - Change colors/theme
7. **vite.config.ts** - Build settings

---

## ✅ Before Committing Changes

```bash
# 1. Make changes to files
# 2. Test locally
npm run dev

# 3. Build for production
npm run build

# 4. Commit changes
git add -A
git commit -m "Description of changes"

# 5. Push to GitHub
git push

# 6. Wait 1-2 minutes for GitHub Pages to deploy
```

---

## 📞 Contact Information Location

**Primary Location**: `src/pages/Contact.tsx` (lines 18-21)

```typescript
const PHONE_TEL = "+8801614408837";
const PHONE_DISPLAY = "+880 1614-408837";
const WA_LINK = "https://wa.me/8801614408837";
```

**Secondary Location**: `src/components/layout/Footer.tsx` (line ~120)

**Tertiary Location**: `src/components/common/AIChatbot.tsx` (line ~98, commented)

---

## 🎓 File Organization Philosophy

The project is organized by **functional domain**:

- **Pages** (`src/pages/`) - Route components
- **Components** (`src/components/`) - Reusable UI pieces
- **Data** (`src/data/`) - Content and configuration
- **Hooks** (`src/hooks/`) - Custom React logic
- **Utils** (`src/lib/`) - Helper functions
- **Styles** (`src/index.css`) - Global styles

This structure makes it easy to find and modify features without cluttering the codebase.

---

**Last Updated**: March 24, 2026  
**Total Lines of Code**: ~5,000+  
**Main Language**: TypeScript + React  
**Build Tool**: Vite (ultra-fast)
