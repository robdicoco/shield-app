# Shield App

A modern React Native mobile application built with Expo, featuring a sleek design with Shield Corp branding and a comprehensive contact form system.

## 🛡️ Features

- **Home Screen**: Clean, minimalist design with an interactive Shield button
- **Contact Form**: Professional contact form with validation and mock submission
- **Navigation**: Seamless navigation between Home and Contact screens
- **Modern UI**: Beautiful, responsive design with Shield Corp branding
- **Form Validation**: Comprehensive validation for all required fields
- **Background Effects**: Blurred shield background image for visual appeal

## 📱 Screenshots

### Home Screen
- Interactive Shield button with color animation
- Clean, dark theme with gold accents

### Contact Screen
- Professional contact form with all required fields
- Background shield image with blur effect
- Return navigation button

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Expo Go app on your mobile device (for testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shield-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your device**
   - Scan the QR code with Expo Go (Android) or Camera app (iOS)
   - Or press 'a' for Android emulator or 'i' for iOS simulator

## 📁 Project Structure

```
shield-app/
├── src/
│   ├── components/
│   │   ├── ContactForm/
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ContactFormStyles.tsx
│   │   │   └── index.ts
│   │   ├── ReturnButton/
│   │   │   ├── ReturnButton.tsx
│   │   │   ├── ReturnButtonStyles.tsx
│   │   │   └── index.ts
│   │   └── ShieldButton/
│   │       ├── ShieldButtonS.tsx
│   │       └── ShieldButtonStyles.tsx
│   └── screens/
│       ├── Home/
│       │   ├── Home.tsx
│       │   └── HomeStyles.tsx
│       └── Contact/
│           ├── Contact.tsx
│           └── ContactStyles.tsx
├── assets/
│   └── shield_1.png
├── App.tsx
├── package.json
└── README.md
```

## 🎨 Design System

### Colors
- **Primary Gold**: `#E5BF3D` - Used for accents and highlights
- **Background**: `#000000` - Dark theme for modern look
- **Text**: `#FFFFFF` - White text for contrast
- **Error**: `#FF6B6B` - Red for validation errors

### Typography
- **Titles**: Bold, uppercase, 32px
- **Labels**: Semi-bold, 16px
- **Body Text**: Regular, 16px
- **Buttons**: Bold, uppercase, 18px

## 📋 Contact Form Fields

### Required Fields (*)
- **Email**: Email validation with proper format checking
- **First Name**: Text input with word capitalization
- **Location**: Text input for user's location
- **Country/Region**: Text input for geographical information
- **Message**: Multiline text area for detailed messages

### Optional Fields
- **Phone**: Phone number input with numeric keyboard

## 🔧 Technical Details

### Built With
- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **TypeScript**: Type-safe JavaScript
- **React Hooks**: State management and side effects

### Key Components

#### ShieldButton
- Interactive button with color animation
- Configurable press handler
- Optional tint color for visual feedback

#### ContactForm
- Comprehensive form validation
- Error handling and display
- Mock submission with success feedback
- Keyboard-aware scrolling

#### ReturnButton
- Navigation component with arrow icon
- Consistent styling with app theme
- Configurable press handler

## 🧪 Testing

The app includes:
- Form validation testing
- Navigation flow testing
- UI responsiveness testing
- Mock submission testing

## 📦 Build & Deploy

### Development
```bash
npm start
```

### Build for Production
```bash
expo build:android  # For Android
expo build:ios      # For iOS
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the GNU General Public License v2.0 - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Shield Corp Development Team**

## 🙏 Acknowledgments

- Expo team for the excellent development platform
- React Native community for the robust framework
- Shield Corp for the project requirements and design direction

## 📞 Support

For support and questions, please use the contact form within the app or reach out to the development team.

---

**Shield App** - Protecting your digital experience with style and functionality. 