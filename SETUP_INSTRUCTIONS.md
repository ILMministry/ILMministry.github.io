# 🚀 Divine Life Calendar - Local Setup Instructions

## Quick Start (5 minutes)

### Prerequisites
1. **Install Node.js**: Download from [nodejs.org](https://nodejs.org/) (version 18 or higher)
2. **Verify installation**: Open terminal/command prompt and run:
   ```bash
   node --version
   npm --version
   ```

### Setup Steps

1. **Download the Project Files**
   - Download all the project files from the workspace
   - Extract to a folder like `divine-life-calendar`

2. **Open Terminal/Command Prompt**
   - Navigate to the project folder:
   ```bash
   cd divine-life-calendar
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start the Application**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   - The app will start on `http://localhost:5173`
   - Open this URL in your browser

### Alternative: Use the Built Version

If you want to use the already-built version:

1. **Install a simple HTTP server**:
   ```bash
   npm install -g serve
   ```

2. **Serve the built files**:
   ```bash
   serve -s dist -l 3000
   ```

3. **Open** `http://localhost:3000` in your browser

## 🌟 What You'll See

- **Homepage**: Budget dashboard with spiritual-themed design
- **Calendar**: Full-featured calendar with event management
- **Navigation**: Switch between budget and calendar views
- **Responsive**: Works on desktop and mobile

## 🎨 Key Features Working

✅ **Budget Management**: Create monthly budgets with smart allocation
✅ **Event Creation**: Add, edit, delete calendar events  
✅ **Category Filtering**: Filter by Business, Spiritual, Financial, Health, Family, Personal
✅ **Multi-View Calendar**: Month and Day views (Week view coming soon)
✅ **User Switching**: Toggle between Dr. Kofie and Dr. Lachele
✅ **Beautiful UI**: Divine gold theme with glass card effects

## 🆘 Troubleshooting

**Port already in use?**
- Try: `npm run dev -- --port 3001`

**Dependencies not installing?**
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

**Still having issues?**
- Make sure Node.js version is 18+
- Try running as administrator/sudo

## 📱 Mobile Access

The app is fully responsive! Access it from your phone by:
1. Find your computer's IP address
2. Use `http://YOUR_IP_ADDRESS:5173` on your phone
3. Make sure both devices are on the same network

---

**🎉 Enjoy your Divine Life Calendar!**