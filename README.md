# Contact Details App

A React Native mobile application that replicates a contact details and appointment management interface. This app features a modern, dark-themed UI with contact management, appointment scheduling, and service tracking capabilities.

## Features

- **Contact Details View**: Display contact information with avatar and name
- **Quick Actions**: Schedule, Text, Call, and Email functionality
- **Media Management**: Photos and Notes sections
- **Payment Processing**: Checkout and payment tracking
- **Appointment Management**: Mark as paid and delete appointments
- **Services Tracking**: View associated services

## UI Components

- Dark theme with pink accent colors (#E91E63)
- Gradient checkout button
- Circular contact avatar with initials
- Action buttons with icons
- Modern card-based layout
- Page indicators for navigation

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd contact-details-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install iOS dependencies** (iOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

## Running the App

### Android
```bash
npm run android
# or
yarn android
```

### iOS
```bash
npm run ios
# or
yarn ios
```

### Development Server
```bash
npm start
# or
yarn start
```

## Project Structure

```
src/
├── components/
│   ├── ActionButton.tsx      # Reusable action button component
│   ├── ActionSection.tsx     # Photos/Notes section component
│   └── ContactAvatar.tsx     # Contact avatar with initials
├── screens/
│   └── ContactDetailsScreen.tsx  # Main contact details screen
App.tsx                       # Main app component with navigation
```

## Dependencies

- **React Native**: Mobile app framework
- **React Navigation**: Navigation library
- **React Native Vector Icons**: Icon library
- **React Native Linear Gradient**: Gradient effects
- **React Native Gesture Handler**: Touch gesture handling
- **React Native Screens**: Native screen optimization

## Features Implementation

### Contact Display
- Circular avatar with initials
- Contact name display
- Navigation header with back/edit buttons

### Action Buttons
- Schedule appointments
- Send text messages
- Make phone calls
- Send emails

### Management Features
- Photo gallery access
- Notes management
- Payment processing
- Appointment deletion

### Visual Design
- Dark background (#000)
- Pink accent color (#E91E63)
- Gradient effects on primary actions
- Clean, modern typography
- Proper spacing and layout

## Customization

### Colors
Update colors in the StyleSheet objects within each component:
- Background: `#000` (black)
- Accent: `#E91E63` (pink)
- Secondary: `#1A1A1A` (dark gray)
- Text: `#FFF` (white)

### Icons
Icons are managed through `react-native-vector-icons/MaterialIcons`. You can change icons by updating the `icon` prop in components.

### Layout
Modify the layout by adjusting the StyleSheet objects in each component file.

## Development Notes

- The app uses TypeScript for type safety
- Components are modular and reusable
- Follows React Native best practices
- Uses functional components with hooks
- Implements proper navigation patterns

## License

This project is for educational/demonstration purposes.