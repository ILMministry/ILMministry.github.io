module.exports = {
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: {
          sourceDir: '../node_modules/react-native-vector-icons/RNVectorIcons',
          pbxprojPath: 'ios/ContactDetailsApp.xcodeproj/project.pbxproj',
        },
        android: {
          sourceDir: '../node_modules/react-native-vector-icons/android',
          packageImportPath: 'import io.github.react_native_vector_icons.RNVectorIconsPackage;',
        },
      },
    },
  },
};