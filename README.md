# Divine Life Calendar - Oracle Life App

A comprehensive spiritual and business life management application built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### Calendar Management
- **Multi-view Calendar**: Month, Week, and Day views
- **Event Categories**: Business, Spiritual, Financial, Health, Family, Personal
- **Smart Filtering**: Filter events by category
- **Event Management**: Create, edit, and delete events with rich details
- **User Switching**: Support for multiple users (Dr. Kofie & Dr. Lachele)

### Budget Dashboard
- **Monthly Budget Planning**: Create and manage monthly budgets
- **Category Allocation**: Smart allocation across life areas
- **Progress Tracking**: Visual progress bars and spending analytics
- **Financial Insights**: Daily averages and spending trends

### Spiritual Integration
- **Faith-Based Categories**: Spiritual life management
- **Divine Design**: Beautiful spiritual-themed UI
- **Holistic Approach**: Balance spiritual, business, and personal life

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd divine-life-calendar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   └── progress.tsx
│   └── UnifiedLifeCalendar.tsx # Main calendar component
├── pages/
│   ├── Index.tsx              # Budget dashboard page
│   ├── Calendar.tsx           # Calendar page
│   └── NotFound.tsx           # 404 page
├── types/
│   └── calendar.ts            # TypeScript type definitions
├── lib/
│   └── utils.ts               # Utility functions
├── App.tsx                    # Main app component
├── main.tsx                   # App entry point
└── index.css                  # Global styles
```

## 🎨 Design System

The app uses a custom spiritual-themed design system with:

- **Divine Gold**: Primary color for important actions
- **Spiritual Blue**: Secondary color for spiritual elements
- **Wisdom Purple**: Accent color for special features
- **Prosperity Green**: Success and financial elements
- **Health Orange**: Health and fitness elements
- **Family Pink**: Family and relationship elements

## 📱 Features Overview

### Calendar Features
- ✅ Month view with event display
- ✅ Day view with hourly schedule
- ✅ Event creation and editing
- ✅ Category-based filtering
- ✅ User switching
- ✅ Responsive design
- 🚧 Week view (coming soon)

### Budget Features
- ✅ Budget creation and allocation
- ✅ Category-based spending tracking
- ✅ Visual progress indicators
- ✅ Financial analytics
- ✅ Responsive dashboard

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Technology Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS Variables
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Build Tool**: Vite
- **UI Components**: Radix UI primitives

## 🎯 Usage

### Creating Events
1. Click "New Event" button
2. Fill in event details
3. Select category and subcategory
4. Set date and time
5. Save the event

### Managing Budget
1. Enter your monthly budget amount
2. Review suggested allocations
3. Click "Create Budget"
4. Track spending across categories

### Switching Users
Use the user toggle buttons to switch between Dr. Kofie and Dr. Lachele's calendars.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with love for spiritual and business life management
- Inspired by the vision of Dr. Kofie and Dr. Lachele Bryant
- Designed for the Oracle Life App ecosystem