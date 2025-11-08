# Personal Portfolio - Arjun T Anil

A modern, responsive portfolio website built with Next.js 13, featuring smooth animations, dark mode, and AI/ML project showcases.

## 🚀 Features

- ⚡ Built with Next.js 13 (App Router)
- 🎨 Tailwind CSS for styling
- 🌙 Dark mode with localStorage persistence
- ✨ Framer Motion animations with blur effects
- 📱 Fully responsive design
- 🎯 Butter smooth scrolling with Lenis
- 🔥 Optimized performance with Next.js Image optimization



## 🛠️ Tech Stack

- **Framework**: Next.js 13.4.19
- **React**: 18.2.0
- **Styling**: Tailwind CSS 3.3.3
- **Animations**: Framer Motion 12.23.24
- **Smooth Scroll**: Lenis
- **Fonts**: Google Fonts (Outfit, Ovo, Bebas Neue)

## 📦 Installation & Getting Started

```bash
# Clone the repository
git clone https://github.com/arjuntanil/Personal-Portfolio.git

# Navigate to project directory
cd Personal-Portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Deployment on Vercel (FREE - High Performance)

### ✨ Method 1: Deploy via Vercel Dashboard (EASIEST - Recommended)

**Step 1: Push Your Code to GitHub**
```bash
# Check git status
git status

# Add all files
git add .

# Commit your changes
git commit -m "Ready for deployment"

# Push to GitHub
git push origin main
```

**Step 2: Deploy on Vercel**
1. Go to [https://vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. After login, click "Add New..." → "Project"
4. Find and select `Personal-Portfolio` from your GitHub repos
5. Vercel will auto-detect Next.js settings ✅
6. Click "Deploy" button
7. Wait 2-3 minutes for deployment to complete 🚀
8. You'll get a live URL like: `https://personal-portfolio-xxxx.vercel.app`

**Step 3: Custom Domain (Optional)**
- In Vercel Dashboard → Your Project → Settings → Domains
- Add your custom domain (e.g., arjuntanil.com)
- Follow DNS instructions provided by Vercel

### 🔄 Automatic Continuous Deployment

Once connected to Vercel, any changes you push to GitHub will **automatically deploy**:

```bash
# Make your changes in code
# Then push to GitHub:
git add .
git commit -m "Updated project details"
git push origin main

# Vercel automatically:
# ✅ Detects the push
# ✅ Builds your site
# ✅ Deploys to production
# ✅ Updates your live site (2-3 minutes)
```

**Benefits:**
- 🚀 **Push to GitHub = Live in 3 minutes**
- 🔍 **Pull Requests** create preview deployments
- ⚡ **Zero configuration** needed
- 💰 **100% FREE** for personal projects
- 🌍 **Global CDN** for fast loading worldwide
- 📊 **Analytics** built-in

### ⚡ Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel (opens browser)
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## 🎯 Performance Features

This portfolio is optimized for **maximum performance**:

- ✅ **Next.js Image Optimization** - Automatic image compression & lazy loading
- ✅ **Code Splitting** - Only loads what's needed
- ✅ **SWC Minification** - Faster than Webpack
- ✅ **Asset Caching** - Images cached for 1 year
- ✅ **Compression Enabled** - Smaller file sizes
- ✅ **AVIF/WebP Support** - Modern image formats
- ✅ **Global CDN** - Fast loading from anywhere
- ✅ **Vercel Edge Network** - Sub-100ms response times

**Expected Performance:**
- 🟢 Google PageSpeed: 95-100/100
- 🟢 First Contentful Paint: < 1s
- 🟢 Time to Interactive: < 2s
- 🟢 Largest Contentful Paint: < 2.5s

## 📝 Project Structure

```
portfolio/
├── app/
│   ├── components/          # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── Services.jsx
│   │   ├── Work.jsx
│   │   ├── TextPressure.jsx # Scroll-based text animation
│   │   ├── TrueFocus.jsx    # Hover blur effect
│   │   └── SmoothScroll.jsx # Lenis integration
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   ├── page.js              # Home page
│   ├── error.jsx            # Error boundary
│   ├── loading.jsx          # Loading state
│   └── not-found.jsx        # 404 page
├── assets/
│   ├── assets.js            # Project data & images
│   └── [images]             # All project images
├── public/
│   ├── ARJUN-T-ANIL.pdf    # Resume/CV
│   └── [static files]       # Icons, images
├── next.config.mjs          # Next.js config (optimized)
├── tailwind.config.js       # Tailwind config
├── vercel.json              # Vercel deployment config
└── package.json             # Dependencies
```

## 🎨 Customization Guide

### Update Your Projects
Edit `assets/assets.js` → Modify the `workData` array:
```javascript
{
  title: 'Your Project',
  description: 'Description here',
  bgImage: assets.your_image,
  date: 'Jan 2025',
  technologies: ['React', 'Node.js'],
  github: 'https://github.com/yourusername/project'
}
```

### Change Colors/Theme
- Edit `tailwind.config.js` for color palette
- Edit `app/globals.css` for dark mode colors

### Update Your Info
- **Email**: `app/components/Contact.jsx`
- **Projects**: `assets/assets.js`
- **Resume**: Replace `public/ARJUN-T-ANIL.pdf`

## 🐛 Troubleshooting

**Issue: Images not loading after deployment**
- Solution: Make sure all images are in `public/` or `assets/` folder

**Issue: Build fails on Vercel**
- Solution: Run `npm run build` locally to test
- Check for TypeScript/ESLint errors

**Issue: Dark mode not persisting**
- Solution: Ensure localStorage is working (client-side only)

## 📧 Contact

- **Email**: arjuntanil@hotmail.com
- **LinkedIn**: [linkedin.com/in/arjuntanil](https://linkedin.com/in/arjuntanil)
- **GitHub**: [github.com/arjuntanil](https://github.com/arjuntanil)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Technologies Used

- [Next.js](https://nextjs.org) - React Framework
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lenis](https://lenis.studiofreight.com/) - Smooth Scroll
- [Vercel](https://vercel.com) - Deployment Platform

---

**Built with ❤️ by Arjun T Anil**

🌟 If you like this project, give it a star on GitHub!
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
