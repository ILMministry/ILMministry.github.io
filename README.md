# The Oracle Spa Experience

A React Native mobile application for The Oracle Spa that provides a sophisticated client management and appointment booking interface. This app features a modern, dark-themed UI with client management, spa appointment scheduling, and service tracking capabilities.

## Features

- **Client Details View**: Display client information with avatar and name
- **Quick Actions**: Schedule spa appointments, Text, Call, and Email functionality
- **Media Management**: Photos and Notes sections for client history
- **Payment Processing**: Spa service checkout and payment tracking
- **Appointment Management**: Mark spa services as paid and delete appointments
- **Services Tracking**: View associated spa treatments and services

## UI Components

- Elegant dark theme with pink accent colors (#E91E63) - perfect for spa ambiance
- Gradient checkout button for spa services
- Circular client avatar with initials
- Action buttons with spa-focused icons
- Modern card-based layout for luxury feel
- Page indicators for navigation

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd the-oracle-spa-experience
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
│   ├── ActionButton.tsx      # Reusable spa action button component
│   ├── ActionSection.tsx     # Photos/Notes section component
│   └── ContactAvatar.tsx     # Client avatar with initials
├── screens/
│   └── ContactDetailsScreen.tsx  # Main client details screen
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

### Client Display
- Circular avatar with initials
- Client name display
- Navigation header with back/edit buttons

### Action Buttons
- Schedule spa appointments
- Send text messages to clients
- Make phone calls to clients
- Send emails to clients

### Spa Management Features
- Photo gallery access for client history
- Notes management for treatments
- Spa service payment processing
- Appointment deletion and management

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