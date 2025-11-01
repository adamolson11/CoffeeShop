# CoffeeShop
This is a basic website for a Coffee Shop Idea I have

## 🚀 Live Demo & Review Link

To review the live website, you can deploy it to Vercel (free for hobby projects):

### Quick Deploy to Vercel

1. **One-Click Deploy** (Recommended):
   - Click this button: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/adamolson11/CoffeeShop)
   - Sign in with your GitHub account
   - **Important**: Set the root directory to `coffeeshop` during setup
   - Vercel will detect the Next.js app and deploy it
   - You'll get a live URL instantly (e.g., `https://your-project.vercel.app`)

2. **Manual Deploy via Vercel CLI**:
   ```bash
   # Install Vercel CLI globally
   npm install -g vercel
   
   # Navigate to the coffeeshop directory
   cd coffeeshop
   
   # Deploy
   vercel
   ```
   Follow the prompts and you'll get a preview URL for review.

3. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set root directory to `coffeeshop`
   - Click Deploy

### Other Deployment Options

- **Netlify**: Connect your repo and set build directory to `coffeeshop`
- **GitHub Pages**: Requires static export configuration
- **Local Preview**: Run `npm run dev` in the `coffeeshop` folder

## 🛠️ Local Development

To run the website locally:

```bash
# Navigate to the project directory
cd coffeeshop

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Build

To create a production build:

```bash
cd coffeeshop
npm run build
npm start
```

## 🧪 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)
