#!/bin/bash

echo "🚀 Setting up The Oracle Spa Experience..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

# Check if running on macOS for iOS setup
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "🍎 Detected macOS. Setting up iOS dependencies..."
    if command -v pod &> /dev/null; then
        echo "📱 Installing iOS pods..."
        cd ios && pod install && cd ..
        echo "✅ iOS setup complete!"
    else
        echo "⚠️  CocoaPods not found. Please install CocoaPods for iOS development:"
        echo "   sudo gem install cocoapods"
    fi
fi

echo "🔧 Setting up React Native Vector Icons..."
# Link vector icons for Android
if [ -d "android" ]; then
    echo "🤖 Configuring Android vector icons..."
    # The react-native.config.js will handle the linking
fi

echo "✅ Setup complete!"
echo ""
echo "🎉 The Oracle Spa Experience is ready!"
echo ""
echo "To run the app:"
echo "  📱 For iOS: npm run ios"
echo "  🤖 For Android: npm run android"
echo "  🖥️  For development server: npm start"
echo ""
echo "Make sure you have:"
echo "  - Xcode installed (for iOS development)"
echo "  - Android Studio installed (for Android development)"
echo "  - iOS Simulator or Android Emulator running"